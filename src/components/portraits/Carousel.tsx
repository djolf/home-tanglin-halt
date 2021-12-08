import { Carousel } from "antd";
import { CarouselRef } from "antd/lib/carousel";
import { useRef } from "react";
import styled from "styled-components";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const StyledCarousel: React.FC<{className?: string}> = (props) => {
  const carousel = useRef<CarouselRef>(null);

  const next = () => carousel.current!.next();
  const prev = () => carousel.current!.prev();

  return (
    <Wrapper
      adaptiveHeight
      className={props.className}
      draggable
      arrows
      ref={carousel}
      prevArrow={<LeftOutlined color="white" onClick={prev} />}
      nextArrow={<RightOutlined onClick={next} />}
    >
      {props.children}
    </Wrapper>
  );
};

export default StyledCarousel;

const Wrapper = styled(Carousel)`
  .slick-prev, .slick-next {
    color: white;
    font-size: 2rem;
    z-index: 9;
    &:hover, &:focus {
      color: #ddd;
    }
  }
  .slick-prev {
    left: 15px;
  }
  .slick-next {
    right: 25px;
  }
`;
