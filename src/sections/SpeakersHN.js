import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import background from '../assets/speakers-line.svg'
import elipse from '../assets/elipse.svg'
import arrow from '../assets/arrow-down.svg'

// import japon from '../assets/flags/jp.svg'
import argentina from '../assets/flags/ar.svg'
// import alemania from '../assets/flags/de.svg'
// import españa from '../assets/flags/es.svg'
import mexico from '../assets/flags/mx.svg'
import brasil from '../assets/flags/br.svg'
// import bolivia from '../assets/flags/bo.svg'
// import colombia from '../assets/flags/co.svg'
// import suiza from '../assets/flags/ch.svg'
import honduras from '../assets/flags/hn.svg'
// import peru from '../assets/flags/pe.svg'
// import venezuela from '../assets/flags/ve.svg'
// import uk from '../assets/flags/gb.svg'
import dominicana from '../assets/flags/do.svg'
import costarica from '../assets/flags/cr.svg'
// import chile from '../assets/flags/cl.svg'
import usa from '../assets/flags/us.svg'
import ecuador from "../assets/flags/ec.svg"
import uruguay from "../assets/flags/uy.svg"
import singapore from "../assets/flags/sg.svg"

import ahmed from '../assets/speakersHN/Ahmed.jpg'
import alejandro from '../assets/speakersHN/AlejandroSantander.jpeg'
import andy from '../assets/speakersHN/andy.jpg'
import crisgarner from '../assets/speakersHN/crisgarner.png'
import cryptochica from '../assets/speakersHN/cryptochica.png'
import diegoMares from '../assets/speakersHN/DiegoMares.jpg'
import isaacGonzales from '../assets/speakersHN/Isaac.jpg'
import joao from "../assets/speakersHN/Joao.jpg"
import nicoSerrano from "../assets/speakersHN/NicolasSerrano.png"
import qz from "../assets/speakersHN/QZ.jpg"
import sam from '../assets/speakersHN/Sam.jpg'
import skylar from '../assets/speakersHN/skylar.jpeg'
import solange from '../assets/speakersHN/solange.png'
import vee from "../assets/speakersHN/Vee.png"


const Speakers = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  const medium = 700
  return (
    <SpeakersSection id="speakers">
      <Container>
        <h1>
          <span className="pixel">S</span>
          pe
          <span className="pixel">
            ak
            <Elipse src={elipse} />
          </span>
          ers {width >= medium && <Arrow src={arrow} />}
        </h1>
        <BoxWrapper>
          {/* <BoxItem className="supervip">
            <Content
              target="_blank"
              href="https://twitter.com/VitalikButerin"
              className="supervipContent"
            >
              <img src={vitalik} style={{ objectPosition: '100% 20%' }} />
              <div>
                <h1>Vitalik</h1>
                <Subtitile className="withPadding">
                  <h2>Ethereum Foundation </h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem> */}
          {/* <BoxItem className="vip">
            <Content
              className="vipContent"
              target="_blank"
              href="https://twitter.com/AyaMiyagotchi"
              className="vipContent"
            >
              <img src={aya2} style={{ objectPosition: '100% 20%' }} />
              <div>
                <h1>Aya Miyaguchi</h1>
                <Subtitile className="withPadding">
                  <h2>Ethereum Foundation </h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem> */}

          {/* ========== A ============ */}


          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/FilosofiaCodigo" className="importantPersonContent">
              <img style={{ objectPosition: '66% 50%'}} src={ahmed} />
              <div>
                <h1>Ahmed Castro</h1>
                <Subtitile>
                  <Country src={honduras} />
                  <h2>Scroll</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/the_ethernaut" className="importantPersonContent">
              <img style={{ objectPosition: '50% 50%', width:'75px' }} src={alejandro} />
              <div>
                <h1>Alejandro Santander</h1>
                <Subtitile>
                  <Country src={uruguay} />
                  <h2>EthernautDAO</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/AndyGuzmanEth" className="importantPersonContent">
              <img style={{ objectPosition: '66% 50%' }} src={andy} />
              <div>
                <h1>Andy Guzman</h1>
                <Subtitile>
                  <Country src={costarica} />
                  <h2>EF / PSE</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          {/* ========== C ============ */}

          {/* <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/crisgarner"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={crisgarner} />
              <div>
                <h1>Crisgarner</h1>
                <Subtitile>
                  <Country src={honduras} />
                  <h2>EF / PSE</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>


          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/cryptochica_arg"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={cryptochica} />
              <div>
                <h1>Cryptochica</h1>
                <Subtitile>
                  <Country src={argentina} />
                  <h2>ETH KIPU</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem> */}

          {/* ========== D ============ */}

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/Dmars300"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={diegoMares} />
              <div>
                <h1>Diego Mares</h1>
                <Subtitile>
                  <Country src={mexico} />
                  <h2>Cryptoversidad + Optimism Collective</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          {/* ========== I ============ */}

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/entigdd"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '50% 50%' }} src={isaacGonzales} />
              <div>
                <h1>Isaac González</h1>
                <Subtitile>
                  <Country src={dominicana} />
                  <h2>Wonderland / Lido</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

           {/* ========== J ============ */}

           <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/cripto_nita_"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '50% 50%' }} src={joao} />
              <div>
                <h1>João Kury</h1>
                <Subtitile>
                  <Country src={brasil} />
                  <h2>Modular Crypto</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          {/* ========== N ============ */}

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/NicoSerranoP"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '50% 50%' ,objectFit:'cover' }} src={nicoSerrano} />
              <div>
                <h1>Nicolas Serrano</h1>
                <Subtitile>
                  <Country src={ecuador} />
                  <h2>EF / PSE</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          {/* ========== Q ============ */}

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/not_qz"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '50% 50%' ,objectFit:'cover' }} src={qz} />
              <div>
                <h1>QZ</h1>
                <Subtitile>
                  <Country src={singapore} />
                  <h2>Ethereum Singapore</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          {/* ========== S ============ */}

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/samonchain"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={sam} />
              <div>
                <h1>Sam Richards</h1>
                <Subtitile>
                  <Country src={usa} />
                  <h2>EF / PSE</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/skylar_eth"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={skylar} />
              <div>
                <h1>Skylar Weaver</h1>
                <Subtitile>
                  <Country src={usa} />
                  <h2>Ethereum Foundation</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>


          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/solangegueiros"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={solange} />
              <div>
                <h1>Solange Gueiros</h1>
                <Subtitile>
                  <Country src={brasil} />
                  <h2>Chanlink Labs</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

           {/* ========== V ============ */}

           <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="#"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '50% 50%' ,objectFit:'cover' }} src={vee} />
              <div>
                <h1>Vee</h1>
                <Subtitile>
                  <Country src={singapore} />
                  <h2>EF / PSE</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>




        </BoxWrapper>
      </Container>
    </SpeakersSection>
  )
}





