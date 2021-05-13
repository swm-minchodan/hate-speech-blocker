import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Second = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 20px 80px 50px 80px;
`
const SearchBox = styled.input`
    width: 791px;
    height: 56px;
    background: #FCFCFC;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-right: 15px;
    &::-webkit-input-placeholder {
      text-align: center;
    }
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 56px;
    /* or 224% */

    display: flex;
    align-items: center;
    text-align: center;

    color: rgba(31, 32, 65, 0.6);
    border: none;
`

const SubmitBtn = styled.a`
    width: 107px;
    height: 56px;
    background: linear-gradient(180deg, #9FE7B3 0%, #97D9B9 100%);
    border-radius: 8px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 21px;

    display: flex;
    align-items: center;
    justify-content: center;

    text-transform: uppercase;
    color: #FFFFFF;
`

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`


function Percentage() {
  const [sentence, setSentence] = useState<string>('www.youtube.com/')

  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';


  async function getPercentage(sentence: string) : Promise<number> { 
    return await axios.post(`/percentage`,{ sentence })
    .then(res => res.data);
  }

  const enterSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
        onSubmit();
    }
  }

  async function onSubmit() {
      


  }

  return (
    <Second>
      <SearchWrapper>
        <SearchBox
            placeholder="Youtube URL을 입력하고 혐오댓글을 검열해보세요"
            value={sentence}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSentence(e.target.value)}
            onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => enterSearch(e)}
        />
        <SubmitBtn onClick={onSubmit}> 확인해보기</SubmitBtn>
      </SearchWrapper>
    </Second>
  );
}

export default Percentage;