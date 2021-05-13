from django.http.response import JsonResponse
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from django.utils.decorators import method_decorator
import json

@ensure_csrf_cookie
@method_decorator(csrf_exempt, name='dispatch')
# Create your views here.
def index(request):
  return JsonResponse('Hello, world!', safe=False)

def index(request):
    if request.method == 'GET': # index
        return JsonResponse('Hello, world!', safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body) # create(form을 이용하여 submit한 형태) 
        sentence = data['sentence']
        return JsonResponse(len(sentence), safe=False)