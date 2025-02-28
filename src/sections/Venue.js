import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import location from '../assets/location.svg'
import background from '../assets/venue-background.svg'
import backgroundSmall from '../assets/venue-small-background.png'

export default function Venue({ locationHref, venueSmSrc, venueLgSrc, edition }) {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  const intl = useIntl()
  const medium = 700
  return (
    <VenueSection id="venue">
      <Container>
        <Box>
          <img src={location} alt='location venue background'/>
          <h1 dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: edition + ".venue.title" }) }} />
          <h2 dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: edition + ".venue.address" }) }} />

          {width < medium && <img className="venue" src={venueSmSrc} alt='venue'/>}
          <a href={locationHref} target="_blank" rel="noreferrer" >
          <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "venue.link" }) }} />
          </a>
        </Box>
        <div>
          {width >= medium && <img src={venueLgSrc} alt='venue'/>}
        </div>
      </Container>
    </VenueSection>
  )
}

const VenueSection = styled.section`
  background: #e3e3e3;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: right;
  color: white;
  text-align: center;
  height: 800px;
  @media only screen and (max-width: 700px) {
    height: auto;
    background-image: url(${backgroundSmall});
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
    font-family: 'Helvetica-Bold';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #0b0c0d;
    text-decoration: none;
  }
  h2 {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #737373;
    margin-bottom: 260px;
    @media only screen and (max-width: 700px) {
      font-size: 14px;
      margin-bottom: 50px;
      max-width: 90%;
    }
  }
`
const Box = styled.div`
  padding: 100px 0;
  @media only screen and (max-width: 700px) {
    padding: 160px 0 50px 0;
    img.venue {
      margin-left: 30px;
      width: calc(100% - 30px);
    }
  }
`

const Container = styled.div`
  max-width: 1440px;
  padding: 0 0 0 40px;
  display: flex;
  overflow: hidden;
  justify-content: space-between;
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
  padding-bottom: 80px;
`
