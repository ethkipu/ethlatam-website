import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'

import auth0 from '../assets/sponsors2/auth0.svg'
import buenosAiresCiudad from '../assets/sponsors2/ba.svg'
import belo from '../assets/sponsors2/belo.svg'
import bitso from '../assets/sponsors2/bitso.svg'
import connext from '../assets/sponsors2/connext.svg'
import decentraland from '../assets/sponsors2/decentraland.svg'
import epns from '../assets/sponsors2/epns.svg'
import ethereumFoundation from '../assets/sponsors2/ethereumFoundation.svg'
import ethGlobal from '../assets/sponsors2/ETHGlobal.svg'
import exactly from '../assets/sponsors2/exactly.svg'
import lemon from '../assets/sponsors2/lemon.svg'
import lens from '../assets/sponsors2/lens.svg'
import livepeer from '../assets/sponsors2/livepeer.svg'
import maker from '../assets/sponsors2/Maker.svg'
import metis from '../assets/sponsors2/metis.svg'
import oz from '../assets/sponsors2/OZ.svg'
import polygon from '../assets/sponsors2/polygon.svg'
import protofire from '../assets/sponsors2/protofire.svg'
import ripio from '../assets/sponsors2/ripio.svg'
import scroll from '../assets/sponsors2/Scroll.svg'
import starkware from '../assets/sponsors2/starkware.png'
import theGraph from '../assets/sponsors2/TheGraph.svg'
import thinkandDev from '../assets/sponsors2/ThinkandDev.png'
import wink from '../assets/sponsors2/wink.svg'
import wonderland from '../assets/sponsors2/Wonderland.png'
import argent from '../assets/sponsors2/worldcoin.svg'
import { useLanguage } from '../context/LanguageContext'

const Sponsors = () => {
  const { locale } = useLanguage()
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  const medium = 700
  const intl = useIntl()
  return (
    <SponsorsSection id="sponsors" locale={locale}>
      <Container>
        <h1 dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "sponsors.title" }) }} />
        <Row>
          <BoxItem className="tierOne">
            <BoxInfo>
              <img src={ripio} width="280" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierOne">
            <BoxInfo>
              <img src={buenosAiresCiudad} width="200" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierOne">
            <BoxInfo>
              <img src={wink} width="300" />
            </BoxInfo>
          </BoxItem>
        </Row>
        <Row>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img width="270" src={belo} />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img width={width >= medium ? 170 : 150} src={argent} />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img width="300" src={ethereumFoundation} />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img width="180" src={protofire} />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo />
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img width={width >= medium ? 200 : 150} src={decentraland} />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img width={width >= medium ? 210 : 150} src={oz} />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img width={width >= medium ? 210 : 150} src={maker} />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img width={width >= medium ? 220 : 160} src={starkware} />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img height="75" src={thinkandDev} />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img width="150" src={epns} />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img width="150" src={livepeer} />
            </BoxInfo>
          </BoxItem>
        </Row>
        <Row>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img width="90" src={auth0} />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img src={theGraph} />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img className="lens" src={lens} />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img width={width >= medium ? 120 : 95} src={exactly} />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img width={width >= medium ? 130 : 95} src={metis} />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img width={width >= medium ? 130 : 95} src={bitso} />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img width={width >= medium ? 210 : 150} src={polygon} />
            </BoxInfo>
          </BoxItem>

          <BoxItem className="tierThree">
            <BoxInfo>
              <img width={width >= medium ? 210 : 150} src={ethGlobal} />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img width={width >= medium ? 120 : 95} src={lemon} />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img width={width >= medium ? 130 : 95} src={scroll} />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img src={wonderland} />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img src={connext} />
            </BoxInfo>
          </BoxItem>
        </Row>
      </Container>
    </SponsorsSection>
  )
}

const SponsorsSection = styled.section`
  background: #0b0c0d;
  color: #4d4d4d;
  text-align: center;
  height: auto;
  h1 {
    font-family: 'Helvetica';
    font-weight: 400;
    font-size: 88px;
    line-height: 106px;
    text-transform: uppercase;
    color: #faf7f5;
    position: relative;
    @media only screen and (max-width: 700px) {
      font-size: ${props => (props.locale == 'pt' ? '40px' : '44px')};
      line-height: 45px;
      margin-bottom: 73px;
    }
  }
  span.pixel {
    font-family: 'Pixel';
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  outline: 1px solid #4d4d4d;
  max-width: 1134px;
  @media only screen and (max-width: 700px) {
    max-width: 360px;
    width: 360px;
  }
  @media only screen and (min-width: 701px) and (max-width: 1230px) {
    max-width: 600px;
    width: 600px;
  }
  margin-right: 0;
  margin-left: auto;
  margin-bottom: 1px;
  flex-wrap: wrap;
`

const BoxInfo = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const BoxItem = styled.div`
  background: #0b0c0d;
  width: 100%;
  display: inline-block;
  margin: 0;
  text-align: center;
  outline: 1px solid #4d4d4d;
  img {
    overflow: hidden;
  }
  &.tierZero {
    height: 250px;
    width: 567px;
    @media only screen and (max-width: 700px) {
      width: 360px;
    }
    @media only screen and (min-width: 701px) and (max-width: 1230px) {
      width: 600px;
    }
    .div {
      height: 290px;
      width: 560px;
    }
  }
  &.tierOne {
    height: 220px;
    width: 378px;
    @media only screen and (max-width: 700px) {
      width: 360px;
    }
    @media only screen and (min-width: 701px) and (max-width: 1230px) {
      width: 600px;
    }
    .div {
      height: 216px;
      width: 374px;
    }
  }
  &.tierTwo {
    height: 110px;
    width: 283.5px;
    @media only screen and (max-width: 700px) {
      width: 180px;
    }
    @media only screen and (min-width: 701px) and (max-width: 1230px) {
      width: 300px;
    }

    .div {
      height: 106px;
      width: 279px;
    }
  }
  &.tierThree {
    height: 88px;
    width: 189px;
    @media only screen and (max-width: 700px) {
      width: 120px;
    }
    @media only screen and (min-width: 701px) and (max-width: 1230px) {
      width: 200px;
    }

    .div {
      height: 84px;
      width: 185px;
    }
    img {
      max-width: 80%;
      &.lens {
        max-height: 100%;
      }
    }
  }
`

const Container = styled.div`
  max-width: 1440px;
  padding: 0 40px 160px 40px;
  @media only screen and (max-width: 700px) {
    padding: 0 15px 80px 15px;
  }
  @media only screen and (min-width: 1440px) {
    margin: 0 auto;
  }
  text-align: left;
  padding-bottom: 160px;
`

export default Sponsors
