from django.http.response import JsonResponse
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from django.utils.decorators import method_decorator
from googleapiclient.discovery import build
import json
from konlpy.tag import Okt
from tensorflow import keras
import pickle
import os

threshold = 50

okt = Okt()
k_tokenizer = pickle.load(open(os.path.join(os.getcwd(),"AI/keras_tokenizer.pkl"), "rb"))
model = keras.models.load_model(os.path.join(os.getcwd(),"AI/hate_model.h5"))

def tokenize(doc):
    return [okt.pos(doc, norm=True, stem=True)]

def hate_evaluate(string):
    data = tokenize(string)
    words = []
    for x in data[0]:
        if x[1] not in ['Josa'] and x[1] not in ['Punctuation']:
            words.append(x[0])
    print(words)
    sequences = k_tokenizer.texts_to_sequences([words])
    x = keras.preprocessing.sequence.pad_sequences(sequences, maxlen=100)
    
    pred_test = model.predict(x,verbose=1)
    result_array = (1 - pred_test)*100
    return float(result_array[0][0])

hate_evaluate('');

@ensure_csrf_cookie
@method_decorator(csrf_exempt, name='dispatch')

# Create your views here.
def filtering(sentence):
    return 0

def get_percentage(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        sentence = data['sentence']
        result = hate_evaluate(sentence)
        return JsonResponse(result, safe=False)

def get_video_info(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        video_id = data['url']
        api_key = 'AIzaSyCxWNU8vI-FUOaK0RQYhcHF5yuafhbSsxg'
        
        comments = list()
        api_obj = build('youtube', 'v3', developerKey=api_key)

        #getting comments
        comments_api_response = api_obj.commentThreads().list(part='snippet,replies', videoId=video_id, maxResults=30, order='relevance').execute()
        
        while comments_api_response:
            for item in comments_api_response['items']:
                comment = {}
                comment_api = item['snippet']['topLevelComment']['snippet']

                comment["comment"] = comment_api['textDisplay']
                comment["author"] = comment_api['authorDisplayName']
                comment["authorImageUrl"] = comment_api['authorProfileImageUrl']
                comment["date"] = comment_api['publishedAt']
                comment["numLikes"] = comment_api['likeCount']

                comments.append(comment)
            break

        #getting video info
        video_api_response = api_obj.videos().list(part='snippet,statistics', id=video_id).execute()['items'][0]
        video = {}
        video['title'] = video_api_response['snippet']['title']
        video['publishedAt'] = video_api_response['snippet']['publishedAt']
        video['description'] = video_api_response['snippet']['description']
        video['viewCount'] = video_api_response['statistics']['viewCount']
        video['likeCount'] = video_api_response['statistics']['likeCount']
        video['dislikeCount'] = video_api_response['statistics']['dislikeCount']
        channelId = video_api_response['snippet']['channelId']

        #getting channel info
        channel = {}
        channel_api_response = api_obj.channels().list(part='snippet,statistics', id=channelId).execute()['items'][0]
        channel['name'] = channel_api_response['snippet']['title']
        channel['imageUrl'] = channel_api_response['snippet']['thumbnails']['default']['url']
        channel['hiddenSubscriberCount'] = channel_api_response['statistics']['hiddenSubscriberCount']
        if channel['hiddenSubscriberCount'] == False:
            channel['subscriberCount'] = channel_api_response['statistics']['subscriberCount']

        return JsonResponse({"video": video, "channel": channel, "comments": comments}, safe=False)