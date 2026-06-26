from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.hashers import check_password, make_password

from OTS.models import Candidate


class PublicRoutesTests(TestCase):
    def test_root_displays_welcome_page(self):
        response = self.client.get('/')

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Testing System')

    def test_favicon_does_not_return_not_found(self):
        response = self.client.get(reverse('favicon'))

        self.assertEqual(response.status_code, 204)


class SettingsTests(TestCase):
    def setUp(self):
        self.candidate = Candidate.objects.create(
            username='learner',
            password=make_password('old-password'),
            name='Old Name',
        )
        session = self.client.session
        session['username'] = self.candidate.username
        session['name'] = self.candidate.name
        session.save()

    def test_settings_requires_login(self):
        self.client.session.flush()

        response = self.client.get(reverse('OTS:settings'))

        self.assertRedirects(response, reverse('OTS:login'))

    def test_profile_name_can_be_updated(self):
        response = self.client.post(reverse('OTS:settings'), {
            'action': 'profile',
            'name': 'New Name',
        })

        self.candidate.refresh_from_db()
        self.assertEqual(response.status_code, 200)
        self.assertEqual(self.candidate.name, 'New Name')
        self.assertContains(response, 'Profile updated successfully.')

    def test_password_can_be_changed(self):
        response = self.client.post(reverse('OTS:settings'), {
            'action': 'password',
            'current_password': 'old-password',
            'new_password': 'new-password',
            'confirm_password': 'new-password',
        })

        self.candidate.refresh_from_db()
        self.assertEqual(response.status_code, 200)
        self.assertTrue(check_password('new-password', self.candidate.password))

    def test_wrong_current_password_is_rejected(self):
        response = self.client.post(reverse('OTS:settings'), {
            'action': 'password',
            'current_password': 'wrong-password',
            'new_password': 'new-password',
            'confirm_password': 'new-password',
        })

        self.candidate.refresh_from_db()
        self.assertTrue(check_password('old-password', self.candidate.password))
        self.assertContains(response, 'current password is incorrect')

# Create your tests here.
