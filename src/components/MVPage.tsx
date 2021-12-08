import { motion } from "framer-motion";
import { useHistory } from "react-router";
import styled from "styled-components";
import Menu from "./menu/menu";
import arrow from "../assets/images/arrow.svg";
import { useEffect } from "react";
import "./transitions.scss";
import dataStore from "../store";

const MVPage = () => {
  const history = useHistory();

  useEffect(() => {
    dataStore.setCurrentPage(2);
  }, [])

  return (
    <motion.div className="mv-exit">
      <motion.div
        className="MVPage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GridContainer>
          <div className="menu">
            <Menu showLogo />
          </div>
          <div className="main">
            <div className="ratio-box">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/EPrrf6c9dCA?rel=0&autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
            {/* </div> */}
          </div>
          <div className="scroll" onClick={() => {
            history.push("/portraits")
          }}>
            <span>Next</span>
            <div className="arrow">
              <motion.img
                animate={{ x: [0, 15, 0] }}
                transition={{
                  type: "tween",
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                src={arrow}
                alt=""
              />
            </div>
          </div>
        </GridContainer>
      </motion.div>
    </motion.div>
  );
};

export default MVPage;

const GridContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* display: grid;
  grid-template:
    "menu" 150px
    "main" minmax(675px, auto)
    "s" minmax(50px, 250px)
    / 1fr; */

  img {
    max-width: 100%;
    height: auto;
  }

  .menu {
    display: flex;
    justify-content: space-between;
    margin-bottom: auto;
    padding: 15px;
    margin-top: 15px;
    width: 100%;
    z-index: 2;
  }

  .main {
    grid-area: main;
    align-self: stretch;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 30px;

    .ratio-box {
      background: white;
      width: 100%;
      /* height: 0;
      padding-top: 56.25%;
      margin: 0 15px; */
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    iframe {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .scroll {
    cursor: pointer;
    grid-area: s;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: white;
    font-family: Rubik;
    font-size: 20px;
    margin-right: 15px;
    margin-left: auto;
    margin-bottom: 150px;
    z-index: 2;
    span {
      margin-right: 1rem;
      padding-bottom: 5px;
    }
    .arrow {
      width: 35%;
    }
  }

  @media screen and (min-width: 769px) {
    .main {
      .ratio-box {
        height: 0;
        padding-top: 56.25%;
        margin: 0 15px;
        position: relative;
        top: unset;
        bottom: unset;
        left: unset;
        right: unset;
      }

      iframe {
        width: calc(100% - 40px);
        height: calc(100% - 40px);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .scroll {
      margin-bottom: auto;
    }
  }
`;
