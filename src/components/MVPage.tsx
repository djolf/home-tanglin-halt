import { motion } from "framer-motion";
import { useHistory } from "react-router";
import styled from "styled-components";
import Menu from "./menu/menu";
import arrow from "../assets/images/arrow.svg";
import { useEffect } from "react";

const MVPage = () => {
  const history = useHistory();

  useEffect(() => {
    return () => {
      document.body.style.backgroundColor = "#e5f7c1";
    }
  }, [])
  return (
    <motion.div
      className="MVPage"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw" }}
      transition={{ duration: 0.5 }}
    >
      <GridContainer>
        <div className="menu">
          <Menu showLogo />
        </div>
        <div className="main">
          <div className="ratio-box">
            <iframe src="https://www.youtube.com/embed/u31qwQUeGuM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
        <div className="scroll" onClick={() => history.push("/portraits")}>
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
  );
};

export default MVPage;

const GridContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  display: grid;
  grid-template:
    "menu" 150px
    "main" minmax(675px, auto)
    "s" minmax(50px, 250px)
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
    overflow: hidden;
    display: flex;
    align-items: center;

    .ratio-box {
      background: white;
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 56.25%;
      margin: 0 15px;
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
    span {
      margin-right: 1rem;
      padding-bottom: 5px;
    }
    .arrow {
      width: 35%;
    }
  }
`;
