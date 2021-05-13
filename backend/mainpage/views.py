from django.http.response import JsonResponse
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from django.utils.decorators import method_decorator
import json
from googleapiclient.discovery import build

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
        
        video_id = data['sentence']
        api_key = 'AIzaSyCxWNU8vI-FUOaK0RQYhcHF5yuafhbSsxg'
        
        comments = list()
        api_obj = build('youtube', 'v3', developerKey=api_key)
        response = api_obj.commentThreads().list(part='snippet,replies', videoId=video_id, maxResults=30, order='relevance').execute()
        
        while response:
            for item in response['items']:
                yt_comment = item['snippet']['topLevelComment']['snippet']
                comment = {}

                comment["comment"] = yt_comment['textDisplay']
                comment["author"] = yt_comment['authorDisplayName']
                comment["author_image_url"] = yt_comment['authorProfileImageUrl']
                comment["date"] = yt_comment['publishedAt']
                comment["num_likes"] = yt_comment['likeCount']

                comments.append(comment)
            break

        return JsonResponse({"comments": json.dumps(comments, ensure_ascii=False)}, safe=False)