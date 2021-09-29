import styled from "styled-components";

interface CircleProps {
  size: number
  src: string
  className?: string
}

const CircleImg = (props: CircleProps) => {
  const {size, src, className} = props;
  return (
    <Wrapper className={className}>
      <Circle size={size} src={src} />
    </Wrapper>
  )
}

export default CircleImg;

const Wrapper = styled.div`
  position: relative;
`

const Circle = styled.div<CircleProps>`
  cursor: pointer;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
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
    animation: scale .5s linear infinite;
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
`