import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import arrowSvg from '../images/arrow.svg';
import { RouteComponentProps } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    margin: 20px 80px 150px 80px;
`
const SearchBox = styled.input`
    width: 175px;
    height: 30px;

    background: #FFFFFF;
    border: 1px solid #97D9B9;
    box-sizing: border-box;

    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 18px;
    color: #1F2041;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin: 0 10px 0 4px;
`

const SubmitBtn = styled.a`
  width: 41px;
  height: 30px;

  background: linear-gradient(180deg, #9FE7B3 0%, #97D9B9 100%);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const SmallText = styled.div`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 18px;

    display: flex;
    align-items: center;
    text-align: right;

    color: #1F2041;

    mix-blend-mode: normal;
    opacity: 0.5;
`

const ArrowImg = styled.img`
  width: 16px
  height: 17.6px
`


function UrlLink({history} : RouteComponentProps<{}>) {
  const [url, setUrl] = useState<string>('')

  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';

  const goPreview = (url:string) => {
    history.push('/preview/'+url);
  }

  const enterSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
        onSubmit();
    }
  }

  async function onSubmit() {
    var img = new Image();
		img.src = "http://img.youtube.com/vi/" + url + "/mqdefault.jpg";
		img.onload = function () {
			if(img.width === 120){
        alert("유효하지 않은 url 입니다");
        return
      } else {
        goPreview(url)
      setUrl('')
      }
		}
  }

  return (
    <Wrapper>
      <SmallText>마음에 드는 영상이 없다면 유튜브 URL을 직접 입력해보세요 !   https://youtube.com/watch?v=</SmallText>
      <SearchBox
          value={url}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
          onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => enterSearch(e)}
      />
      <SubmitBtn onClick={onSubmit}> <ArrowImg src={arrowSvg}/> </SubmitBtn>
    </Wrapper>
  );
}

export default UrlLink;