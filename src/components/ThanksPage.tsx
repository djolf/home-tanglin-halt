import { motion } from "framer-motion";
import { useHistory } from "react-router";
import Menu from "./menu/menu";
import styled from "styled-components";
import { useEffect } from "react";
import dataStore from "../store";

const ThanksPage = () => {
  const history = useHistory();
  useEffect(() => {
    dataStore.setCurrentPage(6);
  }, []);
  return (
    <motion.div
      className="ThanksPage"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw" }}
      transition={{ duration: 0.5 }}
    >
      <GridContainer>
        <div className="menu">
          <Menu showLogo color="#073d77" />
        </div>
        <div className="main">
          <div className="header">
            <StrokedText color="#ff6b3b" fontSize="3.7rem" mobileFontSize="2rem">
              to those who made this possible
            </StrokedText>
          </div>
          <div className="credits">
            <section className="credits-song">
              <h2>SONG</h2>
              <NameCard name="Lincoln Lim" job="Performed, Co-Produced & Written By" />
              <NameCard name="Ashwin Menon" job="Co-Producer/Mixing Engineer" />
              <NameCard name="Simon Francis" job="Mastering Engineer" />
            </section>
            <section className="credits-mv">
              <h2>MUSIC VIDEO</h2>
              <NameCard name="Jeremy Hu" job="Director" />
              <NameCard name="Lavita Kala" job="Producer" />
              <NameCard name="Wan Othman" job="Director of Photography" />
              <NameCard name="Muhd Afa'alhayat" job="Camera Assistant #1" />
              <NameCard name="Muhammad Ridzwan" job="Camera Assistant #2" />
              <NameCard name="Charlotte Greenall" job="Translator" />
            </section>
            <section className="credits-portrait">
              <h2>PORTRAIT JOURNEYS</h2>
              <NameCard name="Anton" job="Creative Lead" />
              <NameCard name="Darren Leong" job="Photographer" />
              <NameCard name="Lydia<br>Ashwin Menon<br>XXX<br>XXX<br>XXX<br>" job="Talents" />
            </section>
            <section className="credits-marketing">
              <h2>MARKETING</h2>
              <NameCard name="Chelsea Chan" job="Social Media Manager" />
              <NameCard name="Cross Ratio Entertainment" job="Public Relations Management" />
            </section>
            <section className="credits-sound">
              <h2>SOUND CAPSULE</h2>
              <NameCard name="Ashwin Menon" job="Field Sound Recordist/Mix Engineer" />
              <NameCard name="Marcus Chua" job="Videographer/Video Editor" />
              <NameCard name="Bryan Ong" job="Field Sound Recordist" />
            </section>
            <section className="credits-web">
              <h2>WEBSITE</h2>
              <NameCard name="Kazhar Ali" job="Art Director/Co-Creative Director" />
              <NameCard name="Lin Lifan" job="UX Designer/Developer" />
            </section>
          </div>
        </div>
      </GridContainer>
    </motion.div>
  );
};

export default ThanksPage;

const GridContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  display: grid;
  grid-template:
    "menu" 75px
    "main" auto
    / 1fr;

  img {
    max-width: 100%;
    height: auto;
  }

  .menu {
    grid-area: menu;
  }

  .main {
    grid-area: main;
    align-self: stretch;
    /* position: relative; */
    padding: 0 15px;
    display: grid;
    grid-template:
      "head" 1fr
      "credits" auto
      / 1fr;

    .header {
      grid-area: head;
      align-self: center;
      justify-self: center;
    }

    .credits {
      grid-area: credits;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: repeat(4, 1fr);
      grid-auto-flow: dense;
      grid-row-gap: 30px;

      h2 {
        color: #083d77;
        font-weight: bold;
        text-align: center;
        font-family: Rubik;
      }

      .credits-mv {
        grid-row: 1 / span 2;
        grid-column: 2;
      }
    }

  }

  @media screen and (min-width: 769px) {
    grid-template:
      "menu" 150px
      "main" auto
      "s" minmax(50px, 250px)
      / 1fr;

    .main {
      grid-template:
        "head" 1fr
        "credits" auto
        / 1fr;
    }
  }

  @media screen and (min-width: 992px) {
  }
`;

interface IProps {
  fontSize?: string;
  mobileFontSize?: string;
  tabletFontSize?: string;
}

const StrokedText = styled.div<IProps>`
  font-family: hagona;
  font-size: ${(props) =>
    props.mobileFontSize ? props.mobileFontSize : "3.7rem"};
  line-height: 1.2;
  color: ${(props) => (props.color ? props.color : "white")};
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  text-align: center;
  letter-spacing: 2px;
  @media screen and (min-width: 769px) {
    font-size: ${(props) =>
      props.tabletFontSize ? props.tabletFontSize : "4rem"};
    line-height: 1.5;
  }

  @media screen and (min-width: 992px) {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "4rem")};
    -webkit-text-stroke-width: 2px;
  }
`;

type NameCardProps = {
  name: string;
  job: string;
};

const NameCard = (props: NameCardProps) => (
  <NameCardWrapper className="namecard">
    <div className="card-container">
      <div className="job">{props.job}</div>
      <div className="name" dangerouslySetInnerHTML={{__html: props.name}}></div>
    </div>
  </NameCardWrapper>
);

const NameCardWrapper = styled.div`
  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #083d77;
    font-family: Rubik;
    margin-top: 25px;
  }
  .job {
    font-weight: 400;
  }
  .name {
    font-weight: bold;
    text-align: center;
  }
`;
