import { useState } from "react";
import styled from "styled-components";
import icon from "../assets/images/links.jpg";
import Draggable from "react-draggable";

const MusicLink = () => {
  const [open, setOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const eventControl = (event: { type: any }, info: any) => {
    if (event.type === "mousemove" || event.type === "touchmove") {
      setIsDragging(true);
    }

    if (event.type === "mouseup" || event.type === "touchend") {
      setTimeout(() => {
        setIsDragging(false);
      }, 100);
    }
  };
  return (
    <Draggable
      bounds={open ? {top: 0, left: 0, right: 0, bottom: 0} : "parent"}
      onDrag={eventControl}
      onStop={eventControl}
    >
      <Wrapper
        icon={icon}
        open={open}
        onClick={() => !isDragging && setOpen(!open)}
        onTouchEndCapture={() => !isDragging && setOpen(!open)}
      >
        <div className="icon"></div>
        <div className="text">
          <a
            href="https://bit.ly/lincolnlim-home"
            target="_blank"
            rel="noreferrer"
            onClickCapture={e => e.stopPropagation()}
            onTouchEndCapture={e => {
              e.stopPropagation();
              window.open('https://bit.ly/lincolnlim-home', '_blank');
            }}
          >
            Listen to ‘home.’ by Lincoln Lim on all major streaming platforms
            now.
          </a>
        </div>
      </Wrapper>
    </Draggable>
  );
};

export default MusicLink;

type Props = {
  icon?: string;
  open?: boolean;
};

const Wrapper = styled.div<Props>`
  position: absolute;
  right: 5px;
  bottom: 100px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  padding: 5px;
  display: flex;
  align-items: center;
  height: 60px;
  max-width: 350px;
  ${(p) => (p.open ? "width: calc(100% - 20px);" : "width: 60px;")}
  transition: width 0.5s ease-in-out;
  user-select: none;
  .icon {
    background-image: url(${(p) => p.icon});
    background-size: cover;
    background-position: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .text {
    ${(p) => (p.open ? "display: block;" : "display: none;")}
    width: 75%;
    height: 100%;
    margin: 0 5px;
    overflow-x: hidden;
    white-space: nowrap;
    position: relative;

    a {
      position: absolute;
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: black;
      margin: 0;
      transform: translateX(100%);
      animation: scroll-left 5s linear infinite;
    }
  }
  @keyframes scroll-left {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-200%);
    }
  }
`;
