from django.shortcuts import render, redirect
from django.urls import reverse
from django.contrib.auth.hashers import check_password, make_password
from OTS.models import *
import random


def password_matches(raw_password, stored_password):
    """Support existing plain-text records while new passwords use Django hashes."""
    return check_password(raw_password, stored_password) or raw_password == stored_password

def app_page(request, page, data=None):
    """Render a Django-backed page through the shared React application."""
    payload = data or {}
    page_styles = {
        'welcome': 'welcome.css',
        'signup': 'registration_form.css',
        'registration-status': 'registration.css',
        'login': 'login.css',
        'home': 'home.css',
        'test': 'test_paper.css',
        'result': 'show_result.css',
        'history': 'candidate_history.css',
        'settings': 'settings.css',
    }
    payload.update({
        'page': page,
        'name': request.session.get('name', ''),
        'urls': {
            'welcome': reverse('OTS:welcome'),
            'signup': reverse('OTS:registrationForm'),
            'register': reverse('OTS:storeCandidate'),
            'login': reverse('OTS:login'),
            'home': reverse('OTS:home'),
            'test': reverse('OTS:testPaper'),
            'calculate': reverse('OTS:calculateTest'),
            'history': reverse('OTS:testHistory'),
            'settings': reverse('OTS:settings'),
            'result': reverse('OTS:result'),
            'logout': reverse('OTS:logout'),
        },
    })
    return render(request, 'app.html', {
        'app_data': payload,
        'page_stylesheet': 'css/' + page_styles.get(page, 'welcome.css'),
    })

def login_required(request):
    return 'name' in request.session

def welcome(request):
    return app_page(request, 'welcome')
def candidateRegistationForm(request):
    return app_page(request, 'signup')
def candidtateRegistation(request):
    if request.method=='POST':
        username=request.POST['username']
        #Check If The user already exists
        if (len(Candidate.objects.filter(username=username))):
            userStatus=1
        else:
            candidate=Candidate()
            candidate.username=username
            candidate.password=make_password(request.POST['password'])
            candidate.name=request.POST['name']
            candidate.save()
            userStatus=2
    else:
        userStatus=3 #request method is not POST
    return app_page(request, 'registration-status', {'userStatus': userStatus})
def loginView(request):
    if request.method=='POST':
        username=request.POST['username']
        password=request.POST['password']
        candidate=Candidate.objects.filter(username=username).first()
        if candidate is None or not password_matches(password, candidate.password):
            loginError="Invalid Username Or Password"
            res=app_page(request, 'login', {'loginError': loginError})
        else: 
            #login Success
            if candidate.password == password:
                candidate.password = make_password(password)
                candidate.save(update_fields=['password'])
            request.session['username']=candidate.username
            request.session['name']=candidate.name
            res=redirect('OTS:home')
    else:
        res=app_page(request, 'login')
    return res
def candidateHome(request):
    if not login_required(request):
        return redirect('OTS:login')
    candidate = Candidate.objects.get(username=request.session['username'])
    return app_page(request, 'home', {
        'attempts': candidate.test_attempted,
        'average': round(candidate.points or 0, 1),
    })
def testPaper(request):
    if not login_required(request):
        return redirect('OTS:login')
    #fetch question from database table
    try:
        n=max(1, min(int(request.GET.get('n', 5)), 20))
    except ValueError:
        n=5
    question_pool=list(Question.objects.all())
    random.shuffle(question_pool)
    question_list=question_pool[:n] 
    questions = [{
        'qid': question.qid,
        'question': question.que,
        'options': [
            {'value': 'a', 'label': question.a},
            {'value': 'b', 'label': question.b},
            {'value': 'c', 'label': question.c},
            {'value': 'd', 'label': question.d},
        ],
    } for question in question_list]
    return app_page(request, 'test', {'questions': questions, 'requestedCount': n})
