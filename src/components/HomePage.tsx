import { motion } from "framer-motion";
import { useHistory } from "react-router";
import styled from "styled-components";
import home from "../assets/images/Home.@2x.svg";
import arrow from "../assets/images/arrow.svg";
import Menu from "./menu/menu";
import dataStore from "../store";
import { useEffect } from "react";

const HomePage = () => {
  const history = useHistory();
  useEffect(() => {
    dataStore.setCurrentPage(0);
  }, []);
  return (
    <motion.div
      className="Homepage"
      key="home"
      transition={{ duration: 0.5 }}
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw" }}
    >
      <GridContainer>
        <div className="m">
          <Menu />
        </div>
        <div className="h">
          <img src={home} alt="" />
        </div>
        <div className="t">
          <div className="tanglin">TANGLIN</div>
          <div className="halt">HALT</div>
        </div>
        <div
          className="a"
          onClick={() => {
            history.push("/writeup");
          }}
        >
          <motion.img
            key="img"
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
        <div className="l">
          <p>an experience by Lincoln Lim</p>
        </div>
        {/* <button onClick={()=> history.push('/mv')}>next</button> */}
      </GridContainer>
    </motion.div>
  );
};

export default HomePage;

const GridContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  display: grid;
  overflow-x: hidden;

  grid-template:
    "m m m m" 75px
    "h h h h" 2fr
    "t t t ." 1fr
    ". . . a" 50px
    "l l l l" 1fr
    ". . . ." 1fr
    ". . . ." 1fr
    /1fr 1fr 1fr 1fr;

  .h {
    img {
      width: 100%;
      height: auto;
      max-width: 600px;
    }
    grid-area: h;
    justify-self: center;
    align-self: flex-end;
    // padding: 0 15px;
    margin-left: 15px;
    margin-right: 15px;
  }

  .t {
    grid-area: t;
    color: white;
    font-family: Rubik;
    font-weight: 500;
    font-size: 2.5rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 15px;

    .tanglin {
      /* margin-left: 15%; */
    }

    .halt {
      margin-left: 150px;
    }
  }

  .a {
    grid-area: a;
    justify-self: end;
    align-self: end;
    cursor: pointer;
    margin-right: 15px;
    margin-left: 15px;
  }

  .l {
    grid-area: l;
    font-size: 1.5rem;
    font-family: Rubik;
    color: white;
    justify-self: center;
    text-align: center;
    margin-left: 15px;
    margin-right: 15px;
  }

  .m {
    grid-area: m;
  }

  @media screen and (min-width: 576px) {
    grid-template:
      "m m m m" 75px
      "h h h h" 2fr
      "t t t a" 1fr
      "l l l l" 1fr
      ". . . ." 1fr
      ". . . ." 1fr
      /1fr 1fr 1fr 1fr;
    .h {
      padding: 0 15vw;
    }
    .t {
      padding: 0 15vw;
    }
    .a {
      align-self: center;
    }
  }

  @media screen and (min-width: 769px) {
    grid-template:
      "m m m m m m" 150px
      ". . . . . ." 1fr
      ". . . . . ." 1fr
      "h h h h . ." 1fr
      ". . . t t a" 1fr
      ". . . . l l" 1fr
      ". . . . . ." 1fr
      ". . . . . ." 1fr
      /1fr 1fr 1fr 1fr 1fr 1fr;
    .h {
      padding: 0;
      align-self: center;
    }
    .t {
      padding: 0;
      justify-content: center;
      font-size: 3rem;
      .tanglin {
        margin-left: 15%;
      }
      .halt {
        margin-left: 165px;
      }
    }
    .l {
      text-align: left;
    }
  }
`;
