import React from 'react';
import styled from 'styled-components'
import { ReactComponent as StopImage} from '../stop.svg'
import Percentage from './Percentage';

function Main() {
  return (
    <Container>
      <header>
        <StopImage id="head-image"/>
        <div >
          <BigText>멈춰!</BigText>
          <div id="head-text">혐오 표현 필터링</div>
        </div>
      </header>
      <MainComponent>
        <div className="info">
          <div className="info-text">
            <BigText>
              혐오표현이 포함된 댓글을 블라인드 처리해주는 <br/>
              크롬 확장앱 <span>멈춰!</span> 서비스의 데모 페이지입니다
            </BigText>
            <SmallText>
              유튜브 댓글 중 혐오성 발언을 블라인드 해드립니다<br/>
              넘쳐나는 혐오 표현에서 벗어나 마음의 평화를 찾아보세요
            </SmallText>
          </div>
        </div>
        <Percentage/>
        <footer>
        <StopImage height="auto" />
        <div className="foot-text">
          <div>
            혐오 표현이 없는  <br></br>클린한 인터넷 문화를 응원합니다
          </div>
          <div className="copy">
            Copyright © 2021 SW maestro - Minchodan <br></br>
            개발기 및 코드 구경가기
          </div >
        </div>
        </footer>
      </MainComponent>
    </Container>
  );
}

const MainComponent = styled.div`
  width: 1440px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  header{
    //position : fixed;
    display : flex;
    align-items : center;
    height: 80px;
    max-height: 70px;
    margin : 30px;
    width : 1440px;
  }
  footer{
    position : fixed;
    display : flex;
    align-items : center;
    background-color : white;
    border-top : 3px solid #111111;
    bottom : 0;
    width : 100%;
    height : 5%;
    min-height : 20px;
    overflow : hidden;
    font-size: calc(3px + 1vmin);
  }
  .info{
    display : flex;
    height : 300px;
    margin: 80px;
  }
  .info-text{
    display : flex;
    flex-direction : column;
  }
  .foot-text{
  display : flex;
  width : 100%;
  justify-content : space-between;  
  }
  .copy{
  text-align:end;
  }
  #head-image{
    height : 90%;
    margin : 10px;
  }
  #head-text{
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    display: flex;
    align-items: center;
  }
  #co{
    color : rgb(127,192,128);
  }
`
const BigText=styled.div`
  font-size : 32px;
  font-family: Mulish;
  font-style: normal;
  line-height: 45px;
  font-weight: bold;
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
export default Main;
