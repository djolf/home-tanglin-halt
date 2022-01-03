import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

interface CircleProps {
  size: number;
  src: string;
  className?: string;
  onClick?: any;
  layoutId?: string;
  title?: string
  hover?: boolean
  fontSize?: string;
}

const CircleImg = (props: CircleProps) => {
  const { size, src, className, onClick, layoutId, title, fontSize } = props;
  const [hover, setHover] = useState(false);
  return (
    <Wrapper
      className={className}
      onClick={onClick}
      layoutId={layoutId}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <AnimatePresence>
        {hover &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="title"
            style={{
              fontSize: fontSize
            }}
          >
            {title}
          </motion.div>
        }
      </AnimatePresence>
      <Circle size={size} src={src} hover={hover} />
    </Wrapper>
  );
};

export default CircleImg;

const Wrapper = styled(motion.div)`
  position: relative;
  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    color: white;
    z-index: 1;
    transform: translate(-50%, -50%);
    font-weight: bold;
    text-align: center;
    width: 88%;
    cursor: pointer;
  }
`;

const Circle = styled.div<CircleProps>`
  cursor: pointer;
  background: url(${(props) => props.src}) ${props => props.hover ? 'rgba(0, 0, 0, 0.5)' : ''};
  background-size: 200%;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: multiply;
  border-radius: 50%;
  width: 70vw;
  height: 70vw;
  /* box-shadow: 0 0 0 11px #fadbe9, 0 0 0 13px #e33f6f; */
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -15px;
    bottom: -15px;
    left: -15px;
    right: -15px;
    border-radius: 50%;
    /* z-index: -1; */
    border: 2px solid #e33f6f;
    animation: none;
  }
  &:hover::before {
    animation: pulse 1s linear infinite;
  }
  &:hover {
    animation: scale 0.5s linear infinite;
  }

  @keyframes scale {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(5%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1, 1);
      opacity: 1;
    }
    50% {
      transform: scale(1.5, 1.5);
      opacity: 0;
    }
    100% {
      transform: scale(1.5, 1.5);
      opacity: 0;
    }
  }
  @media screen and (min-width: 576px) {
    width: 19vw;
    height: 19vw;
  }
  @media screen and (min-width: 992px) {
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
  }
`;
