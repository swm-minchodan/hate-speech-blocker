import React from 'react';
import styled from 'styled-components'
import decorator2Svg from '../images/decorator2.svg';
import decorator1Svg from '../images/decorator1.svg';
import decorator3Svg from '../images/decorator3.svg';
import Percentage from './Percentage';
import UrlLink from './UrlLink';
import Header from './Header'
import Information from './Information'
import Example from './Example'
import Footer from './Footer'

function Main() {
  return (
    <Container>
      <Header/>
      <MainComponent>
        <Decorator1 src={decorator1Svg} />
        <Decorator2 src={decorator2Svg} />
        <Decorator3 src={decorator3Svg} />
        <Information/>
        <Percentage/>
        <Example/>
        <UrlLink/>
      </MainComponent>
      <Footer/>
    </Container>
  );
}

const MainComponent = styled.div`
  position: relative;
  width: 1440px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Decorator1 = styled.img`
  position: absolute;
  width: 600px;
  height: 500px;
  left: 400px;
  top: -100px;
  z-index: -1;
`
const Decorator2 = styled.img`
  position: absolute;
  width: 600px;
  height: 450px;
  left: 77.3px;
  top: 330px;
`
const Decorator3 = styled.img`
  position: absolute;
  width: 400px;
  height: 300px;
  right: -20px;
  bottom: 100px;
`

export default Main;
