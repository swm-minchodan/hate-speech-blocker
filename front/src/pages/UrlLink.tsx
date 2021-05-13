import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import arrowSvg from '../images/arrow.svg';

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


function UrlLink() {
  const [url, setUrl] = useState<string>('')

  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';


  async function getPercentage(url: string) : Promise<number> { 
    return await axios.post(`/percentage`,{ url })
    .then(res => res.data);
  }

  const enterSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
        onSubmit();
    }
  }

  async function onSubmit() {
      setUrl('')
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