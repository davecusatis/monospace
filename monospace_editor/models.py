from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.contrib.auth.hashers import make_password

class UserManager(BaseUserManager):
    def create_user(self, email, password):
        if not email:
            raise ValueError('Users must have valid email.')

        user = self.model(email=self.normalize_email(email))
        user.set_password(make_password(password))
        user.save()
        return user

    # todo: create super user functionality, and backend support
    def create_superuser(self):
        pass


class User(AbstractBaseUser):
    email = models.TextField()
    objects = UserManager()

    def __str__(self):
        return self.email


class UserScripts(models.Model):
    user = models.ForeignKey(User)
    script_text = models.TextField()

    def __str__(self):
        return self.script_text