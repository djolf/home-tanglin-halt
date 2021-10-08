import { motion } from "framer-motion"
import { useHistory } from "react-router";
import Menu from "./menu/menu";
import arrow from "../assets/images/arrow-green.png";
import styled from "styled-components";
import p1 from "../assets/images/portraits1.jpg";
import p2 from "../assets/images/portraits2.jpg";
import "./transitions.scss";
import dataStore from "../store";

const PortraitsPage = () => {
  const history = useHistory();
  return (
    <motion.div
      className="portraits-enter"
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="background">
        <div className="column">
          <div className="block"></div>
          <div className="block"></div>
          <div className="block large"></div>
        </div>
        <div className="column">
          <div className="block"></div>
          <div className="block"></div>
          <div className="block large"></div>
        </div>
        <div className="column">
          <div className="block"></div>
          <div className="block"></div>
          <div className="block large"></div>
        </div>
        <div className="column">
          <div className="block large"></div>
          <div className="block large"></div>
        </div>
      </div>
      <motion.div
        className="PortraitsPage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GridContainer>
          <div className="menu">
            <Menu showLogo color="#386641" />
          </div>
          <div className="main">
            <div className="p2">
              <img src={p2} alt="" />
            </div>
            <div className="text-area">
              <StrokedText className="title" color="#f59f49" fontSize="6rem">portraits</StrokedText>
              <div className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.
              </div>
              <div className="button">VIEW PORTRAITS</div>
              <div className="p1">
                <img src={p1} alt="" />
              </div>
            </div>

          </div>
          <div className="scroll" onClick={() => {
            dataStore.setCurrentPage(4);
            history.push("/sound-gallery")
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
  )
}

export default PortraitsPage;

const GridContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  display: grid;
  grid-template:
    "menu" 75px
    "main" minmax(600px, auto)
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
    /* overflow: hidden; */
    position: relative;

    .text-area {
      position: absolute;
      display: flex;
      flex-direction: column;
      width: 50%;
      left: 5%;
      top: 15%;

      .title {
      }
      .text {
        width: 70%;
        font-family: Rubik;
        font-weight: 400;
        font-size: 0.9rem;
        color: #386641;
        margin-left: 5%;
      }
      .button {
        cursor: pointer;
        background: #386641;
        padding: 5px;
        color: white;
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Rubik;
        font-weight: 400;
        margin-left: auto;
        margin-right: 20%;
        margin-top: 15px;
      }
      .p1 {
        margin-top: 15px;
        display: flex;
        position: relative;
        margin-left: auto;
        width: 75%;
        img {
          width: 100%;
          height: auto;
          z-index: 2;
        }
        &:before {
          content: "";
          width: 70%;
          height: 70%;
          background-color: #fff7c5;
          position: absolute;
          left: -25px;
          bottom: -25px;
        }
      }
    }

    .p2 {
      position: absolute;
      width: 45%;
      height:auto;
      right: 5%;
      top: 20%;
      img {
        width: 100%;
        height: auto;
        z-index: 2;
      }
      &::before {
        content: "";
        width: 40%;
        height: 30%;
        background-color: #ffa963;
        position: absolute;
        right: -25px;
        top: -25px;
        z-index: -1;
      }
    }
  }

  .scroll {
    cursor: pointer;
    grid-area: s;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #386641;
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
  @media screen and (min-width: 992px) {
    grid-template:
    "menu" 150px
    "main" minmax(600px, auto)
    "s" minmax(50px, 250px)
    / 1fr;

    .main {
    grid-area: main;
    align-self: stretch;
    /* overflow: hidden; */
    position: relative;

    .text-area {
      position: absolute;
      display: flex;
      flex-direction: column;
      width: 50%;
      left: 5%;
      top: 15%;

      .title {
      }
      .text {
        width: 70%;
        font-family: Rubik;
        font-weight: 400;
        font-size: 0.9rem;
        color: #386641;
        margin-left: 5%;
      }
      .button {
        cursor: pointer;
        background: #386641;
        padding: 5px;
        color: white;
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Rubik;
        font-weight: 400;
        margin-left: auto;
        margin-right: 20%;
        margin-top: 15px;
      }
      .p1 {
        margin-top: 15px;
        display: flex;
        position: relative;
        margin-left: auto;
        width: 75%;
        img {
          width: 100%;
          height: auto;
          z-index: 2;
        }
        &:before {
          content: "";
          width: 70%;
          height: 70%;
          background-color: #fff7c5;
          position: absolute;
          left: -25px;
          bottom: -25px;
        }
      }
    }

    .p2 {
      position: absolute;
      width: 45%;
      height:auto;
      right: 5%;
      top: 20%;
      img {
        width: 100%;
        height: auto;
        z-index: 2;
      }
      &::before {
        content: "";
        width: 40%;
        height: 30%;
        background-color: #ffa963;
        position: absolute;
        right: -25px;
        top: -25px;
        z-index: -1;
      }
    }
  }
  }
`;

interface IProps {
  fontSize?: string;
}

const StrokedText = styled.div<IProps>`
  font-family: hagona;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '4rem')};
  color: ${(props) => (props.color ? props.color : "white")};
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 3px;
`;