import { motion } from "framer-motion";
import styled from "styled-components";
import Menu from "./menu/menu";
import arrow from "../assets/images/arrow.svg";
import { useHistory } from "react-router";
import dataStore from "../store";
import { useEffect } from "react";

const WriteUp = () => {
  const history = useHistory();
  useEffect(() => {
    dataStore.setCurrentPage(1);
  }, []);
  return (
    <motion.div
      className="Writeup"
      transition={{ duration: 0.5 }}
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw" }}
    >
      <GridContainer>
        <div className="menu">
          <Menu showLogo />
        </div>
        <div className="main">
          <div className="text-container">
            <div className="heading">
              <span className="line1">to me,</span>
              <span className="line2">this is home.</span>
            </div>
            <p>
              Singapore is a country built upon a tenuous balance— progress and
              preservation the nation’s yin and yang. Because while we search
              for that ever-elusive “better”, I think there’s a part of us that
              wants to hit pause—and nothing expresses that more than Tanglin
              Halt.
            </p>
            <p>
              To me personally, it’s a place I grew up around—and now, in the
              time of a pandemic, one I found myself returning to again and
              again, just as it prepares to undergo Singapore’s biggest
              redevelopment scheme since 1999.
            </p>
            <p>
              In short, this project is a celebration, a reminder to appreciate
              the places that matter and to keep them relevant. So, to the
              Tanglin Halts for all of us, to the hometown haunts and childhood
              hangouts, this is for you.
            </p>
            <p>
              <strong>This is home.</strong>
            </p>
          </div>
        </div>
        <div
          className="scroll"
          onClick={() => {
            history.push("/music-video");
          }}
        >
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
  );
};

export default WriteUp;

const GridContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  /* display: grid;
  grid-template: 
    "menu" 150px
    "main" minmax(400px, auto)
    "s" minmax(50px, 250px)
    /1fr
  ; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  img {
    max-width: 100%;
    height: auto;
  }

  .menu {
    display: flex;
    justify-content: space-between;
    margin-bottom: auto;
    padding: 15px;
    margin-top: 30px;
    width: 100%;
  }

  .main {
    grid-area: main;
    text-align: center;
    color: white;
    font-family: Rubik;
    font-weight: 400;
    align-self: center;
    padding: 0 15px;

    .text-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      justify-content: center;
    }

    .heading {
      font-size: 2rem;
      display: flex;
      flex-direction: column;
      width: 290px;
      margin: 0 auto;
      margin-bottom: 2rem;
      font-weight: 500;
      .line1 {
        text-align: left;
      }
      .line2 {
        text-align: right;
      }
    }
    p {
      max-width: 1000px;
      margin: 0 auto;
      font-size: 21px;
      margin-bottom: 2rem;
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
    margin-bottom: auto;
    span {
      margin-right: 1rem;
      padding-bottom: 5px;
    }
    .arrow {
      width: 35%;
    }
  }

  @media screen and (min-width: 576px) {
    .main {
      .heading {
        font-size: 3rem;
        width: 450px;
      }
    }
  }

  @media screen and (min-width: 769px) {
    .main {
      .heading {
        font-size: 3.5rem;
        width: 600px;
      }
    }
  }
`;
