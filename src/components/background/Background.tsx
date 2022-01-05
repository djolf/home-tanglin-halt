import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import dataStore from "../../store";
import { Pages } from "../model";
import vignette from "../../assets/videos/vignettes2.mp4";
import { useMediaQuery } from "react-responsive";

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
  },
];

const Background = observer(() => {
  const isMobile = useMediaQuery({ query: `(max-width: 992px)` });
  const circleVariants = {
    circle1: {
      mobile: { width: "200vw", height: "200vw", transition: { type: "tween", delay: 0.9 } },
      desktop: { width: "100vw", height: "100vw", transition: { type: "tween", delay: 0.9 } },
    },
    circle2: {
      mobile: { width: "150vw", height: "150vw", transition: { type: "tween", delay: 0.6 } },
      desktop: { width: "75vw", height: "75vw", transition: { type: "tween", delay: 0.6 } },
    },
    circle3: {
      mobile: { width: "100vw", height: "100vw", transition: { type: "tween", delay: 0.3 } },
      desktop: { width: "50vw", height: "50vw", transition: { type: "tween", delay: 0.3 } },
    },
    circle4: {
      mobile: { width: "50vw", height: "50vw" },
      desktop: { width: "25vw", height: "25vw" },
    },
  }
  return (
    <Wrapper
      background={BG[dataStore.currentPage].background}
    >
      {[Pages.HOME, Pages.WRITEUP].includes(dataStore.currentPage) && (
        <>
          <video autoPlay muted loop preload="auto">
            <source src={vignette} />
          </video>
        </>
      )}
      {dataStore.currentPage === Pages.PORTRAITS && (
        <motion.div
          className="portraits"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ x: '100vw' }}
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
            className="column d-none d-md-flex"
            initial={{ y: "-100vh" }}
            animate={{ y: "25vh", transition: { delay: 0.8 } }}
          >
            <div className="block green"></div>
            <div className="block yellow"></div>
            <div className="block orange large"></div>
          </motion.div>
          <motion.div
            className="column d-none d-md-flex"
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
            animate={isMobile ? circleVariants.circle1.mobile : circleVariants.circle1.desktop}
            exit={{ width: 0, height: 0 }}
            transition={{ type: "spring", duration: 1 }}
          />
          <motion.div
            className="circle"
            initial={{ width: 0, height: 0 }}
            animate={isMobile ? circleVariants.circle2.mobile : circleVariants.circle2.desktop}
            exit={{ width: 0, height: 0 }}
            transition={{ type: "spring", duration: 1 }}
          />
          <motion.div
            className="circle"
            initial={{ width: 0, height: 0 }}
            animate={isMobile ? circleVariants.circle3.mobile : circleVariants.circle3.desktop}
            exit={{ width: 0, height: 0 }}
            transition={{ type: "spring", duration: 1 }}
          />
          <motion.div
            className="circle"
            initial={{ width: 0, height: 0 }}
            animate={isMobile ? circleVariants.circle4.mobile : circleVariants.circle4.desktop}
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
  background: ${(props) => props.background || "white"};
  @media screen and (min-width: 769px) {
    background: ${(props) => props.background || "white"};
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
