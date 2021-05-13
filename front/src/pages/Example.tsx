import styled from 'styled-components'
import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';


const Example: FC<RouteComponentProps> = ({ history }) => {

  const goPreview = (url:string) => {
    history.push('/preview/'+url);
  }

  return(
    <ExampleWrapper>
      <InfoText>
        <BigText>
        보기 싫은 댓글 없는 클린한 유튜브를 경험해보세요
        </BigText>
        <SmallText>
        보고 싶은 영상의 url을 입력하거나 샘플 영상 url을 선택해보세요<br/>
        데모 버전이 마음에 드신다면 크롬 익스텐션을 이용해보세요
        </SmallText>
      </InfoText>
      <ButtonBox>
        <SubmitBtn onClick={() => goPreview('b8xLkUUyQyo')}>
          개훌륭 강형욱 분노
        </SubmitBtn>
        <SubmitBtn onClick={() => goPreview('ZCWdMCV32vI')}>
          파이 머니게임 리뷰
        </SubmitBtn>
        <SubmitBtn onClick={() => goPreview('3ScrmGDJjqk')}>
          보겸 고소 영상
        </SubmitBtn>
      </ButtonBox>
    </ExampleWrapper>
  )
}
const ExampleWrapper = styled.div`
  display : flex;
  justify-content : space-between;
  height : 140px;
  margin : 130px 80px 0px 80px;
`
const InfoText = styled.div`
  display : flex;
  flex-direction : column;
`
const BigText = styled.div`
  font-size : 32px;
  font-family: Mulish;
  font-style: normal;
  line-height: 45px;
  font-weight: bold;
  color: rgba(31,32,65,0.75);
  mix-blend-mode: normal;
  span{
    color : rgb(127,192,128);
  }
`
const SmallText=styled.div`
  display : flex;
  align-items: center;
  height : 80px;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 29px;
  color: #1F2041;
  opacity : 0.5;
`
const ButtonBox = styled.div`
  display : flex;
  justify-content : space-between;
  align-items : center;
  width : 600px;
`
const SubmitBtn = styled.a`
    width: 160px;
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
    z-index: 2;
    cursor: pointer;
`

export default Example;