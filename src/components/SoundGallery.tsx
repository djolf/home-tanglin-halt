import { AnimateSharedLayout, motion } from "framer-motion";
import { useHistory } from "react-router";
import Menu from "./menu/menu";
import arrow from "../assets/images/arrow-blue.png";
import styled from "styled-components";
import CircleImg from "./circleImg/CircleImg";
import dataStore from "../store";
import { useEffect, useState } from "react";
import SoundSubPage from "./SoundSubPage";

const SoundGallery = () => {
  const history = useHistory();
  const [currentId, setCurrentId] = useState<null | number>(null);
  useEffect(() => {
    dataStore.setCurrentPage(4);
  }, []);
  return (
    <motion.div
      className="SoundGallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <GridContainer>
        <div className="menu">
          <Menu showLogo color="#073d77" hideMenu={currentId !== null} />
        </div>
        <div className="main">
          <div className="title-group">
            <StrokedText className="title" color="#3d91cb" fontSize="4.4rem">
              the
            </StrokedText>
            <StrokedText className="title" color="#3d91cb" fontSize="4.4rem">
              sound
            </StrokedText>
            <StrokedText
              className="title gallery"
              color="#3d91cb"
              fontSize="4.4rem"
            >
              capsule
            </StrokedText>
          </div>
          <div className="text">
            Some places are a living, breathing time capsules—the crack you
            tripped on, the trees you climbed, the windows you broke. Immerse
            yourself into Tanglin Halt through these six 360° experiences—a way
            to remember what was, long after it’s gone.
          </div>
          {/* <div className="text-area">
          </div> */}
          <AnimateSharedLayout>
            <CircleImg
              src={`http://img.youtube.com/vi/${dataStore.getPlaylist()[0].id}/hqdefault.jpg`}
              className="p1"
              size={150}
              onClick={() => setCurrentId(0)}
              layoutId="sound0"
              title={dataStore.getPlaylist()[0].name}
            />
            <CircleImg
              src={`http://img.youtube.com/vi/${dataStore.getPlaylist()[1].id}/hqdefault.jpg`}
              className="p2"
              size={200}
              onClick={() => setCurrentId(1)}
              layoutId="sound1"
              title={dataStore.getPlaylist()[1].name}
            />
            <CircleImg
              src={`http://img.youtube.com/vi/${dataStore.getPlaylist()[2].id}/hqdefault.jpg`}
              className="p3"
              size={150}
              onClick={() => setCurrentId(2)}
              layoutId="sound2"
              title={dataStore.getPlaylist()[2].name}
            />
            <CircleImg
              src={`http://img.youtube.com/vi/${dataStore.getPlaylist()[3].id}/hqdefault.jpg`}
              className="p4"
              size={300}
              onClick={() => setCurrentId(3)}
              layoutId="sound3"
              title={dataStore.getPlaylist()[3].name}
            />
            <CircleImg
              src={`http://img.youtube.com/vi/${dataStore.getPlaylist()[4].id}/hqdefault.jpg`}
              className="p5"
              size={200}
              onClick={() => setCurrentId(4)}
              layoutId="sound4"
              title={dataStore.getPlaylist()[4].name}
            />
            <CircleImg
              src={`http://img.youtube.com/vi/${dataStore.getPlaylist()[5].id}/hqdefault.jpg`}
              className="p6"
              size={150}
              onClick={() => setCurrentId(5)}
              layoutId="sound5"
              title={dataStore.getPlaylist()[5].name}
            />
            <CircleImg
              src={`http://img.youtube.com/vi/${dataStore.getPlaylist()[6].id}/hqdefault.jpg`}
              className="p7"
              size={200}
              onClick={() => setCurrentId(6)}
              layoutId="sound6"
              title={dataStore.getPlaylist()[6].name}
            />
            {currentId !== null && (
              <SoundSubPage id={currentId} dismiss={() => setCurrentId(null)} />
            )}
          </AnimateSharedLayout>
        </div>
        <div
          className="scroll"
          onClick={() => {
            dataStore.setCurrentPage(5);
            setCurrentId(null);
            history.push("/stories");
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
      "Tt  Tt  Tt  Tt  Tt  Tt  .   .   .   .   .   p3  p3  p3  .   .   .   .   .   .  " 1fr
      "Tt  Tt  Tt  Tt  Tt  Tt  p7  p7  p7  p7  .   p3  p3  p3  .   .   p5  p5  p5  p5 " 1fr
      "Tt  Tt  Tt  Tt  Tt  Tt  p7  p7  p7  p7  .   p3  p3  p3  .   .   p5  p5  p5  p5 " 1fr
      "Tt  Tt  Tt  Tt  Tt  Tt  p7  p7  p7  p7  .   .   .   .   .   .   p5  p5  p5  p5 " 1fr
      ".   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   p5  p5  p5  p5 " 1fr
      "tx  tx  tx  tx  tx  tx  tx  tx  tx  tx  .   p4  p4  p4  p4  p4  .   .   .   .  " 1fr
      "tx  tx  tx  tx  tx  tx  tx  tx  tx  tx  .   p4  p4  p4  p4  p4  .   .   .   .  " 1fr
      ".   .   .   .   .   .   .   .   .   .   .   p4  p4  p4  p4  p4  .   .   .   .  " 1fr
      ".   .   p1  p1  p1  .   .   .   .   .   .   p4  p4  p4  p4  p4  .   p6  p6  p6 " 1fr
      ".   .   p1  p1  p1  .   p2  p2  p2  p2  .   p4  p4  p4  p4  p4  .   p6  p6  p6 " 1fr
      ".   .   p1  p1  p1  .   p2  p2  p2  p2  .   .   .   .   .   .   .   p6  p6  p6 " 1fr
      ".   .   .   .   .   .   p2  p2  p2  p2  .   .   .   .   .   .   .   .   .   .  " 1fr
      ".   .   .   .   .   .   p2  p2  p2  p2  .   .   .   .   .   .   .   .   .   .  " 1fr
      / 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

    .title-group {
      grid-area: Tt;
      align-self: center;
      .title {
        line-height: 5.5rem;
        &.gallery {
          /* margin-left: 3rem; */
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
      & > div {
        background-size: 180%;
      }
    }
    .p5 {
      grid-area: p5;
      place-self: center;
    }
    .p6 {
      grid-area: p6;
      place-self: center;
    }
    .p7 {
      grid-area: p7;
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

export const StrokedText = styled(motion.div)<IProps>`
  font-family: hagona;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "4rem")};
  color: ${(props) => (props.color ? props.color : "white")};
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
  user-select: none;
`;
