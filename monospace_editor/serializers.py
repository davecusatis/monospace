__author__ = 'david'

from django.contrib.auth import update_session_auth_hash
from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'password')

        def create(self, validated_data):
            return User.objects.create(**validated_data)

        def update(self, instance, validated_data):
            instance.email = validated_data.get('email', instance.email)
            instance.save()

            # password = validated_data.get('password', None)
            # confirm_password = validated_data.get('salt')

            return instance

