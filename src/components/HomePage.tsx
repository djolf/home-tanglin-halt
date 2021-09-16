import { motion } from "framer-motion"
import { useHistory } from "react-router"
import styled from "styled-components"
import home from "../assets/images/Home.@2x.svg";
import arrow from "../assets/images/arrow.svg";
import Menu from "./menu/menu";

const HomePage = () => {
  const history = useHistory();
  return (
    <motion.div className="Homepage" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <GridContainer>
        <div className="m">
          <Menu />
        </div>
        <div className="h">
          <img src={home} alt="" />
        </div>
        <div className="t">
          <div className="tanglin">TANGLIN</div>
          <div className="halt">HALT</div>
        </div>
        <div className="a" onClick={() => history.push('/writeup')}>
          <motion.img animate={{x: [0, -15, 0, 15, 0]}} transition={{type: "tween", ease: "linear", repeat: Infinity, repeatType: "loop"}} src={arrow} alt="" />
        </div>
        <div className="l">
          <p>An initiative by Lincoln Lim</p>
        </div>
        {/* <button onClick={()=> history.push('/mv')}>next</button> */}
      </GridContainer>
    </motion.div>
  )
}

export default HomePage

const GridContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  display: grid;
  grid-template: 
    "m m m m m m" 150px
    ". . . . . ." 1fr
    ". . . . . ." 1fr
    "h h h h . ." 1fr
    ". . . t t a" 1fr
    ". . . . l l" 1fr
    ". . . . . ." 1fr
    ". . . . . ." 1fr
    /1fr 1fr 1fr 1fr 1fr 1fr
  ;

  img {
    max-width: 100%;
    height: auto;
  }

  .h {
    grid-area: h;
    justify-self: center;
    align-self: center;
  }

  .t {
    grid-area: t;
    color: white;
    font-family: Rubik;
    font-weight: 500;
    font-size: 3rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .tanglin {
      margin-left: 15%;
    }

    .halt {
      margin-left: 50%;
    }
  }

  .a {
    grid-area: a;
    justify-self: end;
    align-self: center;
    cursor: pointer;
  }

  .l {
    grid-area: l;
    font-size: 1.5rem;
    font-family: Rubik;
    color: white;
    justify-self: center
  }

  .m {
    grid-area: m;
  }
`