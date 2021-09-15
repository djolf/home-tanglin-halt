import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

type MenuProps = {
  showLogo?: boolean;
  color?: string;
};

const Menu = (props: MenuProps) => {
  const { showLogo, color } = props;
  const [show, setShow] = useState(false);

  const items = [
    {
      name: "Portraits",
    },
    {
      name: "Sound Gallery",
    },
    {
      name: "Stories",
    },
  ];

  return (
    <Menubar color={color}>
      {showLogo && (
        <div className="logo-container">
          <div className="home">home.</div>
          <div className="th">TANGLIN HALT</div>
        </div>
      )}
      <ul className="menu-items">
        <AnimatePresence initial={false}>
          {show &&
            items.map((item, i) => (
              <motion.li
                variants={{
                  hidden: (i) => ({
                    opacity: 0,
                    x: "100%",
                    transition: {
                      delay: i * 0.05,
                    }
                  }),
                  visible: (i) => ({
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 0.15/(i+1),
                    }
                  })
                }}
                key={i}
                initial="hidden"
                animate="visible"
                exit="hidden"
                custom={i}
                whileHover={{
                  scale: 1.1,
                }}
              >
                {item.name}
              </motion.li>
            ))}
        </AnimatePresence>
      </ul>
      <motion.div
        className={`menu-icon${show ? ' active' : ''}`}
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

  .logo-container {
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
    }
  }

  .menu-icon {
    user-select: none;
    margin-left: 30px;
    margin-right: 15px;
    cursor: pointer;
    z-index: 2;
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
      transition: all linear .15s;
      transform-origin: center;
    }
    .bottom {
      width: 20px;
      height: 3px;
      background: ${(props) => (props.color ? props.color : "white")};
      margin-top: 3px;
      margin-left: 10px;
      transition: all linear .15s;
      transform-origin: center;
    }
    &.active {
      .top {
        transform: rotate(-45deg) translate(-1px, 0px);  
        margin: 0;
      }
      .middle {
        display: none;
      }
      .bottom {
        width: 30px;
        transform: rotate(45deg) translate(-1px, -1px);
        margin: 0;
      }
    }
  }

  .menu-items {
    display: flex;
    list-style: none;
    color: ${(props) => (props.color ? props.color : "white")};
    margin-left: auto;
    font-family: Rubik;
    font-weight: 500;
    font-size: 20px;
    z-index: 1;
    li {
      margin: 0 15px;
      cursor: pointer;
    }
  }
`;
