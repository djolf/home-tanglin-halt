import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import dataStore from "../../store";
import { Pages } from "../model";
// import "../transitions.scss";

const BG = [
  {
    name: "home",
    background: "rgba(0, 0, 0, 0.4)",
  },
  {
    name: "writeup",
    background: "rgba(0, 0, 0, 0.4)",
  },
  {
    name: "music-video",
    background: "#FBA667",
  },
  {
    name: "portraits",
    background: "hsl(80, 63%, 65%)",
  },
  {
    name: "sound-gallery",
    background: "#f7bbd3",
  },
  {
    name: "stories",
    background: "#fffbe8",
  },
  {
    name: "thanks",
    background: "linear-gradient(to bottom, #e8f7ff 35%, #d1efff 35% 100%)",
    tabletBackground:
      "linear-gradient(to bottom, #e8f7ff 20%, #d1efff 20% 100%)",
  },
];

const Background = observer(() => {
  const controls = useAnimation();
  return (
    <Wrapper
      background={BG[dataStore.currentPage].background}
      tabletBackground={BG[dataStore.currentPage].tabletBackground}
    >
      {/* <AnimatePresence exitBeforeEnter> */}
      {dataStore.currentPage === Pages.PORTRAITS && (
        <motion.div
          className="portraits"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ x: '100vw'  }}
          transition={{ duration: 0.1 }}
        >
          <motion.div
            className="column"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
          >
            <div className="block green"></div>
            <div className="block yellow"></div>
            <div className="block orange large"></div>
          </motion.div>
          <motion.div
            className="column"
            initial={{ y: "-100vh" }}
            animate={{ y: "12vh", transition: { delay: 0.4 } }}
          >
            <div className="block green"></div>
            <div className="block yellow"></div>
            <div className="block orange large"></div>
          </motion.div>
          <motion.div
            className="column"
            initial={{ y: "-100vh" }}
            animate={{ y: "25vh", transition: { delay: 0.8 } }}
          >
            <div className="block green"></div>
            <div className="block yellow"></div>
            <div className="block orange large"></div>
          </motion.div>
          <motion.div
            className="column"
            initial={{ y: "-100vh" }}
            animate={{ y: 0, transition: { delay: 1.2 } }}
          >
            <div className="block green large"></div>
            <div className="block yellow large"></div>
          </motion.div>
        </motion.div>
      )}
      {dataStore.currentPage === Pages.SOUND && (
        <motion.div 
          className="sound"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          <motion.div 
            className="circle"
            initial={{ width: 0, height: 0 }}
            animate={{ width: "100vw", height: "100vw", transition: { type: "tween", delay: 0.9 } }}
            exit={{ width: 0, height: 0 }}
            transition={{ type: "spring", duration: 1 }}
          />
          <motion.div 
            className="circle"
            initial={{ width: 0, height: 0 }}
            animate={{ width: "75vw", height: "75vw", transition: { type: "tween", delay: 0.6 }}}
            exit={{ width: 0, height: 0 }}
            transition={{ type: "spring", duration: 1 }}
          />
          <motion.div 
            className="circle"
            initial={{ width: 0, height: 0 }}
            animate={{ width: "50vw", height: "50vw", transition: { type: "tween", delay: 0.3 } }}
            exit={{ width: 0, height: 0 }}
            transition={{ type: "spring", duration: 1 }}
          />
          <motion.div 
            className="circle"
            initial={{ width: 0, height: 0 }}
            animate={{ width: "25vw", height: "25vw" }}
            exit={{ width: 0, height: 0 }}
            transition={{ type: "spring", duration: 1 }}
          />
        </motion.div>
      )}
      {/* </AnimatePresence> */}
    </Wrapper>
  );
});

export default Background;

type BackgroundProps = {
  background?: string;
  tabletBackground?: string;
};

const Wrapper = styled.div<BackgroundProps>`
  color: white;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background: ${(props) =>
    props.tabletBackground
      ? props.tabletBackground
      : props.background || "white"};
  @media screen and (min-width: 769px) {
    background: ${(props) => props.background || "white"};
  }
`;
