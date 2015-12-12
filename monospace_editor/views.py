import json

from rest_framework import permissions, viewsets, views, status
from rest_framework.response import Response

from monospace_editor.models import User, UserScripts
from monospace_editor.permissions import IsAccountOwner
from monospace_editor.serializers import UserSerializer
from monospace_editor.backends import MonospaceAuthBackend

from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.generic.base import TemplateView
from django.utils.decorators import method_decorator
from django.http import HttpResponse
from django.contrib.auth import login, logout


class IndexView(TemplateView):
    template_name = 'index.html'

    @method_decorator(ensure_csrf_cookie)
    def dispatch(self, *args, **kwargs):
        return super(IndexView, self).dispatch(*args, **kwargs)


class UserViewSet(viewsets.ModelViewSet):
    lookup_field = 'email'
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)

        if self.request.method == 'POST':
            return (permissions.AllowAny(),)

        return (permissions.isAuthenticated(), IsAccountOwner(),)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            User.objects.create_user(**serializer.validated_data)
            return HttpResponse(serializer.validated_data, status=201)

        return HttpResponse({
            'status': 'Bad request',
            'message': 'Account could not be created with received data.'
        }, status=404)


class LoginView(views.APIView):
    @staticmethod
    def post(request, format=None):
        backend = MonospaceAuthBackend()
        data = request.data
        email = data['email']
        password = data['password']

        user = backend.authenticate(email, password)

        if user is not None:
            if user.is_active:
                login(request, user)
                serialized = UserSerializer()
                return Response(serialized.data)
            else:
                return Response({
                    'status': 'Unauthorized',
                    'message': 'This account is disabled'
                }, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({
                'status': 'Unauthorized',
                'message': 'This account is disabled'
            }, status=status.HTTP_401_UNAUTHORIZED)


class LogoutView(views.APIView):
#todo: figure out perm classes
#     permission_classes = (permissions.IsAuthenticated,)

    @staticmethod
    def post(request, format=None):
        logout(request)
        return Response({}, status=status.HTTP_204_NO_CONTENT)


class ScriptView(views.APIView):
    @staticmethod
    def post(request, format=None):
        if 'script' in request.data:
            #todo: some client side script validation
            #todo: if script doesn't exisit
            if True:
                UserScripts.objects.create(request.data['script'])
                return  Response({}, status=status.HTTP_201_CREATED)
            #todo: elif script exists update
            else:
                UserScripts.objects.update(id=request.data['script']['id'])
                return Response({}, status=status.HTTP_202_ACCEPTED)

        return Response({
            'status': 'Unauthorized',
            'message': 'Could not create or save script'
        }, status=status.HTTP_403_FORBIDDEN)