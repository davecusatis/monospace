__author__ = 'david'

from django.contrib.auth.backends import ModelBackend
from monospace_editor.models import User
from monospace.settings import AUTHENTICATION_BACKENDS

class MonospaceAuthBackend(ModelBackend):
    def authenticate(self, username=None, password=None, **kwargs):
        if username is None:
            username = kwargs.get('email', None)
        try:
            user = User.objects.get(email=username)
            if user.check_password(password):
                user.backend = AUTHENTICATION_BACKENDS[0]
                user.is_authenticated = True
                return user
        except User.DoesNotExist:
            return None
