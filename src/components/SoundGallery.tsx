import { motion } from "framer-motion"
import { useHistory } from "react-router";
import Menu from "./menu/menu";
import arrow from "../assets/images/arrow-blue.png";
import styled from "styled-components";
import img1 from "../assets/images/sg1.jpg"
import img2 from "../assets/images/sg2.jpg"
import img3 from "../assets/images/sg3.jpg"
import img4 from "../assets/images/sg4.jpg"
import img5 from "../assets/images/sg5.jpg"
import img6 from "../assets/images/sg6.jpg"
import CircleImg from "./circleImg/CircleImg";

const SoundGallery = () => {
  const history = useHistory();
  return (
    <motion.div
      className="SoundGallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <GridContainer>
        <div className="menu">
          <Menu showLogo color="#073d77" />
        </div>
        <div className="main">
          <div className="title-group">
            <StrokedText className="title" color="#3d91cb" fontSize="6rem">sound</StrokedText>
            <StrokedText className="title gallery" color="#3d91cb" fontSize="6rem">gallery</StrokedText>
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.
          </div>
          {/* <div className="text-area">
          </div> */}
          <CircleImg src={img1} className="p1" size={150} />
          <CircleImg src={img2} className="p2" size={200} />
          <CircleImg src={img3} className="p3" size={150} />
          <CircleImg src={img4} className="p4" size={300} />
          <CircleImg src={img5} className="p5" size={150} />
          <CircleImg src={img6} className="p6" size={150} />
        </div>
        <div className="scroll" onClick={() => history.push("/stories")}>
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
  )
}

export default SoundGallery;

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
      "Tt  Tt  Tt  Tt  Tt  Tt  Tt  Tt  Tt  Tt  p3  p3  p3  .   .   .   .   .   .   .  " 1fr
      "Tt  Tt  Tt  Tt  Tt  Tt  Tt  Tt  Tt  Tt  p3  p3  p3  .   .   .   p5  p5  p5  .  " 1fr
      "Tt  Tt  Tt  Tt  Tt  Tt  Tt  Tt  Tt  Tt  p3  p3  p3  .   .   .   p5  p5  p5  .  " 1fr
      "Tt  Tt  Tt  Tt  Tt  Tt  Tt  Tt  Tt  Tt  .   .   .   .   .   .   p5  p5  p5  .  " 1fr
      "tx  tx  tx  tx  tx  tx  tx  tx  tx  tx  .   p4  p4  p4  p4  p4  .   .   .   .  " 1fr
      "tx  tx  tx  tx  tx  tx  tx  tx  tx  tx  .   p4  p4  p4  p4  p4  .   .   .   .  " 1fr
      ".   .   p1  p1  p1  .   .   .   .   .   .   p4  p4  p4  p4  p4  .   .   .   .  " 1fr
      ".   .   p1  p1  p1  .   p2  p2  p2  p2  .   p4  p4  p4  p4  p4  .   p6  p6  p6 " 1fr
      ".   .   p1  p1  p1  .   p2  p2  p2  p2  .   p4  p4  p4  p4  p4  .   p6  p6  p6 " 1fr
      ".   .   .   .   .   .   p2  p2  p2  p2  .   .   .   .   .   .   .   p6  p6  p6 " 1fr
      ".   .   .   .   .   .   p2  p2  p2  p2  .   .   .   .   .   .   .   .   .   .  " 1fr
    /  1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;

    .title-group {
      grid-area: Tt;
      align-self: center;
      .title {
        line-height: 6.5rem;
        letter-spacing: 0.5rem;
        &.gallery {
          margin-left: 3rem;
        }
      }
    }
    .text {
      grid-area: tx;
      width: 70%;
      font-family: Rubik;
      font-weight: 400;
      font-size: 0.9rem;
      color: #073d77;
      align-self: center;
    }
    /* .text-area {
      display: flex;
      flex-direction: column;
      width: 50%;
      margin-top: 5%;
      margin-left: 5%;

    } */
    .p1 {
      grid-area: p1;
      place-self: center;
    }
    .p2 {
      grid-area: p2;
      place-self: center;
    }
    .p3 {
      grid-area: p3;
      place-self: center;
    }
    .p4 {
      grid-area: p4;
      place-self: center;
      background-size: 165%;
    }
    .p5 {
      grid-area: p5;
      place-self: center;
    }
    .p6 {
      grid-area: p6;
      place-self: center;
    }
  }

  .scroll {
    cursor: pointer;
    grid-area: s;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #073d77;
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

