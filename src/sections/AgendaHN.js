import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FormattedHTMLMessage } from 'react-intl'
import background from '../assets/Mask.svg'
import { useLanguage } from '../context/LanguageContext'

const Schedule = () => {
  const { locale } = useLanguage();
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  const medium = 700

  const [active, setActive] = useState(0)
  const handleClick = e => {
    const index = parseInt(e.target.id, 0)
    if (index !== active) {
      setActive(index)
    }
  }

  return (
    <ScheduleSection id="agenda" locale={locale}>
      <Container>
        <Head>
          <h1>
            <FormattedHTMLMessage id="schedule.title" />
          </h1>
        </Head>
        <Content className={active === 0 ? 'active' : ''}>
          <Day>
            <Date className="one">
              <h2>
                <span className="pixel">MIE 13</span>
              </h2>
            </Date>
            <Talks>
            <Entry>
                <Hours></Hours>
                <div className="">
                      <h2>
                     <span className="pixel white">CHARLAS</span>
                     </h2>
                </div>
              </Entry>
              <Entry>
                <Hours>8:30 - 9:00</Hours>
                <div >
                        <h3>Apertura de puertas - Registro de asistentes</h3>
                </div>
              </Entry>
              <Entry>
                <Hours>9:00 - 9:30</Hours>
                <div >
                    <div>
                        <p>Sala Conference</p>
                        <h3>Bienvenida</h3>
                        <p>Lucy - ETH Tegucigalpa + Presentación Alcalde Roberto Contreras</p>
                    </div>
                </div>
              </Entry>
              <Entry>
                <Hours>9:30 - 10:00</Hours>
                <div >
                  <div>
                    <p>Sala Conference</p>
                    <h3>Entrevista a Vitalik (Online) por Crisgarner</h3>
                    <p>Vitalik, Ethereum Foundation</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>10:00 - 10:30</Hours>
                <div >
                  <div>
                    <p>Sala Conference</p>
                    <h3>Los valores que sostienen a Ethereum</h3>
                    <p>Skylar, Ethereum Foundation</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>10:30 - 11:00</Hours>
                <div >
                  <div>
                    <p>Sala Conference</p>
                    <h3>Navigating the Infinite Garden: Finding your place in Ethereum</h3>
                    <p>Chris Lema, Scroll</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>11:00 - 11:30</Hours>
                <div >
                  <div>
                    <p>Sala Conference</p>
                    <h3>Community Funding 2.0</h3>
                    <p>Vee, PSE / Ethereum Foundation</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>11:30 - 12:00</Hours>
                <div >
                  <div>
                    <p>Sala Conference</p>
                    <h3>Unusual public goods and how to fund them</h3>
                    <p>
                        vegayp.eth
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>12:00 - 12:30</Hours>
                <div >
                  <div>
                    <p>Sala Conference</p>
                    <h3>Ecosystem building 101: No you don’t actually want to do an ETH event</h3>
                    <p>
                    QZ
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>12:30 - 13:00</Hours>
                <div >
                  <div>
                    <p>Sala Conference</p>

                    <h3> Panel: Actualidad del ecosistema NFT </h3>
                    <p>
                    Mod: Ahhsun | Oyabun (Dragon Money DAO), StupidGiant (NFT artist), Denizen Juan (ETH Guatemala, Rug Radio ES)
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>13:00 - 13:30</Hours>
                <div>
                  <div>
                    <h3>Almuerzo</h3>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>13:30 - 14:00</Hours>
                <div >
                  <div>
                    <h3>Almuerzo</h3>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>14:00 - 14:30</Hours>
                <div >
                  <div>
                    <p>Sala Conference</p>
                    <h3>¿Cómo financiar tu proyecto haciendo lo que te gusta?</h3>
                    <p>Diego Mares</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>14:30 -15:00</Hours>
                <div >
                  <div>
                    <p>Sala Conference</p>
                    <h3>
                        ¿Cómo ser parte de la comunidad siendo un “outsider”? Una cita con el psicólogo
                    </h3>
                    <p>Natalia Madrid</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>15:00 -15:30</Hours>
                <div >
                  <div>
                    <p>Sala Conference</p>
                    <h3>Starknet es la respuesta de Ethereum a Solana</h3>
                    <p>Omar Espejel</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>15:30 - 16:00</Hours>
                <div >
                  <div>
                    <p>Sala Conference</p>
                    <h3>zkSync y la aplicación de blockchain en la Ciudad de Buenos Aires</h3>
                    <p>
                    Estevan Vilar (zkSync), Fabio Budris (QuarkID)
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>16:00 - 16:30</Hours>
                <div >
                  <div>
                    <p>Sala Conference</p>
                    <h3>Panel: Desarollo de comunidades en LATAM</h3>
                    <p>
                    Mod: Cristina Meza Murillo | Sofia (ETH Tegucigalpa), Sofia (Proof-of-Integrity), Cypherbadger (ETH Volcano)
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>16:30 - 17:00</Hours>
                <div >
                  <div>
                    <p>Sala Conference</p>
                    <h3>Panel: Desarrollo en Centroamerica</h3>
                    <p>
                     Niklas Anzinger (Vitalia), Alex Garcia (Xucre), Francis Sanchinelli (Emprendedor Web3)
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>17:00 - 17:30</Hours>
                <div >
                  <div>
                    <h3>Cierra a cargo de la organización de ETH Latam</h3>
                  </div>
                </div>
              </Entry>
            </Talks>
          </Day>



          <Day>
            <Date className='two'>
              <h2>
                <span className="pixel">MIE 13</span>
              </h2>
            </Date>
            <Talks>
            <Entry>
                <Hours></Hours>
                <div>
                  <div>
                  <h2>
                <span className="pixel white">WORKSHOPS</span>
              </h2>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>08:30 - 09:00</Hours>
                <div>
                  <div>
                  <h3>Introducción en Sala Conference</h3>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>09:00 - 09:30</Hours>
                <div>
                  <div>
                    <p>Sala Workshops</p>
                    <h3>Apertura de puertas - Registro de asistentes</h3>
                    <p></p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>09:30 - 10:00</Hours>
                <div>
                  <div>
                    <h3>Vitalik en Sala Conference</h3>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>10:00 - 10:30</Hours>
                <div>
                  <div>
                    <h3> Apertura de Hackathon </h3>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>10:30 - 11:00</Hours>
                <div>
                  <div>
                    <h3>Formación de equipos para hackathon</h3>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>11:00 - 11:30</Hours>
                <div>
                  <div>
                    <p>Sala Workshops</p>
                    <h3>Cross-chain NFTs basado en cotizaciones usando Chainlink CCIP.</h3>
                    <p>Solange Gueiros</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>11:30 - 12:00</Hours>
                <div>
                  <div>
                  <p>Sala Workshops</p>
                    <h3>Cross-chain NFTs basado en cotizaciones usando Chainlink CCIP.</h3>
                    <p>Solange Gueiros</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>12:00 - 12:30</Hours>
                <div>
                <div>
                    <p>Sala Workshop</p>
                    <h3>Uncompromising web3 communication at scale with Waku</h3>
                    <p>Guru T</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>12:30 - 13:00</Hours>
                <div>
                <div>
                    <p>Sala Workshop</p>
                    <h3>Uncompromising web3 communication at scale with Waku</h3>
                    <p>Guru T</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>13:00 - 13:30</Hours>
                <div>
                    <div>
                    <h3>Almuerzo</h3>
                    </div>
                </div>
              </Entry>
              <Entry>
                <Hours>13:30 - 14:00</Hours>
                <div>
                    <div style={{alignItems:"center"}}>
                    <h3>Almuerzo</h3>
                    </div>
                </div>
              </Entry>
              <Entry>
                <Hours>14:00 - 14:30</Hours>
                <div>
                <div>
                    <p>Sala Workshop</p>
                    <h3>Desarrollo de ZK en Solidity para principiantes</h3>
                    <p>Ahmed</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>14:30 - 15:00</Hours>
                <div>
                  <div>
                    <p>Sala Workshop</p>
                    <h3>Desarrollo de ZK en Solidity para principiantes</h3>
                    <p>Ahmed</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>15:00 - 15:30</Hours>
                <div>
                    <div>
                        <p>Sala Workshop</p>
                        <h3>MACI Workshop</h3>
                        <p>Sam Richards</p>
                    </div>
                </div>
              </Entry>
              <Entry>
                <Hours>15:30 - 16:00</Hours>
                <div>
                <div>
                        <p>Sala Workshop</p>
                        <h3>MACI Workshop</h3>
                        <p>Sam Richards</p>
                    </div>
                </div>
              </Entry>
              <Entry>
                <Hours>16:00 - 16:30</Hours>
                <div>
                  <div>
                    <p>Sala Workshop</p>
                    <h3>Seguros DeFi: ¿Los protocolos tienen el dinero para pagar los exploits?</h3>
                    <p>Blid One (Edwin Fernández)</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>16:30 - 17:00</Hours>
                <div>
                <div>
                    <p>Sala Workshop</p>
                    <h3>Seguros DeFi: ¿Los protocolos tienen el dinero para pagar los exploits?</h3>
                    <p>Blid One (Edwin Fernández)</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>17:00 - 17:30</Hours>
                <div>
                  <div>
                    <h3>Cierra a cargo de la organización de ETH Latam</h3>
                  </div>
                </div>
              </Entry>
            </Talks>
          </Day>

          <Day>
            <Date className="three">
              <h2>
                <span className="pixel">JUE 14</span>
              </h2>
            </Date>
            <Talks>
            <Entry>
                <Hours></Hours>
                <div >
                  <div>
                  <h2>
                <span className="pixel white">CHARLAS</span>
              </h2>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>9:30 - 10:00</Hours>
                <div>
                  <div>
                  <h3>Apertura de puertas</h3>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>10:00 - 10:30</Hours>
                <div >
                  <div>
                    <p>Sala Conference</p>
                    <h3>Identidad Digital: cómo los gobiernos están cambiando el paradigma</h3>
                    <p>Mod: Chuy Cepeda | Alfonso Campenni (Gob. de Buenos Aires), Pablo Mosquella (Extrimian), Matthias Broner (zkSync)</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>10:30 - 11:00</Hours>
                <div >
                  <div>
                    <p>Sala Conference</p>
                    <h3>Aceleración Modular: DeFi, Artes, Videojuegos e Identidad en un mundo Multicadena</h3>
                    <p>Bunny/Mauricio Trujillo, Search On Dora</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>11:00 - 11:30</Hours>
                <div >
                  <div>
                    <p>Sala Conference</p>
                    <h3>Introducción a Zero Knowledge</h3>
                    <p>João Kury, Modular Crypto</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>11:30 - 12:00</Hours>
                <div >
                  <div>
                    <p>Sala Conference</p>
                    <h3>Desafíos del mundo cross-chain: cómo mejorar la experiencia del usuario.</h3>
                    <p>Alexander Cervantes (LiFi), Julián Morla (LiFi)</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>12:00 - 12:30</Hours>
                <div >
                  <div>
                    <p>Sala Conference</p>
                    <h3>Identidad web3: expandiendo lo posible con zero-knowledge</h3>
                    <p>
                    Andy Guzman, PSE / Ethereum Foundation
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>12:30 - 12:40</Hours>
                <div >
                  <div>
                  <p>Sala Conference</p>
                    <h3>Qué es y cómo puedo participar en la ronda de financiamiento cuadrático de ETH LATAM</h3>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>13:00 - 13:30</Hours>
                <div>
                  <div>
                    <h3>Almuerzo</h3>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>13:30 - 14:00</Hours>
                <div >
                  <div>
                    <h3>Almuerzo</h3>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>14:00 - 14:30</Hours>
                <div >
                  <div>
                    <p>Sala Conference</p>
                    <h3>El estado actual de Proposal Builder Separation</h3>
                    <p>
                        Ariiellus
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>14:30 -15:00</Hours>
                <div >
                  <div>
                    <p>Sala Conference</p>
                    <h3>Lido: ¿neto positivo o negativo?</h3>
                    <p>
                        Enti
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>15:00 -15:30</Hours>
                <div >
                  <div>
                    <p>Sala Conference</p>
                    <h3>
                    Panel: Staking
                    </h3>
                    <p>Mod: Lola Rodríguez (ETH Kipu). Isaac Gonzalez (Lido community), Alan Estrada (Meta Pool), Edax Uclés (Obol)</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>15:30 - 16:00</Hours>
                <div >
                  <div>
                    <p>Sala Conference</p>
                    <h3>Secuenciadores Decentralizados: Seguridad, vividez, y eficiencia de capital en Layer 2s de Ethereum</h3>
                    <p>
                    José Fábrega
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>16:00 - 16:30</Hours>
                <div >
                  <div>
                    <p>Sala Conference</p>
                    <h3>La promesa de la votación en blockchain</h3>
                    <p>
                    Sam Richards
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>16:30 - 17:00</Hours>
                <div >
                  <div>
                    <p>Sala Conference</p>
                    <h3>Decisiones en la era digital: Gobernanza de las DAOs</h3>
                    <p>
                    Cristina Meza Murillo
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>17:00 - 17:30</Hours>
                <div >
                  <div>
                    <h3>Cierra a cargo de la organización de ETH Latam</h3>
                  </div>
                </div>
              </Entry>
            </Talks>
          </Day>


{/* Workshops */}

          <Day>
            <Date className="four">
              <h2>
                <span className="pixel">JUE 14</span>
              </h2>
            </Date>
            <Talks>
            <Entry>
                <Hours></Hours>
                <div>
                  <div>
                  <h2>
                <span className="pixel white">WORKSHOPS</span>
              </h2>
                  </div>
                </div>
              </Entry>

              <Entry>
                <Hours>09:30 - 10:00</Hours>
                <div>
                  <div>
                    <h3> Apertura de puertas - Registro de asistentes </h3>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>10:00 - 10:30</Hours>
                <div>
                  <div>
                    <p>Sala Workshops</p>
                    <h3>Cómo crear un smart contract con Internet Computer</h3>
                    <p>Jordan Last</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>10:30 - 11:00</Hours>
                <div>
                  <div>
                    <p>Sala Workshop</p>
                    <h3>Intro to Axelar and GMP</h3>
                    <p>Kate Stapleton</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>11:00 - 11:30</Hours>
                <div>
                  <div>
                    <p>Sala Workshop</p>
                    <h3>Desarrollo e integración de un LST en una dApp con Meta Pool</h3>
                    <p>Alan Estrada</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>11:30 - 12:00</Hours>
                <div>
                  <div>
                    <p>Sala Workshop</p>
                    <h3>Desarrollo e integración de un LST en una dApp con Meta Pool</h3>
                    <p>Alan Estrada</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>12:00 - 12:30</Hours>
                <div>
                  <div>
                    <p>Sala Workshop</p>
                    <h3>Omar Espejel</h3>
                    <p>Introducción a Starknet</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>12:30 - 13:00</Hours>
                <div>
                <div>
                    <p>Sala Workshop</p>
                    <h3>Omar Espejel</h3>
                    <p>Introducción a Starknet</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>13:00 - 13:30</Hours>
                <div>
                    <div>
                    <h3>Almuerzo</h3>
                    </div>
                </div>
              </Entry>
              <Entry>
                <Hours>13:30 - 14:00</Hours>
                <div>
                    <div style={{alignItems:"center"}}>
                    <h3>Almuerzo</h3>
                    </div>
                </div>
              </Entry>
              <Entry>
                <Hours>14:00 - 14:30</Hours>
                <div>
                  <div>
                    <p>Sala Workshop</p>
                    <h3>Cómo crear tu business model canvas web3</h3>
                    <p>Francis Sanchinelli</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>14:30 - 15:00</Hours>
                <div>
                <div>
                    <p>Sala Workshop</p>
                    <h3>Cómo crear tu business model canvas web3</h3>
                    <p>Francis Sanchinelli</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>15:00 - 15:30</Hours>
                <div>
                <div>
                    <p>Sala Workshop</p>
                    <h3>Cómo mintear tu primer NFT</h3>
                    <p>Ahhsun</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>15:30 - 16:00</Hours>
                <div>
                <div>
                    <p>Sala Workshop</p>
                    <h3>Cómo mintear tu primer NFT</h3>
                    <p>Ahhsun</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>16:00 - 16:30</Hours>
                <div>
                  <div>
                    <h3>Cierre de Hackathon</h3>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>16:30 - 17:00</Hours>
                <div>
                  <div>
                    <h3>Cierre de Hackathon</h3>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>17:00 - 17:30</Hours>
                <div>
                  <div>
                    <h3>Cierre de Hackathon</h3>
                  </div>
                </div>
              </Entry>
            </Talks>
          </Day>
        </Content>
      </Container>
    </ScheduleSection>
  )
}

