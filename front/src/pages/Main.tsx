import React from 'react';
import styled from 'styled-components'
import StopImage from '../images/stop.svg'
import Percentage from './Percentage';
import decorator2Svg from '../images/decorator2.svg';
import decorator1Svg from '../images/decorator1.svg';

function Main() {
  return (
    <Container>
      <header>
        <TopLogo src={StopImage} id="head-image"/>
        <div >
          <BigText>멈춰!</BigText>
          <div id="head-text">혐오 표현 필터링</div>
        </div>
      </header>
      <MainComponent>
        <Decorator1 src={decorator1Svg} />
        <Decorator2 src={decorator2Svg} />
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
        
      </MainComponent>
      <Footer>
        <FooterLogo src={StopImage} />
        <div className="foot-text">
          <div>
            혐오 표현이 없는  <br></br>클린한 인터넷 문화를 응원합니다
          </div>
          <div className="copy">
            Copyright © 2021 SW maestro - Minchodan <br></br>
            개발기 및 코드 구경가기
          </div >
        </div>
      </Footer>
    </Container>
  );
}

const TopLogo = styled.img`
  width: 80px;
  height: 80px;
  margin: 10px;
`

const MainComponent = styled.div`
  position: relative;
  width: 1440px;
`

const Footer = styled.div`
  width: 100%;
  display : flex;
  align-items : center;
  justify-content: space-between; 
  background-color : white;
  border-top : 1px solid rgba(31, 32, 65, 0.25);
  bottom : 0;
  width : 100%;
  height : 5%;
  min-height : 20px;
  overflow : hidden;
  font-size: calc(3px + 1vmin);
  padding: 26px 33px;
  box-sizing: border-box;
`

const FooterLogo = styled.img`
  width: 60px;
  height: 60px;
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
    margin-left: 13px;
  }
  .copy{
  text-align:end;
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
const Decorator1 = styled.img`
  position: absolute;
  width: 517.11px;
  height: 460.83px;
  left: 400px;
  top: -100px;
`

const Decorator2 = styled.img`
  position: absolute;
  width: 503.6px;
  height: 386.29px;
  left: 77.3px;
  top: 330px;
`


export default Main;
