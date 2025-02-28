import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import background from '../assets/Mask.svg'

import oxjean from '../assets/speakers2/0xjean.jpeg'
import adrian from '../assets/speakers2/adrian.jpeg'
import agusx1211 from '../assets/speakers2/agusx1211.jpg'
import alan from '../assets/speakers2/alan.jpg'
import alejandro from '../assets/speakers2/alejandro.png'
import alejo from '../assets/speakers2/alejo.jpeg'
import alejoL from '../assets/speakers2/alejoL.jpg'
import andrew from '../assets/speakers2/andrew.jpg'
import antonela from '../assets/speakers2/antonela.png'
import arjun from '../assets/speakers2/arjun.jpeg'
import aya from '../assets/speakers2/aya.jpeg'
import benjamin from '../assets/speakers2/benjamin.jpg'
import brian from '../assets/speakers2/brian.jpg'
import bruno from '../assets/speakers2/bruno.jpeg'
import camilaR from '../assets/speakers2/camilaR.jpeg'
import cristian from '../assets/speakers2/cristian.jpg'
import damian from '../assets/speakers2/damian.png'
import damianM from '../assets/speakers2/damianM.jpg'
import demianD from '../assets/speakers2/demianD.jpg'
import diego from '../assets/speakers2/diego.jpeg'
import evan from '../assets/speakers2/evan.jpeg'
import evin from '../assets/speakers2/evin.jpg'
import fernanda from '../assets/speakers2/fernanda.jpeg'
import gabriel from '../assets/speakers2/gabriel.jpeg'
import gerrit from '../assets/speakers2/gerrit.jpg'
import gino from '../assets/speakers2/gino.jpeg'
import henry from '../assets/speakers2/henry.jpg'
import jose from '../assets/speakers2/jose.jpg'
import juani from '../assets/speakers2/juani.jpg'
import juanManuel from '../assets/speakers2/juanManuel.png'
import julian from '../assets/speakers2/julian.jpg'
import julien from '../assets/speakers2/julien.jpeg'
import lucas from '../assets/speakers2/lucas.jpg'
import luiz from '../assets/speakers2/luiz.jpg'
import manuel from '../assets/speakers2/manuel.jpg'
import marcelo from '../assets/speakers2/marcelo.jpg'
import mariano from '../assets/speakers2/mariano.jpeg'
import marianoD from '../assets/speakers2/marianoD.jpg'
import martin from '../assets/speakers2/martin.jpeg'
import martinB from '../assets/speakers2/martinB.jpeg'
import matias from '../assets/speakers2/matias.png'
import matiasN from '../assets/speakers2/matiasN.jpg'
import maxi from '../assets/speakers2/maxi.jpeg'
import milton from '../assets/speakers2/milton.png'
import nahuel from '../assets/speakers2/nahuel.JPG'
import nicolas from '../assets/speakers2/nicolas.jpg'
import nicolasC from '../assets/speakers2/nicolasC.jpg'
import nicolasM from '../assets/speakers2/nicolasM.jpeg'
import ohad from '../assets/speakers2/ohad.jpg'
import oli from '../assets/speakers2/oli.jpeg'
import pablo from '../assets/speakers2/pablo.jpg'
import patricio from '../assets/speakers2/patricio.jpeg'
import patricioM from '../assets/speakers2/patricioM.jpg'
import patricioW from '../assets/speakers2/patricioW.jpg'
import ramiro from '../assets/speakers2/ramiro.jpg'
import renat from '../assets/speakers2/renat.jpg'
import rodrigo from '../assets/speakers2/rodrigo.jpg'
import santiago from '../assets/speakers2/santiago.jpeg'
import santos from '../assets/speakers2/santos.jpg'
import sebastian from '../assets/speakers2/sebastian.jpeg'
import shannon from '../assets/speakers2/shannon.jpeg'
import siesta from '../assets/speakers2/siesta.png'
import siesta1 from '../assets/speakers2/siesta1.jpg'
import skeletor from '../assets/speakers2/skeletor.jpg'
import skylar from '../assets/speakers2/skylar.jpg'
import sebastianL from '../assets/speakers2/sL.jpg'
import stani from '../assets/speakers2/stani.png'
import sweetman from '../assets/speakers2/sweetman.jpeg'
import sxysun from '../assets/speakers2/sxysun.jpg'
import vicky from '../assets/speakers2/vicky.jpeg'
import vitalik from '../assets/speakers2/vitalik.png'
import wade from '../assets/speakers2/wade.jpeg'
import wei3erHase from '../assets/speakers2/wei3erHase.jpg'
import whiteChocolate from '../assets/speakers2/whiteChocolate.png'

