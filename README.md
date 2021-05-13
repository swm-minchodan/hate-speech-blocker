# 멈춰 !✋ 혐오표현 필터링✨

혐오 표현이 포함된 댓글을 블라인드 처리해주는 멈춰 ! 서비스의 데모 페이지입니다

### 기획 의도 🙆🏻‍♀️

재밌게 유튜브 영상을 보려다가 과한 악플에 눈쌀이 찌푸려졌던 경험 다들 있으신가요💦

유튜브 댓글 중 혐오성 표현이 포함된 댓글을 블라인드 해드립니다

넘쳐나는 혐오 표현에서 벗어나 마음의 평화를 찾아보세요 🕊🌱

### 지원 기능 ❗️

- [x] 댓글을 입력하면 해당 댓글의 혐오 표현 정도를 퍼센티지로 보여드립니다
- [x] 샘플 유튜브 영상의 댓글을 블라인드하여 보여드립니다
- [x] 원하시는 유튜브 영상의 url을 입력하시면 댓글을 블라인드하여 보여드립니다

<p align= "center">
<img width="600" alt="스크린샷 2021-04-30 오후 12 45 13" src="https://user-images.githubusercontent.com/43427306/118185684-c7230100-b477-11eb-9f09-231acbc48360.png">
</p>


### 직접 구동해보려면 ?!

python3 환경에서 다음 모듈을 설치해주세요
```
pip install django
pip install django-cors-headers
pip install djangorestframework
pip install --upgrade google-api-python-client
pip install keras
pip install tensorflow
pip install konlpy
pip install pickle
```

backend 폴더에서 장고 서버를 구동해주세요
```
cd backend
python manage.py runserver
```

front 폴더에서 리액트를 구동해주세요
```
cd front
npm start
```
