from django.urls import path
from mainpage import views

urlpatterns = [
    path('posts', views.index, name='index'),
    path('percentage', views.index, name='index')
]