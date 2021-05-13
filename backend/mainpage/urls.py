from django.urls import path
from mainpage import views

urlpatterns = [
    path('percentage', views.get_percentage, name='get_percentage'),
    path('getvideoinfo', views.get_video_info, name='get_video_info')
]