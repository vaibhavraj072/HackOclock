import React from "react";
import {Myinfo} from "../Top-division-components/Top-division-components.jsx";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./about.css";
import {Logo, LogoSectionAbout} from "../logo-section/logoSection.jsx";
import {FirstPrize, PrizeHeading} from "../prize tracks/prizes.jsx";
import {Prizeinfo} from "../../Module/General";
import {Accordion} from "../FAQ/faq.jsx";
import {Sponsor, SponsorsHead, SponsorUS} from "../Sponsors/sponsors.jsx";
import Birds from "../Birds/birds.jsx";
import Footer from "../Footer/footer.jsx";
import {Member, JoinTeam} from "../team/team.jsx";
import pattern from "./pattern4.png";
import Media from "../media/media.jsx";

import {
  TOP_SECTION,
  TeamInfo,
  JudgesInfo,
  sponsorLogos,
  frequentlyAskedQuestions,
  FOOTER
} from "../../Module/General";

function SponsorGroup(props) {
  return (
    <Row>
      {props.map(s => (
        <Col key={s.src} className="" sm={12} lg={4} md={6}>
          <Sponsor srcx={s.src} />
        </Col>
      ))}
    </Row>
  );
}

function PrizeGroup(props) {
  return (
    <Row>
      {props.map(s => (
        <Col key={s.type} className="" sm={12} lg={4} md={6}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
}

function TeamMembers(props) {
  return (
    <Row className="members">
      {props.map(s => (
        <Col key={s.Name} className="" sm={12} lg={4} md={4}>
          <Member info={s} />
        </Col>
      ))}
    </Row>
  );
}

function FrequentlyAsked(props) {
  return (
    <Row className="sf">
      {props.map(s => (
        <Col key={s.label} className="" sm={12} lg={6} md={6}>
          <Accordion panels={s}/>
        </Col>
      ))}
    </Row>
  );
}

export default function HomePage() {
  return (
    <div className="Whole_div" style={{backgroundImage: `url(${pattern})`}}>
      <div className="color_sectiom" id="home">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={8}>
              <Myinfo />
            </Col>
            <Col className="d-image" sm={12} lg={5} md={4}>
              {TOP_SECTION.IMG_SRC && (
                <img src={TOP_SECTION.IMG_SRC} alt="hackathon illustration" />
              )}
            </Col>
          </Row>

          <Row className="mediaInfo">
            <Col className="" sm={12} lg={12} md={12}>
              <Media />
            </Col>
          </Row>
        </Container>
      </div>
      
      <Container fluid>
        <Row className="logoSection">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row>

        {frequentlyAskedQuestions && frequentlyAskedQuestions.length > 0 && (
          <div className="Myfaqs" id="faq">
            {frequentlyAskedQuestions.map(FrequentlyAsked)}
          </div>
        )}

        <Row className="prizesection" id="prizes">
          <PrizeHeading type="Prize section" />
          {Prizeinfo && Prizeinfo.map(PrizeGroup)}
        </Row>

        <Row className="sponsorSection" id="sponsors">
          <SponsorsHead />
          <SponsorUS />
          {sponsorLogos && sponsorLogos.map(SponsorGroup)}
        </Row>

        <Birds top="120vh" left="0vh" type="" />

        <h1 id="team">Our Team</h1>
        {FOOTER.JOIN_TEAM.required && (
          <JoinTeam 
            placeholder="Join our team" 
            formLink={FOOTER.JOIN_TEAM} 
            content="Interested in joining our team" 
          />
        )}
        {TeamInfo && TeamInfo.map(TeamMembers)}

        <h1>Judges</h1>
        {FOOTER.JOIN_TEAM.required && (
          <JoinTeam 
            placeholder="Join as judge" 
            formLink={TOP_SECTION.JUDGES_FORM_LINK} 
            content="Interested in being Judge" 
          />
        )}
        {JudgesInfo && JudgesInfo.map(TeamMembers)}
      </Container>
      <Footer />
    </div>
  );
}
