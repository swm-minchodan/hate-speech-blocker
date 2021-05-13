import React from 'react';
import styled from 'styled-components'
import StopImage from '../images/stop.svg'

function Footer() {
  return (
    <FooterWrapper>
      <FooterLogo src={StopImage} />
      <FooterText>
        <div>
          혐오 표현이 없는  <br/>클린한 인터넷 문화를 응원합니다
        </div>
        <Copyright>
          Copyright © 2021 SW maestro - Minchodan <br></br>
          <GithubLink href="https://github.com/swm-minchodan/hate-speech-blocker">개발기 및 코드 구경가기</GithubLink>
        </Copyright>
      </FooterText>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
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
const FooterText = styled.div`
  display : flex;
  width : 100%;
  justify-content : space-between;  
  margin-left: 13px;
  color: rgba(31, 32, 65, 0.75);
`
const Copyright = styled.div`
  text-align:end;
  color: rgba(31, 32, 65, 0.75);
`
const GithubLink = styled.a`
  &:link { text-decoration: none; color: rgba(31, 32, 65, 0.75);}
  &:visited { text-decoration: none; color: rgba(31, 32, 65, 0.75);}
  &:hover { text-decoration: none; color: rgba(31, 32, 65, 0.75);}
`

export default Footer;