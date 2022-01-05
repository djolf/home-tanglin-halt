import { motion } from "framer-motion";
import styled from "styled-components";
import { Collapse } from "antd";
import lydiaHead from "../assets/images/lydia/head.png";
import artHead from "../assets/images/art/head.png";
import natHead from "../assets/images/nat/head.png";
import ashwinHead from "../assets/images/ashwin/head.png";
import chanHead from "../assets/images/chan/head.png";
import { StrokedText } from "./StoriesPage";
import { useEffect, useState } from "react";
import Menu from "./menu/menu";
import LydiaPage from "./portraits/lydia";
import ArtPage from "./portraits/art";
import AshwinPage from "./portraits/ashwin";
import NatPage from "./portraits/nat";
import ChanPage from "./portraits/chan";
import dataStore from "../store";
import { useMediaQuery } from "react-responsive";

const Portraits = [
  {
    id: 1,
    name: "Lydia Yang",
    title: "Graphic Designer/Illustrator",
    img: lydiaHead,
    page: <LydiaPage />
  },
  {
    id: 2,
    name: "Art Mirzi",
    title: "Barber",
    img: artHead,
    page: <ArtPage />
  },
  {
    id: 3,
    name: "Nathaniel & Natasha",
    title: "Plant Hobbyists",
    img: natHead,
    page: <NatPage />
  },
  {
    id: 4,
    name: "Ashwin Menon",
    title: "Musician/Producer",
    img: ashwinHead,
    page: <AshwinPage />
  },
  {
    id: 5,
    name: "Chan Hao",
    title: "Architecture Photographer",
    img: chanHead,
    page: <ChanPage />
  },
]

const PortraitsSubPage = () => {
  const { Panel } = Collapse;
  const [active, setActive] = useState(0);
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` })

  const scrollTo = (id: any) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  }

  const renderHeader = (
    name: string,
    title: string,
    img: string,
    i: number
  ) => (
    <Header
      img={img}
      onClick={() => {
        active === i ? setActive(0) : setActive(i);
        scrollTo(`panel${i}`);
      }}
    >
      <StrokedText mobileFontSize="3rem" className="name">{name}</StrokedText>
      <div className="title">{title}</div>
    </Header>
  );

  const rightNav = () => (
    <div className="rightNav">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          className={`dot${i === active ? " active" : ""}`}
          onClick={() => {
            active === i ? setActive(0) : setActive(i);
            setTimeout(() => {
              scrollTo(`panel${i}`)
            }, 210);
          }}
        >
          <div className="tooltip">{Portraits[i - 1].name}</div>
        </div>
      ))}
    </div>
  );

  useEffect(() => {
    dataStore.setCurrentPage(6);
  }, [])

  return (
    <Wrapper>
      <Collapse activeKey={active} accordion bordered={false}>
        {Portraits.map(item => (
          <Panel
            id={`panel${item.id}`}
            showArrow={false}
            header={renderHeader(
              item.name,
              item.title,
              item.img,
              item.id
            )}
            key={item.id}
          >
            {item.page}
          </Panel>
        ))}
      </Collapse>
      <div className="menu">
        <Menu showLogo />
      </div>
      {rightNav()}
    </Wrapper>
  );
};

export default PortraitsSubPage;

const Wrapper = styled(motion.div)`
  .ant-collapse-borderless > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box {
    padding: 0;
  }
  .ant-collapse-header {
    padding: 0 !important;
  }
  .ant-collapse-borderless > .ant-collapse-item {
    border: 0;
  }
  .rightNav {
    position: fixed;
    right: 2%;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    padding: 15px 10px;
    flex-direction: column;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    .dot {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      margin: 15px 0;
      cursor: pointer;
      position: relative;

      &.active {
        background: white;
      }
      .tooltip {
        display: none;
        background: rgba(0,0,0,0.3);
        position: absolute;
        right: 200%;
        color: white;
        white-space: nowrap;
        top: -15%;
        padding: 0 10px;
      }
      &:hover .tooltip {
        display: block;
      }
    }
    @media screen and (min-width: 992px) {
      position: fixed;
      right: 2%;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.3);
      display: flex;
      padding: 15px 10px;
      flex-direction: column;
      border-top-left-radius: 50px;
      border-top-right-radius: 50px;
      border-bottom-left-radius: 50px;
      border-bottom-right-radius: 50px;
      .dot {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        margin: 15px 0;
        cursor: pointer;
        position: relative;

        &.active {
          background: white;
        }
        .tooltip {
          display: none;
          background: rgba(0,0,0,0.3);
          position: absolute;
          right: 200%;
          color: white;
          white-space: nowrap;
          top: -15%;
          padding: 0 10px;
        }
        &:hover .tooltip {
          display: block;
        }
      }
    }
  }
  .menu {
    position: absolute;
    top: 20px;
    width: 100%;
    max-width: 1200px;
    left: 50%;
    transform: translateX(-50%);
    @media screen and (min-width: 992px) {
      top: 50px;
    }
  }
`;

const Header = styled.div<{ img: string }>`
  background: url(${(props) => (props.img ? props.img : "")});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background: url(${(props) => (props.img ? props.img : "")})
      rgba(0, 0, 0, 0.5);
    background-blend-mode: multiply;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    .name,
    .title {
      display: block;
      text-align: center;
    }
  }

  .name,
  .title {
    display: none;
  }

  .name {
    text-transform: lowercase;
  }
`;
