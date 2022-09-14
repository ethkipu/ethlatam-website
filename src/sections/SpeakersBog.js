import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import background from '../assets/speakers-line.svg'
import elipse from '../assets/elipse.svg'
import arrow from '../assets/arrow-down.svg'

import aya from '../assets/speakersBog/Aya.jpeg'
import aya2 from '../assets/speakers2/aya.jpeg'
import pablo from '../assets/speakers2/pablo.jpg'
import diego from '../assets/speakersBog/DiegoMazo.png'
import jordi from '../assets/speakersBog/jordi.jpg'
import ocando from '../assets/speakersBog/ocando.jpg'
import nadia from '../assets/speakersBog/NadiaAlvarez.jpg'
import jj from '../assets/speakersBog/JJCampuzano.png'
import dmars from '../assets/speakersBog/Dmars.png'
import solange from '../assets/speakersBog/SolangeGueiros.jpg'
import manu from '../assets/speakersBog/ManuAlzuru.jpg'
import tobal from '../assets/speakersBog/TobalGarcia.jpeg'
import alfredo from '../assets/speakersBog/AlfredoRoi.jpeg'
import mateo from '../assets/speakersBog/MateoDaza.jpg'
import cristian from '../assets/speakersBog/CristianEspinozaGarner.jpg'
import ale from '../assets/speakersBog/AleBorda.jpg'
import cryptochica from '../assets/speakersBog/cryptochica.png'
import criptolawyer from '../assets/speakersBog/criptolawyer.jpg'
import justin from '../assets/speakersBog/justin.jpeg'
import diegoF from '../assets/speakersBog/DiegoFernandez.jpeg'
import lucas from '../assets/speakersBog/LucasJolias.jpg'

import japon from '../assets/flags/jp.svg'
import argentina from '../assets/flags/ar.svg'
import españa from '../assets/flags/es.svg'
import mexico from '../assets/flags/mx.svg'
import brasil from '../assets/flags/br.svg'
import colombia from '../assets/flags/co.svg'
import suiza from '../assets/flags/ch.svg'
import honduras from '../assets/flags/hn.svg'
import peru from '../assets/flags/pe.svg'
import venezuela from '../assets/flags/ve.svg'
import uk from '../assets/flags/gb.svg'

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
          <BoxItem className="vip">
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
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/PabloSabbatella"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={pablo} />
              <div>
                <h1>Pablo Sabbatella</h1>
                <Subtitile>
                  <Country src={argentina} />
                  <h2>Defy Education </h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/criptolawyer" className="importantPersonContent">
              <img style={{ objectPosition: '100% 50%' }} src={criptolawyer} />
              <div>
                <h1>Ana CryptoLawyer</h1>
                <Subtitile>
                  <Country src={venezuela} />
                  <h2>CryptoLawyer </h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/ManuAlzuru"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={manu} />
              <div>
                <h1>Manu Alzuru</h1>
                <Subtitile>
                  <Country src={españa} />
                  <h2>DoinGudHQ</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/Dmars300"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={dmars} />
              <div>
                <h1>DMars</h1>
                <Subtitile>
                  <Country src={mexico} />
                  <h2>Cryptoversidad</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content
              className="vipContent"
              target="_blank"
              href="https://twitter.com/drakefjustin"
              className="vipContent"
            >
              <img src={justin} style={{ objectPosition: '100% 20%' }} />
              <div>
                <h1>Justin Ðrake</h1>
                <Subtitile className="withPadding">
                  <Country src={uk} />
                  <h2>Ethereum Foundation </h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/aroisenzvit"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '35% 50%' }} src={alfredo} />
              <div>
                <h1>Alfredo Roisenzvit</h1>
                <Subtitile>
                  <Country src={argentina} />
                  <h2>MoonQuant Capital</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/crisgarner"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={cristian} />
              <div>
                <h1>Cristian Espinoza Garner</h1>
                <Subtitile>
                  <Country src={honduras} />
                  <h2>Cryptex Finance</h2>
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
                  <h2>Chainlink</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content
              className="vipContent"
              target="_blank"
              href="https://twitter.com/nad8802?lang=es"
            >
              <img style={{ objectPosition: '100% 33%' }} src={nadia} />
              <div>
                <h1>Nadia Alvarez</h1>
                <Subtitile className="withPadding">
                  <Country src={colombia} />
                  <h2>MakerDAO</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/ocandocrypto"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={ocando} />
              <div>
                <h1>Angela Ocando</h1>
                <Subtitile>
                  <Country src={colombia} />
                  <h2>Platzi</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/Aleborda21"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={ale} />
              <div>
                <h1>Ale Borda</h1>
                <Subtitile>
                  <Country src={peru} />
                  <h2>Fifty Years</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/fernandezdiego"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={diegoF} />
              <div>
                <h1>Diego Fernandez</h1>
                <Subtitile>
                  <Country src={argentina} />
                  <h2>Gobierno de la ciudad  Buenos Aires</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content
              className="vipContent"
              target="_blank"
              href="https://twitter.com/jbaylina"
            >
              <img style={{ objectPosition: '100% 38%' }} src={jordi} />
              <div>
                <h1>Jordi Baylina</h1>
                <Subtitile className="withPadding">
                  <Country src={suiza} />
                  <h2>Giveth.io</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>


          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/tobalgarcia_"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={tobal} />
              <div>
                <h1>Tobal García</h1>
                <Subtitile>
                  <Country src={colombia} />
                  <h2>Maker Growth</h2>
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
                  <h2>DeFi Latam</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>


          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/mateodazab"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={mateo} />
              <div>
                <h1>Mateo Daza</h1>
                <Subtitile>
                  <Country src={colombia} />
                  <h2>Giveth.io</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="vip">
            <Content
              className="vipContent"
              target="_blank"
              href="https://twitter.com/das_grasshopper"
            >
              <img style={{ objectPosition: '100% 39%' }} src={jj} />
              <div>
                <h1>JJ Campuzano</h1>
                <Subtitile className="withPadding">
                  <Country src={mexico} />
                  <h2>CypherpunkCitadel DAO</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>
          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/lucasjolias"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={lucas} />
              <div>
                <h1>Lucas Jolias</h1>
                <Subtitile>
                  <Country src={argentina} />
                  <h2>OS City</h2>
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
  &.withPadding{
    padding-left: 16px;
    h2 {
      padding-left: 0px!important;
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
    height: 76px;
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
      height: 44px;
      width: 44px;
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