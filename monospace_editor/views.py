from rest_framework import permissions, viewsets

from monospace_editor.models import User
from monospace_editor.permissions import IsAccountOwner
from monospace_editor.serializers import UserSerializer

from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.generic.base import TemplateView
from django.utils.decorators import method_decorator
from django.http import HttpResponse

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

    def create_user(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            User.objects.create_user(**serializer.validated_data)
            return HttpResponse(serializer.validated_data, status=201)

        return HttpResponse({
            'status': 'Bad request',
            'message': 'Account could not be created with received data.'
        }, status=404)