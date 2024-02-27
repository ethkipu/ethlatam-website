import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FormattedHTMLMessage } from 'react-intl'

import esp from '../assets/sponsorsHN/esp.svg'
import pse from '../assets/sponsorsHN/pse.png'
import apecoin from '../assets/sponsorsHN/ape.png'
import scroll from '../assets/sponsorsHN/scroll.png'
import waku from '../assets/sponsorsHN/waku.svg'
import icp from '../assets/sponsorsHN/icp.png'
import chainlink from '../assets/sponsorsHN/chainlink.png'
import metis from '../assets/sponsorsHN/metis.png'
import metapool from '../assets/sponsorsHN/metapool.svg'
import starknet from "../assets/sponsorsHN/starknet.svg"
import eas from "../assets/sponsorsHN/EAS.png"
import axelar from "../assets/sponsorsHN/axelar.png"
import ens from "../assets/sponsorsHN/ens_logo_dao.png"
import dora from "../assets/sponsorsHN/dora.png"
import zksync from "../assets/sponsorsHN/zksync.png"
import quark from "../assets/sponsorsHN/quarkID.png"
import xucre from "../assets/sponsorsHN/xucre.png"
import unitec from "../assets/sponsorsHN/unitec.png"
import { useLanguage } from '../context/LanguageContext'

const SponsorsHN = () => {
  const { locale } = useLanguage()
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  const medium = 700

  return (
    <SponsorsHNSection id="media" locale={locale}>
      <Container>
        <h1>
          <FormattedHTMLMessage id="sponsors.title" />
        </h1>
        <Row>
          <BoxItem className="tierZero">
            <BoxInfo>
              <img src={esp} width="380" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierZero">
            <BoxInfo>
              <img src={scroll} width="380" />
            </BoxInfo>
          </BoxItem>
          {/* <BoxItem className="tierZero">
            <BoxInfo>
              <img src={pse} width="150" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierZero">
            <BoxInfo>
              <img src={apecoin} width="150" />
            </BoxInfo>
          </BoxItem> */}
       </Row>
       <Row>
          {/* <BoxItem className="tierOne">
            <BoxInfo>
              <img src={esp} width="300" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierOne">
            <BoxInfo>
              <img src={scroll} width="300" />
            </BoxInfo>
          </BoxItem> */}
          <BoxItem className="tierOne">
            <BoxInfo>
              <img src={pse} width="180" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierOne">
            <BoxInfo>
              <img src={apecoin} width="180" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierOne">
            <BoxInfo>
              <img src={waku} width="250" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierOne">
            <BoxInfo>
              <img src={ens} width="250" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierOne">
            <BoxInfo>
              <img src={zksync} width="250" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierOne">
            <BoxInfo>
              <img src={quark} width="250" />
            </BoxInfo>
          </BoxItem>
       </Row>
       {/* <Row>
          <BoxItem className="tierOne">
            <BoxInfo>
              <img src={ens} width="150" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierOne">
            <BoxInfo>
              <img src={livepeer} width="150" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierOne">
            <BoxInfo>
              <img src={opt} height="100" />
            </BoxInfo>
          </BoxItem>
       </Row> */}

       <Row>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img src={starknet} width="200" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img src={chainlink} width="150" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img src={metis} width="150" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img src={eas} width="125" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img src={metapool} width="200" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img src={axelar} width="200" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img src={dora} width="200" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img src={xucre} width="200" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img src={unitec} width="200" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img src={icp} width="200" />
            </BoxInfo>
          </BoxItem>
        </Row>
        {/* <Row>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img src={layer} width="250" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img src={push} height="70" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img src={optEsp} height="90" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img src={layer} width="250" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img src={layer} width="250" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierThree">
            <BoxInfo>
              <img src={push} height="70" />
            </BoxInfo>
          </BoxItem>
        </Row> */}
      </Container>
    </SponsorsHNSection>
  )
}


const SponsorsHNSection = styled.section`
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
  img.round{
    border-radius: 50%;
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

export default SponsorsHN
