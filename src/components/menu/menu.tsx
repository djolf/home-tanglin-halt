import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import dataStore from "../../store";

type MenuProps = {
  showLogo?: boolean;
  color?: string;
  hideMenu?: boolean;
};

const Menu = (props: MenuProps) => {
  const { showLogo, color, hideMenu } = props;
  const [show, setShow] = useState(false);
  const history = useHistory();

  const items: {
    index: number;
    name: string;
    url: string;
    key:
      | "home"
      | "writeup"
      | "mv"
      | "portraits"
      | "sound"
      | "stories"
      | "thanks";
  }[] = [
    {
      name: "Write Up",
      url: "/writeup",
      key: "writeup",
      index: 1,
    },
    {
      name: "Music Video",
      url: "/music-video",
      key: "mv",
      index: 2,
    },
    {
      name: "Portraits",
      url: "/portraits",
      key: "portraits",
      index: 3,
    },
    {
      name: "Sound Capsule",
      url: "/sound-gallery",
      key: "sound",
      index: 4,
    },
    {
      name: "Stories",
      url: "/stories",
      key: "stories",
      index: 5,
    },
    {
      name: "Credits",
      url: "/thanks",
      key: "thanks",
      index: 6,
    },
  ];

  return (
    <Menubar color={color} style={{display: hideMenu ? 'none':'flex'}}>
      {showLogo && (
        <div
          className="logo-container"
          onClick={() => {
            dataStore.setCurrentPage(0);
            history.push("/");
          }}
        >
          <div className="home">home.</div>
          <div className="th">
            <span>
              TANGLIN
            </span>
            <span className="second">
              &nbsp;HALT
            </span>
          </div>
        </div>
      )}
      <AnimatePresence initial={false}>
        {show && (
          <motion.ul
            variants={{
              hidden: {
                x: "100vw",
                opacity: 0,
                transition: {
                  delay: 0.25,
                  ease: "linear",
                }
              },
              visible: {
                x: "0",
                opacity: 1,
              }
            }}
            className="menu-items"
            transition={{ duration: 0.05, type: "linear" }}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {items.map((item, i) => (
              <motion.li
                variants={{
                  hidden: (i) => ({
                    opacity: 0,
                    x: "100%",
                    transition: {
                      delay: 0.15 + i * 0.05,
                    },
                  }),
                  visible: (i) => ({
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 0.15 + 0.15 / (i + 1),
                    },
                  }),
                }}
                key={i}
                initial="hidden"
                animate="visible"
                exit="hidden"
                custom={i}
                whileHover={{
                  scale: 1.1,
                }}
                onClick={() => {
                  history.push(item.url);
                }}
              >
                {item.name}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      <motion.div
        className={`menu-icon${show ? " active" : ""}`}
        onHoverStart={() => setShow(true)}
        onClick={() => setShow(!show)}
      >
        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom"></div>
      </motion.div>
    </Menubar>
  );
};

export default Menu;

const Menubar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  z-index: 3;

  .logo-container {
    z-index: 3;
    cursor: pointer;
    margin-left: 15px;
    margin-right: auto;
    display: flex;
    align-items: stretch;
    color: ${(props) => (props.color ? props.color : "white")};
    font-size: 25px;
    line-height: 25px;
    .home {
      font-family: hagona;
      padding-top: 3px;
    }
    .th {
      font-family: Rubik;
      font-weight: 500;
      margin-left: 5px;
      display: flex;
      flex-wrap: wrap;
      .second {
        margin-left: auto;
        margin-right: 10px;
      }
    }
  }

  .menu-icon {
    user-select: none;
    margin-left: 30px;
    margin-right: 15px;
    cursor: pointer;
    z-index: 3;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .top,
    .middle {
      width: 30px;
      height: 3px;
      background: ${(props) => (props.color ? props.color : "white")};
      margin-top: 3px;
      transition: all linear 0.15s;
      transform-origin: center;
    }
    .top {
      margin-top: 0;
    }
    .bottom {
      width: 20px;
      height: 3px;
      background: ${(props) => (props.color ? props.color : "white")};
      margin-top: 3px;
      margin-left: 10px;
      transition: all linear 0.15s;
      transform-origin: center;
    }
    &.active {
      .top {
        transform: rotate(-45deg) translate(-1px, 0px);
        margin: 0;
        background: ${(props) => (props.color ? props.color : "black")};
      }
      .middle {
        display: none;
      }
      .bottom {
        width: 30px;
        transform: rotate(45deg) translate(-2px, -1px);
        margin: 0;
        background: ${(props) => (props.color ? props.color : "black")};
      }
    }
    @media screen and (min-width: 992px) {
      &.active {
        .top {
          background: ${(props) => (props.color ? props.color : "white")};
        }
        .bottom {
          background: ${(props) => (props.color ? props.color : "white")};
        }
      }
    }
  }

  .menu-items {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    display: flex;
    list-style: none;
    color: ${(props) => (props.color ? props.color : "black")};
    font-family: Rubik;
    font-weight: 500;
    font-size: 30px;
    z-index: 3;
    margin: 0;
    padding: 0;
    li {
      margin: 0 15px;
      cursor: pointer;
    }
    @media screen and (min-width: 992px) {
      font-size: 20px;
      margin-left: auto;
      background: none;
      flex-direction: row;
      justify-content: flex-start;
      position: unset;
      color: ${(props) => (props.color ? props.color : "white")};
    }
  }
`;
