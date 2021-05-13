from django.urls import path
from mainpage import views

urlpatterns = [
    path('percentage', views.get_percentage, name='get_percentage'),
    path('getcomment', views.get_comment, name='get_comment')
]