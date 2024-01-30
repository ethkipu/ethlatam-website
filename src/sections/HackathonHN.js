import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import location from '../assets/location.svg'
import background from '../assets/hackathon-background1.svg'
import backgroundSmall from '../assets/hackathon-background2.svg'
import hackathonSrc from '../assets/hackathon.png'
import { Button } from '../components/Button'
import { PALETTE } from '../App'

export default function EthToLatam(){
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  const medium = 700

  return (
    <HackathonHN id="hackathon">
      <Container>
        <HackathonImg>
         <img src={hackathonSrc} alt='hackathon'/>
        </HackathonImg>
        <Box >
          <h1>
            <span class='pixel'>&#60; <Blue>Hackathon</Blue> <br/> ETH LATAM &#62;</span>
          </h1>
          <h2>
            <span class='pixel'>&#60;DATE&#62;</span><White> <FormattedMessage id="hackathon.date" /> </White> <span class='pixel'>&#60;/DATE&#62;</span><br/>
            <span class='pixel'>&#60;PLACE&#62;</span> <Blue>SAN PEDRO SULA</Blue> <span class='pixel'>&#60;/PLACE&#62;</span>
          </h2>
          <ButtonHackathon color={PALETTE.PINK} href="https://taikai.network/ethlatam/hackathons/honduras" target="_blank">
            <FormattedMessage id="hackathon.cta" />
          </ButtonHackathon>
        </Box>
      </Container>
    </HackathonHN>
  )
}

const HackathonHN = styled.section`
  margin-top:80px;
  background: #0b0c0d;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: left;
  background-position-y:50px;
  color: white;
  text-align: center;
  height: 600px;
  @media only screen and (max-width: 700px) {
    height: auto;
    background-image: none;
    background-position: top right;
  }
  h1 {
    font-family: 'Helvetica';
    font-weight: 400;
    font-size: 72px;
    line-height: 64px;
    text-transform: uppercase;
    color: #white;
    position: relative;
    margin-top: 45px;
    margin-bottom: 32px;

    @media only screen and (max-width: 700px) {
      font-size: 47px;
      line-height: 49px;
      max-width: 90%;
    }
  }
  span.pixel {
    font-family: 'Pixel';
  }
  a {
    font-size: 24px;
    text-decoration: none;
  }
  h2 {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    font-family: 'Pixel';
    line-height: 36px;
    color: #737373;
    margin-bottom: 60px;
    @media only screen and (max-width: 700px) {
      font-size: 18px;
      margin-bottom: 50px;
      max-width: 90%;
    }
  }
`
const Box = styled.div`
  padding: 20px 0;
  @media only screen and (max-width: 700px) {
    padding: 10px 0 50px 0;
    img.venue {
      margin-left: 30px;
      width: calc(100% - 30px);
    }
  }
`

const Container = styled.div`
  background-image: url(${backgroundSmall});
  background-repeat: no-repeat;
  background-position: top right;
  padding: 0 0 0 40px;
  display: flex;
  overflow: hidden;
  justify-content: flex-start;
  @media only screen and (max-width: 700px) {
    padding: 0 0 0 15px;
    flex-direction: column;
    img {
      max-width: 95%;
    }
  }
  @media only screen and (min-width: 1440px) {
    margin: 0 auto;
  }
  text-align: left;
  padding-bottom: 0px;
`

const HackathonImg = styled.div`
  margin-top:20px;
`

const Blue = styled.span`
  color:#00BDE5;
`

const White = styled.span`
  color:#fff;
`

const ButtonHackathon = styled(Button)`
  max-width: 200px;
  height: 91px;
  font-family: 'Pixel';
  margin: 15px;
  font-size: 24px;
  padding: 30px 15px;
  text-align: center;
    @media only screen and (max-width: 600px) {
        width: 100%;
        text-align: center;
    }
`
