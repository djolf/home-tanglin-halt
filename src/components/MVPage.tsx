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

  const variants = {
    initial: {
      display: "none",
    },
    exit: {
      display: "flex",
    },
  };
  return (
    <motion.div className="mv-exit">
      <motion.div
        className="background"
        variants={variants}
        initial="initial"
        exit="exit"
      >
        <motion.div
          className="column"
          initial={{ y: "-100vh" }}
          exit={{ y: 0 }}
        >
          <div className="block green"></div>
          <div className="block yellow"></div>
          <div className="block orange large"></div>
        </motion.div>
        <motion.div
          className="column"
          initial={{ y: "-100vh" }}
          exit={{ y: "12vh", transition: { delay: 0.5 } }}
        >
          <div className="block green"></div>
          <div className="block yellow"></div>
          <div className="block orange large"></div>
        </motion.div>
        <motion.div
          className="column"
          initial={{ y: "-100vh" }}
          exit={{ y: "25vh", transition: { delay: 1 } }}
        >
          <div className="block green"></div>
          <div className="block yellow"></div>
          <div className="block orange large"></div>
        </motion.div>
        <motion.div
          className="column"
          initial={{ y: "-100vh" }}
          exit={{ y: 0, transition: { delay: 1.5 } }}
        >
          <div className="block green large"></div>
          <div className="block yellow large"></div>
        </motion.div>
      </motion.div>
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
              {/* <iframe
                src="https://www.youtube.com/embed/u31qwQUeGuM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}
              {/* <div style={{ padding: "42.86% 0 0 0", position: "relative" }}> */}
                {/* <iframe
                  src="https://player.vimeo.com/video/207292223?h=f93ddecc0f&autoplay=1&title=0&byline=0&portrait=0"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; gyroscope; accelerometer"
                  allowFullScreen
                ></iframe> */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/R0uqeCf_Zo8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
            {/* </div> */}
          </div>
          <div className="scroll" onClick={() => {
            dataStore.setCurrentPage(3);
            history.push("/portraits")
          }}>
            <span>Scroll</span>
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
