import React from 'react'
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { PALETTE } from '../App'
import background from '../assets/hero-line.svg'
import logo from '../assets/logo.svg'
import { Button } from '../components/Button'
import Container from '../components/Container'
import Loop from '../components/Loop'
import { TextPixel } from '../components/TextPixel'

const Hero = ({ buttonSrc, loopSrc, color, colorButton, edition }) => {
  return (
    <HeroSection>
      <Container>
        <Box>
          <TextPixel align={"left"}>
            <FormattedMessage id={edition + '.hero.month'} />
            <br />
            <FormattedMessage id={edition + '.hero.date'} />
            <br />
            <FormattedMessage id={edition + '.hero.year'} />
          </TextPixel>
          <img alt="img" src={logo} />
          <TextPixel align={"right"} color={color}>
            <FormattedHTMLMessage id={edition + '.hero.city'} />
            <br />
            <FormattedHTMLMessage id={edition + '.hero.country'} />
          </TextPixel>
        </Box>
        <ButtonHero color={colorButton ?? PALETTE.GRAY} href={buttonSrc} target="_blank">
          <FormattedMessage id={edition + '.hero.button'} />
        </ButtonHero>
      </Container>
      <Loop reverse={true} content={<img alt="img" src={loopSrc} />} />
    </HeroSection>
  )
}

const HeroSection = styled.section`
  background: #0b0c0d;
  color: white;
  text-align: center;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center bottom;
  padding-bottom: 50px;
  height: auto;
`

const Box = styled.div`
  color: ${props => props.color};
  padding-top: 160px;
  padding-bottom: 115px;
  display: flex;
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 700px) {
    padding-top: 70px;
    flex-direction: column;
    img {
      max-width: 90%;
      padding: 60px 0;
    }
  }
`

const ButtonHero = styled(Button)`
  width: 395px;
  height: 61px;
  @media only screen and (max-width: 870px) {
    display: block;
    width: 254px;
    height: 102px;
    margin: 72px auto 50px auto;
  }
  @media only screen and (max-width: 700px) {
    &.spanish {
      padding: 0;
      border: 0;
      box-shadow: 0 0 0 0 transparent;
    }
  }
`

export default Hero
