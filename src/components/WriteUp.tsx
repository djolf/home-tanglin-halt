import { motion } from "framer-motion"
import styled from "styled-components";
import Menu from "./menu/menu";
import arrow from "../assets/images/arrow.svg";

const WriteUp = () => {
  return (
    <motion.div className="Writeup">
      <GridContainer>
        <div className="menu">
          <Menu showLogo />
        </div>
        <div className="main">
          <div className="text-container">
            <div className="heading">
              <span className="line1">THIS IS WHERE</span>
              <span className="line2">HEADER SITS</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
          <div className="scroll">
            <span>Scroll</span>
            <div className="arrow">
              <motion.img animate={{x: [0, -15, 0, 15, 0]}} transition={{type: "tween", ease: "linear", repeat: Infinity, repeatType: "loop"}} src={arrow} alt="" />
            </div>
          </div>
      </GridContainer>
    </motion.div>
  )
}

export default WriteUp;

const GridContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  display: grid;
  grid-template: 
    "menu" 150px
    "main" minmax(400px, auto)
    "s" minmax(50px, 250px)
    /1fr
  ;

  img {
    max-width: 100%;
    height: auto;
  }

  .menu {
    grid-area: menu;
  }

  .main {
    grid-area: main;
    text-align: center;
    color: white;
    font-family: Rubik;
    font-weight: 500;
    align-self: center;

    .text-container {
      display: flex;
      flex-direction: column;
      width: 100%:
      align-items: center;
      justify-content: center;
    }
    
    .heading {
      font-size: 3.5rem;
      display: flex;
      flex-direction: column;
      width: 600px;
      margin: 0 auto;
      .line1 {
        text-align: left;
      }
      .line2 {
        text-align: right;
      }
    }
    p {
      max-width: 1000px;
      margin: 0 auto;
      font-size: 21px;
      margin-top: 2rem;
    }
  }

  .scroll {
    grid-area: s;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: white;
    font-family: Rubik;
    font-size: 20px;
    margin-right: 15px;
    margin-left: auto;
    span {
      margin-right: 1rem;
      padding-bottom: 5px;
    }
  }
`