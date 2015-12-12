from django.db import models, DataError, connection
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.contrib.auth.hashers import make_password
import logging
import sys

logger = logging.getLogger(__name__)


class UserManager(BaseUserManager):
    def create_user(self, email, password):
        if not email:
            raise ValueError('Users must have valid email.')

        email = self.normalize_email(email)
        # exists = self.objects.filter(email=email)
        # if not exists:
        #     raise DataError('User exists already.')

        user = self.model(email=email)
        user.password = make_password(password, hasher='sha1')
        print(user.password + ', ' + user.email, file=sys.stderr)
        logger.error('issue with user' + user.email + ', ' + user.password)
        user.save()
        return user

    # todo: create super user functionality, and backend support
    def create_superuser(self):
        pass


class User(AbstractBaseUser):
    def get_short_name(self):
        return self.email

    def get_full_name(self):
        return self.email

    email = models.TextField()
    objects = UserManager()

    def __str__(self):
        return self.email


class UserScripts(models.Model):
    user = models.ForeignKey(User)
    script_text = models.TextField()

    def __str__(self):
        return self.script_text


class UserScriptsManager(models.Manager):
    def update_script(self, user, script):
        pass

    def create(self, user, script):
        if not user or not script:
            raise ValueError('Invalid script or user.')

        #todo: if validate script here
        script = UserScripts(user=user, script=script)
        script.save()
        return script