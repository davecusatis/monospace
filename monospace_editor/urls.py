"""monospace URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers
from monospace_editor.views import UserViewSet, IndexView, LoginView, LogoutView, \
    ScriptView, ScriptDetailsView

router = routers.SimpleRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    url(r'^api/v0/', include(router.urls)),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/v0/auth/login/$', LoginView.as_view(), name='login'),
    url(r'^api/v0/auth/logout/$', LogoutView.as_view(), name='logout'),
    url(r'^api/v0/save_script/$', ScriptView.as_view(), name='save_script'),
    url(r'^api/v0/load_script/(?P<user_email>.+)/$', ScriptDetailsView.as_view(), name='load_script'),
    url('^.*$', IndexView.as_view(), name='index')
]
