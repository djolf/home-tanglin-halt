import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import YouTube from "react-youtube";
import styled from "styled-components";
import dataStore from "../store";
import { StrokedText } from "./SoundGallery";

type IProps = {
  id: number;
  dismiss: any;
};

const SoundSubPage = (props: IProps) => {
  const [current, setCurrent] = useState(props.id);
  const [loaded, setLoaded] = useState(false);
  const playlist = dataStore.getPlaylist();

  const getPrev = () => {
    if (current === 0) setCurrent(playlist.length - 1);
    else setCurrent(current - 1);
  }

  const getNext = () => {
    if (current === playlist.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  }

  return (
    <Wrapper exit={{ scale: 0 }}>
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          background: `white`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        layoutId={`sound${props.id}`}
        onLayoutAnimationComplete={() => {
          setLoaded(true)
        }}
      >
        {loaded && current !== null && (
          <AnimatePresence>
            {/* <motion.iframe
              width="100%"
              key={current}
              height="100%"
              src={`https://www.youtube.com/embed/${playlist[current].id}?rel=0&autoplay=1`}
              title="YouTube video player" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0.5 } }}
            ></motion.iframe> */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { delay: 0.5 } }}
            >
              <YouTube
                videoId={playlist[current].id}
                key={current}
                title={playlist[current].name}
                onReady={(e) => e.target.playVideo()}
                containerClassName="YTPlayer"
                opts={{
                  height: '100%',
                  width: '100%',
                  playerVars: {
                    autoplay: 1,
                    rel: 0,
                    playsinline: 1,
                  }
                }}
              />
            </motion.div>
            <StrokedText
              key={`text-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1 } }}
              exit={{ opacity: 0 }}
              className="title"
              color="white"
              fontSize="3.5rem">
              {playlist[current].name}
            </StrokedText>
          </AnimatePresence>
        )}
        {/* <motion.img src={`http://img.youtube.com/vi/${playlist[current].id}/maxresdefault.jpg`} alt="" /> */}
        <div className="close btn" onClick={() => props.dismiss()}>
          <div className="top"></div>
          <div className="bottom"></div>
        </div>
        <div className="footer-bar">
          <div className="back btn" onClick={() => props.dismiss()}>Back</div>
          <div className="nav">
            <div className="prev btn" onClick={getPrev}>Prev</div>
            <div className="btn">/</div>
            <div className="next btn" onClick={getNext}>Next</div>
          </div>
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default SoundSubPage;

const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
  background: transparent;
  img {
    width: 100%;
    height: auto;
  }
  .close {
    position: fixed;
    top: 80px;
    right: 30px;
    div {
      width: 30px;
      height: 3px;
      background: white;
    }
    .top {
      transform: rotate(-45deg) translate(-1px, 0px);
    }
    .bottom {
      /* margin-top: 9px; */
      transform: rotate(45deg) translate(-2px,-1px);
    }
  }
  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .footer-bar {
    display: flex;
    position: absolute;
    bottom: 80px;
    left: 30px;
    right: 30px;
    color: white;
    font-family: Rubik;
    align-items: center;
    .nav {
      margin-left: auto;
      display: flex;

    }
  }
  .btn {
    cursor: pointer;
    padding: 10px 15px;
    user-select: none;
  }
  .YTPlayer {
    width: 100vw;
    height: 100vh;
  }
`;
