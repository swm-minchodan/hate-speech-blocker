import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Second = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 0 80px;
`

const BigText = styled.div`
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 56px;

    display: flex;
    align-items: center;
    text-align: center;

    color: rgba(31, 32, 65, 0.75);

    mix-blend-mode: normal;
    margin-bottom: 12px;
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
    margin-bottom: 28px;
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
    z-index: 2;
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
    cursor: pointer;
`

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const Result = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 56px;
  /* identical to box height, or 224% */

  display: flex;
  align-items: center;
  text-align: center;

  color: rgba(31, 32, 65, 0.6);
`

const ShowPercentage = styled.span`
    color: #9CC797;
`

function Percentage() {
  const [sentence, setSentence] = useState<string>('')
  const [percentage, setPercentage] = useState<string>('?????????')
  const [visibilty, setVisiblity] = useState<boolean>(false)

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
    if(!visibilty) setVisiblity(true);
    let result = await getPercentage(sentence)
    setPercentage(result.toFixed(2)+'%');
  }

  return (
    <Second>
      <BigText>?????? ????????? ????????? ????????? ??????????????????</BigText>
      <SmallText>????????? ????????? ?????? ??????????????? ??????????????????</SmallText>
      <SearchWrapper>
        <SearchBox
            placeholder="?????? ????????? ???????????? ?????? ??????????????? ??????????????????"
            value={sentence}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSentence(e.target.value)}
            onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => enterSearch(e)}
        />
        <SubmitBtn onClick={onSubmit}> ???????????????</SubmitBtn>
      </SearchWrapper>
      { visibilty && 
        <Result>???????????? ????????? ?????? ?????????&nbsp;<ShowPercentage> {percentage} </ShowPercentage>&nbsp;?????????</Result>
      }
    </Second>
  );
}

export default Percentage;