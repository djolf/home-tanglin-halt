import { motion } from "framer-motion";
import Menu from "./menu/menu";
import styled from "styled-components";
import { useEffect } from "react";
import dataStore from "../store";
import pattern from "../assets/images/pattern-bg.png";
import nac from "../assets/images/nac_eng_logo.jpg";

const ThanksPage = () => {
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
          <div className="container">
            <Menu showLogo color="#073d77" />
          </div>
        </div>
        <div className="header">
          <div className="container">
            <StrokedText
              color="#ff6b3b"
              fontSize="3.7rem"
              mobileFontSize="2rem"
            >
              to those who made this possible
            </StrokedText>
          </div>
        </div>
        <div className="main">
          <div className="container">
            <div className="credits">
              <div className="col">
                <section className="credits-song">
                  <h2>SONG</h2>
                  <NameCard
                    name="Lincoln Lim"
                    job="Performed, Co-Produced & Written By"
                  />
                  <NameCard
                    name="Ashwin Menon"
                    job="Co-Producer/Mixing Engineer"
                  />
                  <NameCard name="Simon Francis" job="Mastering Engineer" />
                </section>
                <section className="credits-marketing">
                  <h2>MARKETING</h2>
                  <NameCard name="Chelsea Chan" job="Social Media Manager" />
                  <NameCard
                    name="Cross Ratio Entertainment"
                    job="Public Relations Management"
                  />
                </section>
              </div>
              <div className="col">
                <section className="credits-mv">
                  <h2>MUSIC VIDEO</h2>
                  <NameCard name="Jeremy Hu" job="Director/Editor" />
                  <NameCard name="Lavita Kala" job="Producer" />
                  <NameCard name="Wan Othman" job="Director of Photography" />
                  <NameCard name="Muhd Afa'alhayat" job="Camera Assistant #1" />
                  <NameCard name="Muhammad Ridzwan" job="Camera Assistant #2" />
                  <NameCard name="Cheong Ying Sien" job="Colourist" />
                  <NameCard name="Charlotte Greenall" job="Translator" />
                </section>
                <section className="credits-sound">
                  <h2>SOUND CAPSULE</h2>
                  <NameCard
                    name="Ashwin Menon"
                    job="Field Sound Recordist/Mix Engineer"
                  />
                  <NameCard name="Marcus Chua" job="Videographer/Video Editor" />
                </section>
              </div>
              <div className="col">
                <section className="credits-portrait">
                  <h2>PORTRAIT JOURNEYS</h2>
                  <NameCard name="Anton Lim<br>Darren Leong" job="Creative Directors" />
                  <NameCard
                    name="Lydia Yang<br>Ashwin Menon<br>Art Mirzi<br>Ong Chan Hao<br>Natasha Tan<br>Nathaniel Tan"
                    job="Talents"
                  />
                </section>
                <section className="credits-web">
                  <h2>WEBSITE</h2>
                  <NameCard
                    name="Kazhar Ali"
                    job="Art Director/Co-Creative Director"
                  />
                  <NameCard name="Lin Lifan" job="UX Designer/Developer" />
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="pg2">
          <div className="container">
            <StrokedText
              color="#ff6b3b"
              fontSize="3.7rem"
              mobileFontSize="2rem"
            >
              special thanks to
            </StrokedText>
            <div className="names">
              <div className="name">
                <div className="nac-logo">
                  <img src={nac} alt="National Arts Council" />
                </div>
              </div>
              <div className="name">Eric Chua and the <b>Queenstown Town Council</b></div>
              <div className="name">Sinclair Ang</div>
              <div className="name">Alice Lee, Asmine Lee, and Family</div>
              <div className="name">Mr Chee and Family<br /><b>Fung Onn Medical Store</b></div>
              <div className="name">Uncle Lee and Family<br /><b>Hock Ann Confectionary</b></div>
              <div className="name">Mr Tan and Family<br /><b>Tong Kee Chicken Rice</b></div>
              <div className="name">Mr &amp; Mrs Deng<br /><b>Tanglin Halt Original Peanut Pancake</b></div>
              <div className="name">Kimmy, Jemmy, and Family<br /><b>The Peking Room Coffeeshop</b></div>
              <div className="name">Mr Abdullah Latiff<br /><b>Salon De Benzimen</b></div>
              <div className="name">Koh Tiong Min (Amin Koh)<br /><b>Amin Koh Cobbler</b></div>
              <div className="name">Rebecca Wong, Winston Wong, and Family<br /><b>By My Old School</b></div>
              <div className="name">Sudha, Sasi, Banumathy, Kanmani, and Friends</div>
              <div className="name">Nimalan, Nithish, Sathyan Maheswaran, Kaashvi, Kaniyan, Harish, Iniya, and Subin</div>
              <div className="endnote">A Project By Lincoln Lim</div>
            </div>
          </div>
        </div>
      </GridContainer>
    </motion.div>
  );
};

export default ThanksPage;

const GridContainer = styled.div`
  width: 100%;
  /* max-width: 1200px; */
  margin: 0 auto;
  justify-content: center;
  /* height: 100vh; */
  display: grid;
  grid-template:
    "menu" 75px
    "head" auto
    "main" auto
    "pg2 " auto
    / 1fr;

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .menu {
    grid-area: menu;
    width: 100%;
    background: #e8f7ff url(${pattern});
    background-blend-mode: multiply;
    display: flex;
    .container {
      padding: 0;
    }
  }
  .header {
    background: #e8f7ff url(${pattern});
    background-blend-mode: multiply;
    grid-area: head;
    align-self: center;
    justify-self: center;
    width: 100%;
  }

  .main {
    grid-area: main;
    align-self: stretch;
    background: #d1efff url(${pattern});
    background-blend-mode: multiply;
    width: 100%;
    /* position: relative; */
    /* padding: 0 15px; */

    .credits {
      display: flex;
      margin: 0 auto 60px;
      justify-content: space-evenly;
      flex-wrap: wrap;

      h2 {
        color: #083d77;
        font-weight: bold;
        text-align: center;
        font-family: Rubik;
      }
      .col {
        width: 100%;
        section {
          margin-bottom: 30px;
        }
      }
    }

  }
  .pg2 {
    grid-area: pg2;
    background: #e8f7ff url(${pattern});
    background-blend-mode: multiply;
    padding: 60px 0;
    color: #083d77;
    .nac-logo {
      max-width: 300px;
      margin: 0 !important;
    }
    .names {
      display: flex;
      margin: 0 auto;
      text-align: center;
      align-items: center;
      flex-direction: column;
      div {
        margin: 15px 0;
      }
      .endnote {
        font-size: 1.5rem;
        font-weight: bold;
        margin-top: 30px;
      }
    }
  }

  @media screen and (min-width: 769px) {
    grid-template:
      "menu" 150px
      "head" auto
      "main" auto
      "pg2 " auto
      /* "s" minmax(50px, 250px) */
      / 1fr;
    
    .main {
      .credits {
        .col {
          width: 33%;
        }
      }
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
      <div
        className="name"
        dangerouslySetInnerHTML={{ __html: props.name }}
      ></div>
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
    text-align: center;
  }
  .name {
    font-weight: bold;
    text-align: center;
  }
`;
