import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import sideSmall from '../assets/side-small.png'
import side from '../assets/side.png'

export default function App() {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  const medium = 700
  const intl = useIntl()
  return (
    <TheOtherSideSection id="theOtherSide">
      <Container>
        <Box>
        <h1 dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "theOtherSide.title" }) }} />
          <Button href="https://ethlatam.notion.site/ETHLatam-Side-Events-fbb102cb6fe643f095e826d9a821869b" target="_blank">
            Side events
          </Button>
          {width < medium && <img className="side" src={sideSmall} />}
        </Box>
        {width > medium && <img className="side" src={side} />}

      </Container>
    </TheOtherSideSection>
  )
}

const TheOtherSideSection = styled.section`
  background: #dcf908;
  background-repeat: no-repeat;
  background-position: right;
  color: white;
  text-align: center;
  overflow: hidden;
  height: 409px;
  @media only screen and (max-width: 700px) {
    height: auto;
    background-position: top right;
  }
  h1 {
    font-family: 'Helvetica';
    font-weight: 400;
    font-size: 72px;
    line-height: 64px;
    text-transform: uppercase;
    color: #0b0c0d;
    position: relative;
    margin-top: 45px;
    margin-bottom: 62px;

    @media only screen and (max-width: 700px) {
      font-size: 47px;
      line-height: 49px;
      max-width: 90%;
      margin: 100px auto 62px auto;
    }
  }
  span.pixel {
    font-family: 'Pixel';
  }
`
const Box = styled.div`
  padding: 100px 0;
  @media only screen and (max-width: 1140px) and (min-width: 700px) {
    padding: 20px 0;
  }
  img.side {
    max-width: 70%;
    object-fit: contain;
    object-position: top right;
  }
  @media only screen and (max-width: 700px) {
    text-align: center;
    padding: 0;
    img.side {
      margin-bottom: -3px;
      width: 100%;
      max-width: 100%;
    }
  }
`

const Button = styled.a`
  background: transparent;
  font-family: 'Pixel';
  height: 40px;
  margin: 72px auto 100px auto;
  text-decoration: none;
  padding: 18px 36px;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
  color: #0b0c0d;
  border: 3px solid #0b0c0d;
  box-sizing: border-box;
  box-shadow: -6px 6px 0px 1px #0b0c0d;
  @media only screen and (max-width: 700px) {
    &.spanish {
      padding: 0;
      border: 0;
      box-shadow: 0 0 0 0 transparent;
    }
  }
`

const Container = styled.div`
  max-width: 1492px;
  padding: 0 0 0 40px;
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  @media only screen and (max-width: 700px) {
    padding: 0;
    max-width: 100%;
    flex-direction: column;
    img {
      max-width: 100%;
    }
  }
  @media only screen and (min-width: 1440px) and and (max-width: 1470px){
    margin: 0 auto;
    margin-left: 50px;
  }
  @media only screen and (min-width: 1470px) {
    margin: 0 auto;
  }
  text-align: left;
  padding-bottom: 80px;
`
