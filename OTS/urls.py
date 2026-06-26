from django.urls import path
from OTS.views import *
app_name='OTS'
urlpatterns = [
    path('',welcome,name='welcome'),
    path('new-candidiate',candidateRegistationForm,name='registrationForm'),
    path('store-candidate',candidtateRegistation,name='storeCandidate'),
    path('login',loginView,name='login'),
    path('home',candidateHome,name='home'),
    path('test-paper',testPaper,name='testPaper'),
    path('calculate-result',calculateTestResult,name='calculateTest'),
    path('test-history',testResultHistory,name='testHistory'),
    path('settings', settingsView, name='settings'),
    path('result',showTestResult,name='result'),
    path('logout',logoutView,name='logout'),
]