const ScheduleSection = styled.section`
  background: #0b0c0d;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: 40% 0%;
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
    @media only screen and (max-width: 1100px) {
      font-size: ${props => (props.locale == 'pt' ? '40px' : '44px')};
      line-height: 45px;
      margin-bottom: 73px;
    }
  }
  span.pixel {
    font-family: 'Pixel';
  }
  span.pixel.white{
    color:white;
  }
`

const Talks = styled.div`
  width: calc(100% - 226px);
  background: #0b0c0d;
  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
`
const Content = styled.div`
  display: none;
  &.active {
    display: block;
  }
`

const Hours = styled.p`
  width: 160px;
  min-width: 160px;
  @media only screen and (max-width: 1100px) {
    padding-bottom: 30px;
  }
`

const Container = styled.div`
  max-width: 1240px;
  padding: 60px 40px 160px 40px;
  @media only screen and (max-width: 1100px) {
    padding: 0 15px 80px 15px;
  }
  @media only screen and (min-width: 1440px) {
    margin: 0 auto;
  }
  text-align: left;
  padding-bottom: 160px;
`
const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    button {
      font-family: 'Pixel';
      font-weight: 400;
      font-size: 30px;
      line-height: 30px;
      padding-bottom: 15px;
      text-transform: uppercase;
      color: #8c8c8c;
      border: 0px;
      margin: 30px;
      border-bottom: 4px solid transparent;
      background: transparent;
      &.active,
      &:active {
        border-bottom: 4px solid #80ff9f;
        color: #faf7f5;
      }
    }
  }