const SpeakersSection = styled.section`
  background: #0b0c0d;
  color: white;
  text-align: top;
  height: auto;
  h1 {
    font-family: 'Helvetica';
    font-weight: 400;
    font-size: 88px;
    line-height: 106px;
    text-transform: uppercase;
    color: #faf7f5;
    position: relative;
    @media only screen and (min-width: 701px) and (max-width: 1135px) {
      font-size: 50px;
    }
    @media only screen and (max-width: 700px) {
      font-size: 44px;
      line-height: 45px;
      margin-bottom: 73px;
    }
  }
  span.pixel {
    font-family: 'Pixel';
    position: relative;
  }
`

const Elipse = styled.img`
  position: absolute;
  @media only screen and (min-width: 701px) and (max-width: 1135px) {
    bottom: -15px;
    right: -111px;
    width: 280px;
  }
  @media only screen and (max-width: 700px) {
    bottom: -12px;
    right: -97px;
    width: 246px;
  }
  bottom: -22px;
  right: -183px;
`

const BoxWrapper = styled.div`
  column-gap: 0px;
  outline: 1px solid #4d4d4d;
  margin-right: 0;
  margin-left: auto;
  column-count: 3;
  max-width: 780px;
  @media only screen and (max-width: 1100px) {
    max-width: 540px;
    column-count: 2;
  }
  h1 {
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: #faf7f5;
    margin: 0;
    @media only screen and (max-width: 1135px) {
      font-size: 12px;
    }
  }
  h2 {
    font-size: 12px;
    line-height: 14px;
    color: #737373;
    margin: 0;
    @media only screen and (max-width: 1135px) {
      font-size: 9px;
    }
  }
`
const Subtitile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &.withPadding {
    padding-left: 16px;
    h2 {
      padding-left: 0px !important;
    }
  }
  h2 {
    padding-top: 2px;
  }
`

const BoxItem = styled.div`
  background: #0b0c0d;
  width: 100%;
  display: inline-block;
  margin-bottom: 0px;
  margin-top: 0px;
  font-family: 'Helvetica';
  font-weight: 400;
  outline: 1px solid #4d4d4d;
  &.supervip {
    height: 228px;
  }
  &.vip {
    height: 152px;
  }
  &.importantPerson {
    height: 96px;
  }
`
const Content = styled.a`
  overflow: hidden;
  text-decoration: none;
  @media only screen and (min-width: 701px) {
    width: 100%;
  }
  div {
    max-width: 100%;
  }
  img {
    height: 44px;
    padding: 16px;
    object-fit: cover;
    @media only screen and (max-width: 1135px) {
      padding: 13px;
    }
    @media only screen and (max-width: 540px) {
      padding: 13px;
    }
  }
  &.importantPersonContent {
    display: flex;
    align-items: center;
    img {
      height: 64px;
      width: 64px;
      object-fit: cover;
      object-position: center;
      padding: 14px 16px;
      @media only screen and (max-width: 540px) {
        padding: 11px 13px;
      }
    }
  }
  &.supervipContent {
    display: inline-block;
    h1 {
      padding-left: 16px;
    }
    @media only screen and (max-width: 540px) {
      width: 100%;
    }
    img {
      height: 147px;
      width: 228px;
      @media only screen and (max-width: 540px) {
        object-fit: cover;
        width: calc(100% - 26px);
        object-position: 50% 20%;
      }
    }
  }
  &.vipContent {
    display: inline-block;
    h1,
    h2 {
      padding-left: 16px;
    }
    @media only screen and (max-width: 540px) {
      width: 100%;
    }
    img {
      height: 71px;
      width: 228px;
      object-fit: cover;
      object-position: center;
      @media only screen and (max-width: 540px) {
        width: calc(100% - 26px);
        object-fit: cover;
      }
    }
  }
`

const Arrow = styled.img`
  padding-left: 100px;
  padding-bottom: 11px;
`

const Country = styled.img`
  height: 15px !important;
  display: inline;
  width: 24px !important;
  margin: 0 7px 0 0 !important;
  padding: 0 !important;
  border-radius: 2px;
`

const Container = styled.div`
  max-width: 1440px;
  padding: 160px 40px 320px 40px;
  @media only screen and (max-width: 1100px) {
    padding: 80px 15px 150px 15px;
  }
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: 92% 100%;
  @media only screen and (min-width: 1440px) {
    margin: 0 auto;
  }
  text-align: left;
`

export default Speakers