import jaffet from '../assets/speakers2/jaffet.jpg'
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

  const intl = useIntl();
  return (
    <ScheduleSection id="agenda" locale={locale}>
      <Container>
        <Head>
          <h1 dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "schedule.title" }) }} />
          <div>
            <button
              onClick={handleClick}
              className={active === 0 ? 'active' : ''}
              id={0}
            >
              TALKS
            </button>
            <button
              onClick={handleClick}
              className={active === 1 ? 'active' : ''}
              id={1}
            >
              WORKSHOPS
            </button>
          </div>
        </Head>
        <Content className={active === 0 ? 'active' : ''}>
          <Day>
            <Date className="one">
              <h2>
                /<span className="pixel">01</span>
              </h2>
              <h3>Thursday</h3>
              <h3>11th</h3>
            </Date>
            <Talks>
              <Entry>
                <Hours>8:00</Hours>
                <div>
                  <p>Stage 1</p>
                  <h3>Acreditación</h3>
                </div>
              </Entry>
              <Entry>
                <Hours>9:15 - 9:30</Hours>
                <div>
                  <p>Stage 1</p>
                  <h3>Opening Ceremony</h3>
                  <p>Sebastián Aldasoro</p>
                </div>
              </Entry>
              <Entry>
                <Hours>9:30 - 9.55</Hours>
                <div>
                  <p>Stage 1</p>
                  <h3>
                    Supporting the Infinite Garden- how we started, how it's
                    growing
                  </h3>
                  <p>
                    <img src={aya} />
                    Aya Miyaguchi - Ethereum Foundation
                  </p>
                </div>
              </Entry>
              <Entry>
                <Hours>10:00 - 10:25</Hours>
                <div>
                  <p>Stage 1</p>
                  <h3>PoS, The Merge, and the Future of Ethereum</h3>
                  <p>
                    <img src={skylar} />
                    Skylar - Ethereum Foundation
                  </p>
                </div>
              </Entry>
              <Entry>
                <Hours>10:30 - 10:55</Hours>
                <div>
                  <p>Stage 1</p>
                  <h3>Entering the era of Web3 Social </h3>
                  <p>
                    <img src={stani} />
                    Stani Kulechov - Lens
                  </p>
                </div>
              </Entry>
              <Entry>
                <Hours>11:00 - 11:25</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>
                      Identidad Digital auto-soberana: el nuevo paradigma que
                      implementará la Ciudad de Buenos Aires
                    </h3>
                    <p>
                      <img src={diego} /> Diego Fernández - GCBA
                    </p>
                  </div>
                  <div>
                    <p>Stage 2</p>
                    <h3>Producto y comunidad: evolución hacia web3</h3>
                    <p>
                      <img src={vicky} /> Vicky Guareschi - Lemon
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>11:30 - 12:00</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>Legal Challenges for Web 3 projects</h3>
                    <p>
                      <img src={juanManuel} /> <img src={sebastianL} /> Juan
                      Manuel Campos Álvarez / Sebastián López Sansón
                    </p>
                  </div>
                  <div>
                    <p>Stage 2</p>
                    <h3>
                      UNO: One fund, All chains | Stablecoin farming with no
                      limits
                    </h3>
                    <p>
                      <img src={adrian} /> Adrián Addesso - PieDAO
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>12:00 - 13:30</Hours>
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "schedule.break" }) }} />
                </div>
              </Entry>
              <Entry>
                <Hours>13:30 - 13:55</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>Panel: Crypto adoption in Latam</h3>
                    <p>
                      <img src={marcelo} />
                      <img src={manuel} />
                      <img src={santos} />
                      <img src={julian} />
                      <img src={oli} />
                      Marcelo Cavazzoli - Lemon / Manuel Beaudroit - Belo /
                      Santos Barrio - Letsbit / Julián Colombo - Bitso. <br />{' '}
                      Mod: Olivia Goldschmidt
                    </p>
                  </div>
                  <div>
                    <p>Stage 2</p>
                    <h3>
                      Payroll y Treasury management: Los problemas de llevar las
                      finanzas en una compañía web3.0
                    </h3>
                    <p>
                      <img src={demianD} /> Demian Drabyk - Wink
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>14:00 - 14:25</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>
                      Web3 for LatAm: the revolution will not be centralized
                    </h3>
                    <p>
                      <img src={sebastian} />
                      Sebastián Serrano - Ripio
                    </p>
                  </div>
                  <div>
                    <p>Stage 2</p>
                    <h3>
                      Fundraising: No hay una sola forma de levantar capital
                    </h3>
                    <p>
                      <img src={juani} />
                      Juan Ignacio Gallo - Fund.it
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>14:30 - 14:55</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>Decentralizing the time value of money</h3>
                    <p>
                      <img src={gabriel} />
                      Gabriel Gruber - Exactly
                    </p>
                  </div>
                  <div>
                    <p>Stage 2</p>
                    <h3>Web3 mobile interoperatibility</h3>
                    <p>
                      <img src={bruno} />
                      Bruno Calmels - Defiant
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>15:00 - 15:25</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>
                      How to transition to Web3: why, what does it take, and
                      how?
                    </h3>
                    <p>
                      <img src={renat} /> Renat Khasanshyn - Protofire
                    </p>
                  </div>

                  <div>
                    <p>Stage 2</p>
                    <h3>Liquidity Mining, staking y lágrimas</h3>
                    <p>
                      <img src={nicolas} /> Nicolás Venturo - Balancer
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>15:30 - 15:55</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>Vyper + DeFi = 💘</h3>
                    <p>
                      <img src={gerrit} /> Gerrit - Vyper
                    </p>
                  </div>
                  <div>
                    <p>Stage 2</p>
                    <h3>
                      Squeeth Conmigo: Como Podemos Crear DeFi-native
                      derivatives
                    </h3>
                    <p>
                      <img src={wade} /> Wadé - Opyn
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>16:00 - 16:25</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>The Key to Fun: Identity & Reputation in Web3</h3>
                    <p>
                      <img src={evin} /> Evin Mc Mullen - Disco
                    </p>
                  </div>
                  <div>
                    <p>Stage 2</p>
                    <h3>The state of structured products in DeFi</h3>
                    <p>Babi - Pods</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>16:30 - 17:00</Hours>
                <div>
                  <h3>TBD: Todos Bien Descentralizados</h3>
                  <p>
                    <img src={mariano} />
                    Mariano Conti
                  </p>
                </div>
              </Entry>
            </Talks>
          </Day>
          <Day>
            <Date className="two">
              <h2>
                /<span className="pixel">02</span>
              </h2>
              <h3>Friday</h3>
              <h3>12th</h3>
            </Date>
            <Talks>
              <Entry>
                <Hours>09:15</Hours>
                <div>
                  <h3>Venue opening</h3>
                </div>
              </Entry>
              <Entry>
                <Hours>10:00 - 10:30</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>Stablecoins: algorithms vs collateral</h3>
                    <p>
                      <img src={marianoD} />
                      <img src={benjamin} />
                      <img src={stani} />
                      <img src={julien} />
                      <img src={andrew} />
                      Mariano Di Pietrantonio - MakerDao / Benjamin - QiDao /
                      Stani Kulechov - Aave / Julien Bouteloup - Rekt <br />{' '}
                      Mod: Andrew Piscione
                    </p>
                  </div>
                  <div>
                    <p>Stage 2</p>
                    <h3>
                      Lessons learned running a validator in LATAM outside AWS
                    </h3>
                    <p>
                      <img src={rodrigo} />
                      Rodrigo Benzaquen - Sensei Node
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>10:30 - 11:00</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>
                      Justicia Descentralizada: Resolviendo Disputas en Mercados
                      de NFTs
                    </h3>
                    <p>
                      <img src={oxjean} />
                      Jean - Kleros
                    </p>
                  </div>
                  <div>
                    <p>Stage 2</p>
                    <h3>Router proxies</h3>
                    <p>
                      <img src={alejandro} />
                      Alejandro Santander - Synthetix
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>11:00 - 11:25</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>
                      Hacks, rugs, lack of accountability, broken DAOs, and
                      more. How do we fix it?
                    </h3>
                    <p>
                      <img src={matiasN} /> Matías Niesenson - Wonderland
                    </p>
                  </div>
                  <div>
                    <p>Stage 2</p>
                    <h3>Descentralizando la sociedad</h3>
                    <p>
                      <img src={jose} />
                      José Alfonso Fabregas - Metis
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>11:30 - 12:00</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>Identidad digital con Web3</h3>
                    <p>
                      <img src={damian} />
                      <img src={matias} />
                      Damian Schenkelman, Matias Woloski - Auth0
                    </p>
                  </div>
                  <div>
                    <p>Stage 2</p>
                    <h3>
                      Riesgos y seguridad en Crypto: análisis y plan de acción
                    </h3>
                    <p>
                      <img src={pablo} />
                      Pablo Sabbatella
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>12:00 - 13:30</Hours>
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "schedule.break" }) }} />
                </div>
              </Entry>
              <Entry>
                <Hours>13:30 - 13:55</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>
                      Foundations for a New Internet: Why Web3 Infrastrucutre
                      Matters
                    </h3>
                    <p>
                      <img src={shannon} />
                      Shannon Wells - Livepeer
                    </p>
                  </div>
                  <div>
                    <p>Stage 2</p>
                    <h3>Privacy by design</h3>
                    <p>Tiago Sada - Worldcoin</p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>14:00 - 14:25</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>Building xChain Applications with Connext</h3>
                    <p>
                      <img src={arjun} />
                      Arjun Bhuptani - Connext
                    </p>
                  </div>
                  <div>
                    <p>Stage 2</p>
                    <h3>Oracles suck</h3>
                    <p>
                      <img src={skeletor} />
                      Skeletor Spaceman - Wonderland
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>14:30 - 14:55</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>How to build Web3 communication in your protocol</h3>
                    <p>
                      <img src={jaffet} />
                      Jaffet Sandi - EPNS
                    </p>
                  </div>
                  <div>
                    <p>Stage 2</p>
                    <h3>Usable security in web3</h3>
                    <p>
                      <img src={antonela} /> Antonela Debiasi - Metamask
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>15:00 - 15:25</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>The future of Ethereum scaling with Polygon</h3>
                    <p>
                      <img src={luiz} />
                      Luiz Henrique Amorim - Polygon
                    </p>
                  </div>
                  <div>
                    <p>Stage 2</p>
                    <h3>Comunicaciones en una DAO</h3>
                    <p>
                      <img src={marianoD} />
                      Mariano Di Pietra - MakerDAO
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>15:30 - 15:55</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>
                      Building the infrastructure for secure web3 operations
                    </h3>
                    <p>
                      <img src={santiago} />
                      Santiago Palladino - OpenZeppelin
                    </p>
                  </div>
                  <div>
                    <p>Stage 2</p>
                    <h3>
                      Nobody can handle the 24 words - A case for contract
                      wallets
                    </h3>
                    <p>
                      <img src={agusx1211} />
                      Agusx1211 - Horizon
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>16:00 - 16:25</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>Past, Present, and Future of MEV</h3>
                    <p>
                      <img src={alejo} /> Alejo Salles - Flashbots
                    </p>
                  </div>
                  <div>
                    <p>Stage 2</p>
                    <h3>
                      The Graph: Decentralized Data, web3 APIs, and Use Cases
                    </h3>
                    <p>
                      <img src={brian} />
                      Brian Berman - The Graph
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>16:30 - 17:00</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>Slang: un nuevo compilador de Solidity</h3>
                    <p>
                      <img src={patricio} /> Patricio Palladino - Nomic
                      Foundation
                    </p>
                  </div>
                  <div>
                    <p>Stage 2</p>
                    <h3>Relieving Moloch’s Curse</h3>
                    <p>
                      <img src={sxysun} /> Xinyuan Sun - Flashbots
                    </p>
                  </div>
                </div>
              </Entry>
            </Talks>
          </Day>
          <Day>
            <Date className="three">
              <h2>
                /<span className="pixel">03</span>
              </h2>
              <h3>Saturday</h3>
              <h3>13th</h3>
            </Date>
            <Talks>
              <Entry>
                <Hours>12:30</Hours>
                <div>
                  <h3>Venue opening</h3>
                </div>
              </Entry>
              <Entry>
                <Hours>13:30 - 13:55</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>Q&A Session with Vitalik Buterin</h3>
                    <p>
                      <img src={vitalik} />
                      <img src={evan} />
                      Vitalik + Evan van Ness
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>14:00 - 14:25</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>Descentralizacion: El feature clave del metaverso</h3>
                    <p>
                      <img src={gino} />
                      Gino Cingolani Trucco - Decentraland
                    </p>
                  </div>

                  <div>
                    <p>Stage 2</p>
                    <h3>Panel: Music NFTs</h3>
                    <p>
                      <img src={sweetman} />
                      <img src={nicolasM} />
                      Facundo Migoya / sweetman.eth / Nicolás Madoery <br />{' '}
                      Mod: Sebastián Aldasoro
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>14:30 - 14:55</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>
                      Axie Infinity revoluciona el metaverso: NFTs, Web3 y
                      Play&Earn
                    </h3>
                    <p>
                      <img src={fernanda} /> Fernanda Dixon - Axie
                    </p>
                  </div>
                  <div>
                    <p>Stage 2</p>
                    <h3>Digital ID: Today's Dreams, Tomorrow's Reality</h3>
                    <p>
                      <img src={whiteChocolate} />
                      White Chocolate - Hashmasks
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>15:00 - 15:25</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>
                      The Infinite Machine Movie: la intersección de Hollywood y
                      NFTs
                    </h3>
                    <p>
                      <img src={camilaR} />
                      Camila Russo - The Defiant
                    </p>
                  </div>
                  <div>
                    <p>Stage 2</p>
                    <h3>Play-and-Earn Gaming in the Hispanic markets</h3>
                    <p>
                      <img src={martinB} />
                      Martin Blaquier
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>15:30 - 15:55</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>4 años minteando soulbound tokens</h3>
                    <p>
                      <img src={patricioW} />
                      Patricio Worthalter - POAP
                    </p>
                  </div>
                  <div>
                    <p>Stage 2</p>
                    <h3>Smart contracts para música NFT</h3>
                    <p>
                      <img src={sweetman} />
                      sweetman.eth - Mintsongs
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>16:00 - 16:25</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3>
                      Fireside Chat Game Disease: Explorá la verdadera
                      naturaleza del universo NFT
                    </h3>
                    <p>
                      <img src={siesta} />
                      <img src={milton} />
                      <img src={siesta1} />
                      Frenetik Void / Milton Sanz / Siesta <br /> Mod: Romina
                      Sejas
                    </p>
                  </div>
                  <div>
                    <p>Stage 2</p>
                    <h3>Tu identidad en Web3 - NFTs y SBTs</h3>
                    <p>
                      <img src={nahuel} />
                      Nahuel Burbach - Zerion
                    </p>
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>16:30 - 17:00</Hours>
                <div className="twoColumns">
                  <div>
                    <p>Stage 1</p>
                    <h3 dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "schedule.closing" }) }} />
                  </div>
                </div>
              </Entry>
              <Entry>
                <Hours>17:00 - 19:00</Hours>
                <div className="twoColumns">
                  <div>
                    <h3>After party</h3>
                  </div>
                </div>
              </Entry>
            </Talks>
          </Day>
        </Content>
        <Content className={active === 1 && 'active'}>
          <Day>
            <Date className="one">
              <h2>
                /<span className="pixel">01</span>
              </h2>
              <h3>Thursday</h3>
              <h3>11th</h3>
            </Date>
            <Talks>
              <Entry>
                <Hours>11:00 - 12:00</Hours>
                <div>
                  <h3>
                    Unlock an endless world of possibilities via CoW Protocol
                    SDK
                  </h3>
                  <p>
                    <img src={cristian} />
                    <img src={henry} />
                    <img src={ramiro} />
                    Cristian Malfesi / Henry Palacios / Ramiro Vázquez -
                    Protofire
                  </p>
                </div>
              </Entry>
              <Entry>
                <Hours>12:00 - 13:30</Hours>
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "schedule.break" }) }} />
                </div>
              </Entry>
              <Entry>
                <Hours>14:00 - 15:00</Hours>
                <div>
                  <h3>
                    Principles, methods and tools for a successful web3 launch
                  </h3>
                  <p>
                    <img src={maxi} />
                    Maxi Bustos - FutureSwap
                  </p>
                </div>
              </Entry>
              <Entry>
                <Hours>15:00 - 16:00</Hours>
                <div>
                  <h3>Introducción a Lens Protocol</h3>
                  <p>
                    <img src={alan} />
                    Alan Donoso
                  </p>
                </div>
              </Entry>
              <Entry>
                <Hours>16:00 - 17:00</Hours>
                <div>
                  <h3>Completing the Defi credit market </h3>
                  <p>
                    <img src={patricioM} /> <img src={nicolasC} />
                    Patricio Molina y Nicolás Castro García - Exactly
                  </p>
                </div>
              </Entry>
            </Talks>
          </Day>
          <Day>
            <Date className="two">
              <h2>
                /<span className="pixel">02</span>
              </h2>
              <h3>Friday</h3>
              <h3>12th</h3>
            </Date>
            <Talks>
              <Entry>
                <Hours>10:30 - 12:00</Hours>
                <div>
                  <h3>
                    Cool projects on StarkNet that wouldn't be possible on L1
                  </h3>
                  <p>
                    <img src={ohad} />
                    Ohad Barta - Starkware
                  </p>
                </div>
              </Entry>
              <Entry>
                <Hours>12:00 - 13:30</Hours>
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "schedule.break" }) }} />
                </div>
              </Entry>
              <Entry>
                <Hours>13:30 - 15:00</Hours>
                <div>
                  <h3>Getting started with Cairo for StarkNet</h3>
                  <p>
                    <img src={martin} />
                    Martin Triay - OpenZeppelin
                  </p>
                </div>
              </Entry>
              <Entry>
                <Hours>15:00 - 16:00</Hours>
                <div>
                  <h3>
                    Solidity y su evolución: Buenas practicas en el
                    Desarrollo/Testing
                  </h3>
                  <p>
                    <img src={alejoL} />
                    <img src={lucas} />
                    Alejo Lovallo y Lucas Marc - Think&Dev
                  </p>
                </div>
              </Entry>
              <Entry>
                <Hours>16:00 - 17:00</Hours>
                <div>
                  <h3>Mastering the blockchain's dirty data</h3>
                  <p>
                    <img src={wei3erHase} />
                    Wei3erHase - Wonderland
                  </p>
                </div>
              </Entry>
            </Talks>
          </Day>
          <Day>
            <Date className="three">
              <h2>
                /<span className="pixel">03</span>
              </h2>
              <h3>Saturday</h3>
              <h3 style={{ paddingBottom: '30px' }}>13th</h3>
            </Date>
            <Talks>
              <Entry>
                <Hours>14:00 - 15:00</Hours>
                <div>
                  <h3>Cryptoarg: construyendo una red etérea de artistas</h3>
                  <p>Joaquina Salgado - Mar de Formas - Okytomo</p>
                </div>
              </Entry>
              <Entry style={{ borderBottom: '0px' }}>
                <Hours>15:00 - 16:00</Hours>
                <div>
                  <h3>Building Composable SVG NFTs with Scaffold-ETH</h3>
                  <p>
                    <img src={damianM} />
                    Damian Martinelli
                  </p>
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
  max-width: 1440px;
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
    font-size: 120px;
    line-height: 144px;
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
