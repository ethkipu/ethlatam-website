import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FormattedHTMLMessage } from 'react-intl'

import etherscan from '../assets/sponsorsHN/community/etherscan.png'
import zupass from "../assets/sponsorsHN/community/zupass.png"
import tgu from "../assets/sponsorsHN/community/tgu.png"
import lima from "../assets/sponsorsHN/community/lima.png"
import cryptoversidad from "../assets/sponsorsHN/community/cryptoversidad.png"
import seedLatam from "../assets/sponsorsHN/community/seedLatam.png"
import modular from "../assets/sponsorsHN/community/modular.webp"
import samba from "../assets/sponsorsHN/community/samba.png"
import volcano from "../assets/sponsorsHN/community/volcano.png"
import dominicana from "../assets/sponsorsHN/community/dominicana.png"
import costarica from "../assets/sponsorsHN/community/costarica.svg"
import argentina from "../assets/sponsorsHN/community/argentina.svg"
import proofIntegrity from "../assets/sponsorsHN/community/proofIntegrity.png"
import sps from "../assets/sponsorsHN/community/SPS.png"
import singapur from "../assets/sponsorsHN/community/singapur.png"
import solow from "../assets/sponsorsHN/community/solow.png"
import usap from "../assets/sponsorsHN/community/usap.png"
import buro from "../assets/sponsorsHN/community/buro.png"
import cointelegraph from "../assets/sponsorsHN/community/cointelegraph.png"
import cryptoconexion from "../assets/sponsorsHN/community/cryptoconexion.png"
import filosofiacodigo from "../assets/sponsorsHN/community/filosofiacodigo.png"
import guatemala from "../assets/sponsorsHN/community/guatemala.png"
import uth from "../assets/sponsorsHN/community/uth.png"
import ceutec from "../assets/sponsorsHN/community/ceutec.png"
import fiesta from "../assets/sponsorsHN/community/Fiesta.png"
import ethco from "../assets/sponsorsHN/community/ETHCO.webp"


import { useLanguage } from '../context/LanguageContext'

const MediaHN = () => {
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
          <FormattedHTMLMessage id="media.title" />
        </h1>
       <Row>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={etherscan} width="200" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={tgu} width="225" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={lima} width="250" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={cryptoversidad} width="200" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={modular} style={{ objectPosition: '50% 20px', width:'200px' }} />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={seedLatam} width="200" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={dominicana} width="200" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={costarica} width="150" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={sps} width="200" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={proofIntegrity} width="220" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={argentina} width="150" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={solow} width="200" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={usap} width="150" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={buro} width="150" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={cointelegraph} width="250" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={cryptoconexion} width="200" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={filosofiacodigo} width="100" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={guatemala} width="150" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={uth} width="150" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={ethco} width="150" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={singapur} width="70" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={volcano} width="100" />
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={fiesta} width="80"/>
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={samba} width="100"/>
            </BoxInfo>
          </BoxItem>
          <BoxItem className="tierTwo">
            <BoxInfo>
              <img src={zupass} width="95" className='round'/>
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

export default MediaHN
