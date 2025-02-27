import { FormattedMessage } from "react-intl";
import { Link } from "react-scroll";
import { PALETTE } from "../App";
import loopArg from '../assets/carousel-ba.png';
import date1 from '../assets/date1.svg';
import date2 from '../assets/date2.svg';
import venueLgSrc from '../assets/venue-large.png';
import venueSmSrc from '../assets/venue-small.png';
import Loop from "../components/Loop";
import EDITIONS from "../editions";
import EthToLatam from '../sections/EthToLatam';
import Faqs from '../sections/Faqs';
import Footer from '../sections/Footer';
import Hero from '../sections/Hero';
import MediaPartners from '../sections/MediaPartners';
import Navbar from "../sections/Navbar";
import Schedule from '../sections/Schedule';
import Speakers from '../sections/Speakers';
import Sponsors from '../sections/Sponsors';
import TheOtherSide from '../sections/TheOtherSide';
import Venue from '../sections/Venue';

function BuenosAires() {
    return (
        <div className="App">
            <Navbar color={PALETTE.GREEN} >
                <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
                    <FormattedMessage id="navbar.about" />
                </Link>
                <Link
                    to={'speakers'}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    <FormattedMessage id="navbar.speakers" />
                </Link>
                <Link
                    to="sponsors"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    <FormattedMessage id="navbar.sponsors" />
                </Link>
                <Link to="venue" spy={true} smooth={true} offset={50} duration={500}>
                    <FormattedMessage id="navbar.venue" />
                </Link>
                <Link
                    to={'agenda'}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    <FormattedMessage id="navbar.schedule" />
                </Link>
                <Link
                    to="theOtherSide"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    Side events
                </Link>
                <Link to="faqs" spy={true} smooth={true} offset={50} duration={500}>
                    <FormattedMessage id="navbar.faqs" />
                </Link>
            </Navbar>
            <Hero
                color={PALETTE.GREEN}
                colorButton={PALETTE.GRAY}
                buttonSrc={"https://www.youtube.com/channel/UCYZOSfxEQ4hmocHqjZAy_dw/playlists"}
                loopSrc={loopArg}
                edition={EDITIONS.BUENOSAIRES} />
            <EthToLatam edition={EDITIONS.BUENOSAIRES} />
            <Loop reverse content={<img src={date1} alt="smothing Buenos Aires" />} />
            <Loop content={<img src={date2} alt="smothing Buenos Aires" />} />
            <Speakers />
            <Sponsors />
            <MediaPartners />
            <Venue
                locationHref={"https://www.cecbuenosaires.com.ar/"}
                venueSmSrc={venueSmSrc}
                venueLgSrc={venueLgSrc}
                edition={EDITIONS.BUENOSAIRES}
            />
            <Schedule />
            <TheOtherSide />
            <Faqs edition={EDITIONS.BOGOTA} />
            <Footer />
        </div>
    )
}

export default BuenosAires;