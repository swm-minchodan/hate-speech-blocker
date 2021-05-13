import React from 'react';
import styled from 'styled-components'
import StopImage from '../images/stop.svg'

function Header() {
  return(
    <HeaderWrapper>
      <TopLogo src={StopImage}/>
      <div>
        <BigText>멈춰!</BigText>
        <HeaderText>혐오 표현 필터링</HeaderText>
      </div>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  display : flex;
  align-items : center;
  height: 80px;
  max-height: 70px;
  margin : 36px;
  width : 1440px;
`
const TopLogo = styled.img`
  width: 80px;
  height: 80px;
  margin: 10px;
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
const HeaderText = styled.div`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;
  color: rgba(31, 32, 65, 0.75);
  mix-blend-mode: normal;
`

export default Header;