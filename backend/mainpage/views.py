from django.http.response import JsonResponse
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
  return JsonResponse('Hello, world!', safe=False)