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
import colombia from '../assets/flags/co.svg'
// import suiza from '../assets/flags/ch.svg'
import honduras from '../assets/flags/hn.svg'
import peru from '../assets/flags/pe.svg'
import venezuela from '../assets/flags/ve.svg'
// import uk from '../assets/flags/gb.svg'
import dominicana from '../assets/flags/do.svg'
import costarica from '../assets/flags/cr.svg'
// import chile from '../assets/flags/cl.svg'
import usa from '../assets/flags/us.svg'
import ecuador from "../assets/flags/ec.svg"
import uruguay from "../assets/flags/uy.svg"
import singapore from "../assets/flags/sg.svg"
import panama from "../assets/flags/pa.svg"
import guatemala from "../assets/flags/gt.svg"
import india from "../assets/flags/in.svg"
import swiss from "../assets/flags/ch.svg"

import ahhsun from '../assets/speakersHN/ahhsun.png'
import alfonso from '../assets/speakersHN/alfonso.png'
import alex from '../assets/speakersHN/alex.png'
import ahmed from '../assets/speakersHN/Ahmed.jpg'
import alejandro from '../assets/speakersHN/alejandroSantander.png'
import andy from '../assets/speakersHN/andy.jpg'
import ariiellus from "../assets/speakersHN/ariiellus.png"
import bunny from "../assets/speakersHN/bunny.jpeg"
import chris from "../assets/speakersHN/chris.png"
import crisgarner from '../assets/speakersHN/crisgarner.png'
import cristina from "../assets/speakersHN/cristina.png"
import cryptochica from '../assets/speakersHN/cryptochica.png'
import denizen from '../assets/speakersHN/denizen.png'
import diegoMares from '../assets/speakersHN/DiegoMares.jpg'
import edwin from '../assets/speakersHN/edwin.PNG'
import francis from '../assets/speakersHN/francis.PNG'
import fabio from '../assets/speakersHN/fabio.png'
import guru from '../assets/speakersHN/guru.jpeg'
import isaacGonzales from '../assets/speakersHN/isaac.png'
import joao from "../assets/speakersHN/Joao.jpg"
import jose from "../assets/speakersHN/jose.png"
import joxes from "../assets/speakersHN/joxes.png"
import lee from "../assets/speakersHN/lee.png"
import lisa from "../assets/speakersHN/Lisa.png"
import lucy from "../assets/speakersHN/lucy.jpg"
import manugotsuka from "../assets/speakersHN/Manugotsuka.png"
import mattias from "../assets/speakersHN/mattias.png"
import natalia from "../assets/speakersHN/natalia.png"
import niklas from "../assets/speakersHN/niklas.png"
import nicoSerrano from "../assets/speakersHN/nico.png"
import omar from '../assets/speakersHN/omar.jpg'
import oyabun from '../assets/speakersHN/oyabun.png'
import pablo from '../assets/speakersHN/pablo.png'
import qz from "../assets/speakersHN/QZ.png"
import sam from '../assets/speakersHN/Sam.jpg'
import simonethg from "../assets/speakersHN/simonethg.png"
import skylar from '../assets/speakersHN/skylar.jpeg'
import sofia from '../assets/speakersHN/sofia.png'
import solange from '../assets/speakersHN/solange.png'
import stevan from '../assets/speakersHN/stevan.png'
import stupidGiant from '../assets/speakersHN/stupidGiant.png'
import vee from "../assets/speakersHN/Vee.png"
import vega from "../assets/speakersHN/vega.jpeg"
import vitalik from "../assets/speakersHN/vitalik.jpeg"


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
            <Content target="_blank" href="https://twitter.com/ahhsun_" className="importantPersonContent">
              <img style={{ objectPosition: '66% 50%'}} src={ahhsun} />
              <div>
                <h1>Ahhsun</h1>
                <Subtitile>
                  <Country src={honduras} />
                  <h2>Ethereum Tegucigalpa</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/strategicman_" className="importantPersonContent">
              <img style={{ objectPosition: '66% 50%'}} src={alex} />
              <div>
                <h1>Alex Garcia</h1>
                <Subtitile>
                  <Country src={usa} />
                  <h2>Xucre Network</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

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

          <BoxItem className="vip">
            <Content target="_blank" href="https://twitter.com/Ariiellus" className="vipContent">
              <img style={{ objectPosition: '66% 15%'}} src={ariiellus} />
              <div>
                <h1>Ariiellus</h1>
                <Subtitile className='withPadding'>
                  <Country src={mexico} />
                  <h2>Kairos Research</h2>
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
            <Content target="_blank" href="https://twitter.com/acampenni_" className="importantPersonContent">
              <img style={{ objectPosition: '50% 50%', width:'75px' }} src={alfonso} />
              <div>
                <h1>Alfonso Campeni</h1>
                <Subtitile>
                  <Country src={argentina} />
                  <h2>QuarkID</h2>
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

          {/* ========== B ============ */}

          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/ConejoCapital" className="importantPersonContent">
              <img style={{ objectPosition: '66% 50%' }} src={bunny} />
              <div>
                <h1>Bunny</h1>
                <Subtitile>
                  <Country src={peru} />
                  <h2>Search On Dora</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          {/* ========== C ============ */}

          <BoxItem className="supervip">
            <Content
              target="_blank"
              href="https://twitter.com/chrislemanade"
              className="supervipContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={chris} />
              <div>
                <h1>Chris Lema</h1>
                <Subtitile className="withPadding">
                  <Country src={usa} />
                  <h2>Scroll</h2>
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

          <BoxItem className="vip">
            <Content
              target="_blank"
              href="https://twitter.com/Crisincrypto"
              className="vipContent"
            >
              <img style={{ objectPosition: '100% 5%' }} src={cristina} />
              <div>
                <h1>Cristina</h1>
                <Subtitile className='withPadding'>
                  <Country src={peru} />
                  <h2>SEED Latam</h2>
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
          </BoxItem>

          {/* ========== D ============ */}

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/DnznJuan"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={denizen} />
              <div>
                <h1>Juan Denizen</h1>
                <Subtitile>
                  <Country src={guatemala} />
                  <h2>ETH Guatemala</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="vip">
            <Content
              target="_blank"
              href="https://twitter.com/Dmars300"
              className="vipContent"
            >
              <img style={{ objectPosition: '100% 15%' }} src={diegoMares} />
              <div>
                <h1>Diego Mares</h1>
                <Subtitile className='withPadding'>
                  <Country src={mexico} />
                  <h2>Cryptoversidad + Optimism Collective</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

            {/* ========== E ============ */}

            <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/blid_one"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={edwin} />
              <div>
                <h1>Edwin Fernández</h1>
                <Subtitile>
                  <Country src={peru} />
                  <h2>Definomics Lab</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          {/* ========== F ============ */}

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/FabioBudris"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={fabio} />
              <div>
                <h1>Fabio Budris</h1>
                <Subtitile>
                  <Country src={argentina} />
                  <h2>QuarkID</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/fsanchinelli"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={francis} />
              <div>
                <h1>Francis Sanchinelli</h1>
                <Subtitile>
                  <Country src={guatemala} />
                  <h2>Ethereum Guatemala</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          {/* ========== G ============ */}

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://x.com/hackyguru"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={guru} />
              <div>
                <h1>Guru</h1>
                <Subtitile>
                  <Country src={india} />
                  <h2>Waku</h2>
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

           <BoxItem className="vip">
            <Content
              target="_blank"
              href="https://twitter.com/cripto_nita_"
              className="vipContent"
            >
              <img style={{ objectPosition: '50% 15%' }} src={joao} />
              <div>
                <h1>João Kury</h1>
                <Subtitile className='withPadding'>
                  <Country src={brasil} />
                  <h2>Modular Crypto</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/josefabregab"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '50% 50%' }} src={jose} />
              <div>
                <h1>José Fábrega</h1>
                <Subtitile>
                  <Country src={panama} />
                  <h2>Metis</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/0xJoxes"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '50% 50%' }} src={joxes} />
              <div>
                <h1>Joxes</h1>
                <Subtitile>
                  <Country src={venezuela} />
                  <h2>SEED Latam</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          {/* ========== L ============ */}

          <BoxItem className="supervip">
            <Content
              target="_blank"
              href="https://twitter.com/lisajytan"
              className="supervipContent"
            >
              <img style={{ objectPosition: '50% 15%' }} src={lisa} />
              <div>
                <h1>Lisa JY Tan</h1>
                <Subtitile className="withPadding">
                  <Country src={singapore} />
                  <h2>Economics Design</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/LeeMarreros"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '50% 50%' ,objectFit:'cover' }} src={lee} />
              <div>
                <h1>Lee Marreros</h1>
                <Subtitile>
                  <Country src={peru} />
                  <h2>Blockchain Bites</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="#"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '50% 50%' ,objectFit:'cover' }} src={lucy} />
              <div>
                <h1>Lucy Aguilar</h1>
                <Subtitile>
                  <Country src={honduras} />
                  <h2>Ethereum Tegucigalpa</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          {/* ========== M ============ */}

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/Manugotsuka"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '50% 50%' ,objectFit:'cover' }} src={manugotsuka} />
              <div>
                <h1>Manugotsuka</h1>
                <Subtitile>
                  <Country src={venezuela} />
                  <h2>SEED Latam / L2 en español </h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/BronerMatthias"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '50% 50%' ,objectFit:'cover' }} src={mattias} />
              <div>
                <h1>Matthias Broner</h1>
                <Subtitile>
                  <Country src={argentina} />
                  <h2>zkSync</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          {/* ========== N ============ */}


          <BoxItem className="vip">
            <Content
              target="_blank"
              href="https://twitter.com/NicoSerranoP"
              className="vipContent"
            >
              <img style={{ objectPosition: '50% 40%' ,objectFit:'cover' }} src={natalia} />
              <div>
                <h1>Natalia Madrid</h1>
                <Subtitile className='withPadding'>
                  <Country src={colombia} />
                  <h2>Ethereum Foundation</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>


          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/NiklasAnzinger"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '50% 50%' ,objectFit:'cover' }} src={niklas} />
              <div>
                <h1>Niklas Anzinger</h1>
                <Subtitile>
                  <Country src={usa} />
                  <h2>Vitalia</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

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


      {/* ========== O ============ */}

      <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/espejelomar"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '50% 50%' ,objectFit:'cover' }} src={omar} />
              <div>
                <h1>Omar Espejel</h1>
                <Subtitile>
                  <Country src={mexico} />
                  <h2>Starknet</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/x0yabun"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '50% 50%' ,objectFit:'cover' }} src={oyabun} />
              <div>
                <h1>0yabun</h1>
                <Subtitile>
                  <Country src={honduras} />
                  <h2>Dragon Money DAO</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          {/* ========== P ============ */}

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/pmosque3"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '50% 50%' ,objectFit:'cover' }} src={pablo} />
              <div>
                <h1>Pablo Mosquella</h1>
                <Subtitile>
                  <Country src={argentina} />
                  <h2>Extrimian</h2>
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

          <BoxItem className="vip">
            <Content
              target="_blank"
              href="https://twitter.com/samonchain"
              className="vipContent"
            >
              <img style={{ objectPosition: '100% 5%' }} src={sam} />
              <div>
                <h1>Sam Richards</h1>
                <Subtitile className='withPadding'>
                  <Country src={usa} />
                  <h2>EF / PSE</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/samonchain"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={simonethg} />
              <div>
                <h1>Simonethg</h1>
                <Subtitile>
                  <Country src={venezuela} />
                  <h2>AcademiaQA</h2>
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

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/sofi_act"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={sofia} />
              <div>
                <h1>Sofia Alvarado</h1>
                <Subtitile>
                  <Country src={honduras} />
                  <h2>Ethereum Tegucigalpa</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="vip">
            <Content
              target="_blank"
              href="#"
              className="vipContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={stevan} />
              <div>
                <h1>Estevan Vilar</h1>
                <Subtitile className='withPadding'>
                  <Country src={swiss} />
                  <h2>zkSync</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content
              target="_blank"
              href="https://twitter.com/giantstupid"
              className="importantPersonContent"
            >
              <img style={{ objectPosition: '100% 50%' }} src={stupidGiant} />
              <div>
                <h1>Stupid Giant</h1>
                <Subtitile>
                  <Country src={honduras} />
                  <h2>Artists</h2>
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
                  <Country src={mexico} />
                  <h2>EF / PSE</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="importantPerson">
            <Content target="_blank" href="https://twitter.com/vegaypatino" className="importantPersonContent">
              <img style={{ objectPosition: '66% 50%' }} src={vega} />
              <div>
                <h1>vegayp.eth</h1>
                <Subtitile>
                  <Country src={panama} />
                  <h2>corpus.ventures / dm3 / ENS DAO</h2>
                </Subtitile>
              </div>
            </Content>
          </BoxItem>

          <BoxItem className="supervip">
            <Content
              target="_blank"
              href="https://twitter.com/VitalikButerin"
              className="supervipContent"
            >
              <img src={vitalik} style={{ objectPosition: '100% 50%' }} />
              <div>
                <h1>Vitalik (Online)</h1>
                <Subtitile className="withPadding">
                  <h2>Ethereum Foundation </h2>
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
