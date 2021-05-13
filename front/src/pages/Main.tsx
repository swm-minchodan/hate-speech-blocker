import React from 'react';
import styled from 'styled-components'
import StopImage from '../images/stop.svg'
import { ReactComponent as ExampleImage} from '../images/ExampleImage.svg'
import Percentage from './Percentage';
import decorator2Svg from '../images/decorator2.svg';
import decorator1Svg from '../images/decorator1.svg';
import decorator3Svg from '../images/decorator3.svg';

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
        <Decorator3 src={decorator3Svg} />
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
          <ExampleImage/>
        </div>
        <Percentage/>

        <div className="Ex">
          <div className="info-text">
            <BigText>
            보기 싫은 댓글 없는 클린한 유튜브를 경험해보세요
            </BigText>
            <SmallText>
            보고 싶은 영상의 url을 입력하거나 샘플 영상 url을 선택해보세요<br/>
            데모 버전이 마음에 드신다면 크롬 익스텐션을 이용해보세요
            </SmallText>
          </div>
          <ButtonBox>
            <SubmitBtn>
              개훌륭 강형욱 분노
            </SubmitBtn>
            <SubmitBtn>
              파이 머니게임 리뷰
            </SubmitBtn>
            <SubmitBtn>
              보겸 고소 영상
            </SubmitBtn>
          </ButtonBox>
        </div>

      </MainComponent>
      <Footer>
        <FooterLogo src={StopImage} />
        <div className="foot-text">
          <div>
            혐오 표현이 없는  <br/>클린한 인터넷 문화를 응원합니다
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
    justify-content : space-between;
    height : 300px;
    margin: 80px;
    margin-bottom : 130px;
  }
  .info-text{
    display : flex;
    flex-direction : column;
  }
  .Ex{
    display : flex;
    justify-content : space-between;
    height : 140px;
    margin : 80px;
    margin-top : 130px;

  }
  .foot-text{
    display : flex;
    width : 100%;
    justify-content : space-between;  
    margin-left: 13px;
    color: rgba(31, 32, 65, 0.75);
  }
  .copy{
    text-align:end;
    color: rgba(31, 32, 65, 0.75);
  }
  #head-text{
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    display: flex;
    align-items: center;
    color: rgba(31, 32, 65, 0.75);
    mix-blend-mode: normal;
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

const Decorator3 = styled.img`
  position: absolute;
  width: 400px;
  height: 300px;
  right: -20px;
  bottom: 0px;
`

export default Main;
