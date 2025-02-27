import { FormattedMessage } from "react-intl";
import { Link } from "react-scroll";
import { PALETTE } from "../App";
import loopHonduras from '../assets/carousel-honduras.png';
import date1 from "../assets/date1-honduras.svg";
import date2 from "../assets/date2-honduras.svg";
import venueSmSrc from '../assets/venue-honduras.png';
import Loop from '../components/Loop';
import EDITIONS from "../editions";
import AgendaHN from '../sections/AgendaHN';
import CommunityHN from '../sections/CommunityHN';
import EthToLatam from '../sections/EthToLatam';
import Footer from '../sections/Footer';
import HackathonHN from "../sections/HackathonHN";
import Hero from '../sections/Hero';
import Navbar from "../sections/Navbar";
import SpeakersHN from '../sections/SpeakersHN';
import SponsorsHN from '../sections/SponsorsHN';
import TheOtherSideHN from '../sections/TheOtherSideHN';
import Venue from '../sections/Venue';

function Honduras() {
    return (
        <div className="App">
            <Navbar color={PALETTE.SKYBLUE} >
                <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
                    <FormattedMessage id="navbar.about" />
                </Link>
                <Link to="venue" spy={true} smooth={true} offset={50} duration={500}>
                    <FormattedMessage id="navbar.venue" />
                </Link>
            </Navbar>
            <Hero color={PALETTE.SKYBLUE} colorButton={PALETTE.SKYBLUE} buttonSrc={"https://www.youtube.com/playlist?list=PLhvc8ovGqDK44DMhDD6hsQoH7X9gjJ7rT"} loopSrc={loopHonduras} edition={EDITIONS.HONDURAS} />
            {/* <Apply /> */}
            <HackathonHN edition={EDITIONS.HONDURAS}/>
            <EthToLatam edition={EDITIONS.HONDURAS} />
            <Loop reverse content={<img src={date1} alt="smothing honduras" />} />
            <Loop content={<img src={date2} alt="smothing honduras" />} />
            <SpeakersHN />
           <AgendaHN />
           <TheOtherSideHN />
            <SponsorsHN />
            <CommunityHN/>
            <Venue
                locationHref={"https://ethkipu.notion.site/ETH-Latam-San-Pedro-Sula-dc72b6e2b81e41ec8f5bebf0cb9bbd6c"}
                venueSmSrc={venueSmSrc}
                venueLgSrc={venueSmSrc}
                edition={EDITIONS.HONDURAS}
            />
            <Footer withoutImage={true} color={PALETTE.SKYBLUE} />
        </div>
    )
}

export default Honduras;