def calculateTestResult(request):
    if not login_required(request):
        return redirect('OTS:login')
    total_attempt=0
    total_right=0
    total_wrong=0
    qid_list=[]
    for k in request.POST:
        if k.startswith('q') and k != 'csrfmiddlewaretoken' and k[1:].isdigit():
            qid_list.append(int(k[1:]))
    for n in qid_list:
        question=Question.objects.get(qid=n)
        try:
            user_answer = request.POST.get('q' + str(n))
            if user_answer and question.ans == user_answer:
                total_right+=1
            else:
                total_wrong+=1
            total_attempt+=1
        except KeyError:
            total_wrong += 1
            total_attempt += 1
    if len(qid_list) == 0:
        points=0
    else:
        points=(total_right-total_wrong)/len(qid_list)*10
    #store result in Result Table
    result=Result()
    result.username=Candidate.objects.get(username=request.session['username'])
    result.attempt=total_attempt
    result.right=total_right
    result.point=points
    result.wrong=total_wrong
    result.save()

    #Update Candidate Table
    candidate=Candidate.objects.get(username=request.session['username'])
    candidate.test_attempted+=1
    if candidate.points is None:
        candidate.points = 0
    candidate.points=(candidate.points*(candidate.test_attempted-1)+points)/candidate.test_attempted
    candidate.save()
    return redirect('OTS:result')

def testResultHistory(request):
    if not login_required(request):
        return redirect('OTS:login')
    candidate=Candidate.objects.get(username=request.session['username'])
    results=Result.objects.filter(username_id=candidate.username).order_by('-resultid')
    rows = [{
        'id': result.resultid,
        'date': result.date.strftime('%d %b %Y'),
        'time': result.time.strftime('%I:%M %p'),
        'attempt': result.attempt,
        'right': result.right,
        'wrong': result.wrong,
        'point': round(result.point, 1),
    } for result in results]
    return app_page(request, 'history', {
        'attempts': candidate.test_attempted,
        'average': round(candidate.points or 0, 1),
        'results': rows,
    })


def settingsView(request):
    if not login_required(request):
        return redirect('OTS:login')

    candidate = Candidate.objects.get(username=request.session['username'])
    message = None
    message_type = 'success'

    if request.method == 'POST':
        action = request.POST.get('action')
        if action == 'profile':
            name = request.POST.get('name', '').strip()
            if not name:
                message, message_type = 'Your name cannot be empty.', 'error'
            elif len(name) > 30:
                message, message_type = 'Your name must be 30 characters or fewer.', 'error'
            else:
                candidate.name = name
                candidate.save(update_fields=['name'])
                request.session['name'] = name
                message = 'Profile updated successfully.'
        elif action == 'password':
            current = request.POST.get('current_password', '')
            new = request.POST.get('new_password', '')
            confirmation = request.POST.get('confirm_password', '')
            if not password_matches(current, candidate.password):
                message, message_type = 'Your current password is incorrect.', 'error'
            elif len(new) < 6:
                message, message_type = 'Your new password must contain at least 6 characters.', 'error'
            elif new != confirmation:
                message, message_type = 'The new passwords do not match.', 'error'
            else:
                candidate.password = make_password(new)
                candidate.save(update_fields=['password'])
                message = 'Password changed successfully.'

    return app_page(request, 'settings', {
        'username': candidate.username,
        'message': message,
        'messageType': message_type,
    })
def showTestResult(request):
    if not login_required(request):
        return redirect('OTS:login')
    #Fetch Latest Result From Result Table
    result=Result.objects.filter(username_id=request.session['username']).order_by('-resultid').first()
    row = None if result is None else {
        'date': result.date.strftime('%d %b %Y'),
        'attempt': result.attempt,
        'right': result.right,
        'wrong': result.wrong,
        'point': round(result.point, 1),
    }
    return app_page(request, 'result', {'result': row})
def logoutView(request):
    if 'name' in request.session.keys():
        del request.session['username']
        del request.session['name']
    return redirect('OTS:login')
