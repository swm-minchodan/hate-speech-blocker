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

def get_comment(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        video_id = data['url']
        api_key = 'AIzaSyCxWNU8vI-FUOaK0RQYhcHF5yuafhbSsxg'
        
        comments = list()
        api_obj = build('youtube', 'v3', developerKey=api_key)
        response = api_obj.commentThreads().list(part='snippet,replies', videoId=video_id, maxResults=30, order='relevance').execute()
        
        while response:
            for item in response['items']:
                yt_comment = item['snippet']['topLevelComment']['snippet']
                comment = {}

                #mapping logic
                percentage = hate_evaluate(yt_comment['textDisplay'])
                comment["comment"] = yt_comment['textDisplay']
                if percentage > threshold:
                  comment["comment"] = "혐오 표현이 감지되어 블라인드 처리된 댓글입니다"
                  
                comment["author"] = yt_comment['authorDisplayName']
                comment["author_image_url"] = yt_comment['authorProfileImageUrl']
                comment["date"] = yt_comment['publishedAt']
                comment["num_likes"] = yt_comment['likeCount']

                comments.append(comment)
            break
        return JsonResponse({"comments": comments}, safe=False)