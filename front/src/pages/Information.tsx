import React from 'react';
import styled from 'styled-components'
import { ReactComponent as ExampleImage} from '../images/ExampleImage.svg'

function Information() {
  return (
    <Info>
      <InfoText>
        <BigText>
          혐오표현이 포함된 댓글을 블라인드 처리해주는 <br/>
          크롬 확장앱 <span>멈춰!</span> 서비스의 데모 페이지입니다
        </BigText>
        <SmallText>
          유튜브 댓글 중 혐오성 발언을 블라인드 해드립니다<br/>
          넘쳐나는 혐오 표현에서 벗어나 마음의 평화를 찾아보세요
        </SmallText>
      </InfoText>
      <ExampleImage/>
    </Info>
  )
}


const Info = styled.div`
  display : flex;
  justify-content : space-between;
  height : 300px;
  margin: 80px;
  margin-bottom : 130px;
`

const InfoText = styled.div`
  display : flex;
  flex-direction : column;
`
const BigText=styled.div`
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

export default Information;