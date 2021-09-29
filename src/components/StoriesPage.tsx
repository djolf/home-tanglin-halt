import { motion } from "framer-motion"
import { useHistory } from "react-router";
import Menu from "./menu/menu";
import arrow from "../assets/images/arrow-red.png";
import styled from "styled-components";
import image from "../assets/images/stories-from-pub.png";

const StoriesPage = () => {
  const history = useHistory();
  return (
    <motion.div
      className="StoriesPage"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw" }}
      transition={{ duration: 0.5 }}
    >
      <GridContainer>
        <div className="menu">
          <Menu showLogo color="#bf2553" />
        </div>
        <div className="main">
          <div className="title-group">
            <StrokedText className="title" color="#ff6d6d" fontSize="6rem">stories</StrokedText>
            <StrokedText className="title" color="#ff6d6d" fontSize="6rem">from the</StrokedText>
            <StrokedText className="title" color="#ff6d6d" fontSize="6rem">public</StrokedText>
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.
            <div className="button">VIEW PORTRAITS</div>
          </div>
          <div className="image">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="scroll" onClick={() => history.push("/stories")}>
          <span>End</span>
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
  )
}

export default StoriesPage;

const GridContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  display: grid;
  grid-template:
    "menu" 150px
    ".   " minmax(auto, 150px)   
    "main" 600px
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
    position: relative;
    padding: 0 15px;
    display: grid;
    grid-template:
      "head img" 1fr
      "text img" 1fr
    /  1fr 1fr;

    .title-group {
      grid-area: head;
      justify-self: end;
      .title {
        /* line-height: 6.5rem; */
        letter-spacing: 0.5rem;
        &.gallery {
          margin-left: 3rem;
        }
      }
    }
    .text {
      grid-area: text;
      width: 70%;
      font-family: Rubik;
      font-weight: 400;
      font-size: 0.9rem;
      color: #bf2553;
      justify-self: end;
    }
    .button {
      cursor: pointer;
      background: #c02554;
      padding: 5px;
      color: white;
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Rubik;
      font-weight: 400;
      margin-left: auto;
      margin-top: 15px;
    }
    .image {
      grid-area: img;
    }
  }

  .scroll {
    cursor: pointer;
    grid-area: s;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #bf2553;
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