`

const Day = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  outline: 1px solid #4d4d4d;
  max-width: 1222px;
  @media only screen and (max-width: 1100px) {
    max-width: 90%;
    flex-direction: column;
  }

  margin-right: 0;
  margin-left: auto;
  margin-bottom: 100px;
  flex-wrap: wrap;
`
const Entry = styled.div`
  padding: 24px;
  display: flex;
  @media only screen and (max-width: 1100px) {
    padding: 15px;
    flex-direction: column;
  }
  border-bottom: 1px solid #4d4d4d;
  img {
    width: 20px;
    height: 20px;
    border-radius: 100px;
    object-fit: cover;
    margin-right: 7px;
  }
  .twoColumns {
    display: grid;
    width: calc(100% - 160px);
    grid-template-columns: 50% 50%;
    column-gap: 30px;
    @media only screen and (max-width: 1100px) {
      grid-template-columns: 100%;
      width: 100%;
      row-gap: 30px;
    }
  }
  p {
    font-family: 'Helvetica';
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #8c8c8c;
    margin: 0;
    padding-right: 5px;
  }
  h3 {
    font-family: 'Helvetica-Bold';
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #e3e3e3;
    margin-top: 0;
    margin-bottom: 10px;
    padding-right: 5px;
  }
`

const Date = styled.div`
  width: 226px;
  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
  @media only screen and (max-width: 900px) {
    padding-bottom: 15px;
  }
  background: #3388ff;
  &.one {
    background: #e573e5;
  }
  &.three {
    background: #80ff9f;
  }
  color: #0b0c0d;
  h2 {
    font-family: Helvetica;
    font-size: 30px;
    line-height: 54px;
    padding: 16px;
    margin: 24px auto 0 auto;
    text-transform: uppercase;
    span.pixel {
      font-family: 'Pixel';
    }
    @media only screen and (max-width: 900px) {
      font-size: 60px;
      line-height: 45px;
      margin: 15px auto 0 auto;
    }
  }
  h3 {
    font-family: 'Helvetica-Bold';
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    margin: 0;
    padding-left: 16px;
  }
`

export default Schedule
