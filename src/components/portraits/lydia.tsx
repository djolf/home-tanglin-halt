import styled from "styled-components";
import { StrokedText } from "../StoriesPage";
import lydiaHero from "../../assets/images/lydia/lydia-hero.png";
import c1 from "../../assets/images/lydia/carousel-1.png";
import splash from "../../assets/images/lydia/splash.png";
import g1 from "../../assets/images/lydia/grid-1.png";
import g2 from "../../assets/images/lydia/grid-2.png";
import fc1 from "../../assets/images/lydia/full-carousel-1.png";
import fc2 from "../../assets/images/lydia/full-carousel-2.png";
import StyledCarousel from "./Carousel";

const LydiaPage = () => {
  return (
    <Wrapper>
      <Hero className="mw-1200" img={lydiaHero}>
        <div className="img-container">
        </div>
        <div className="text-section">
          <StrokedText
            spacing="3px"
            color="#ffa963"
            strokeWidth={2}
            fontSize="6rem"
            lineHeight="1"
            mobileFontSize="3rem"
          >
            lydia
          </StrokedText>
          <StrokedText
            className="indent"
            spacing="3px"
            color="#ffa963"
            strokeWidth={2}
            fontSize="6rem"
            lineHeight="1"
            mobileFontSize="3rem"
          >
            yang
          </StrokedText>
        </div>
        <div className="greenback">
        </div>
        <div className="qna">
          <div className="question">So tell me&mdash;who are you?</div>
          <div className="answer">
            Hey, I’m Lydia (
            <a href="https://www.instagram.com/oakandbindi/">@oakandbindi</a>
            )! I’m an illustration and graphic designer, and one of the
            co-founders of creative studio&nbsp;
            <a href="https://www.tycstudios.com/">
              <b>Tell Your Children</b>
            </a>&nbsp;(
            <a href="https://www.instagram.com/tellyourchildren/">
              @tellyourchildren
            </a>).
          </div>
        </div>
      </Hero>
      <div className="carousel-section mw-1200">
        <img src={c1} alt="" />
        <div className="text-section">
          <div className="qna">
            <div className="question">
              How would you describe your design aesthetic and style?
            </div>
            <div className="answer">
              Positive & colourful! I enjoy incorporating bright, warm colours
              within my work that usually sees me creating fun and light-hearted
              characters, alongside my favourite thing to work on which are
              hand-drawn typefaces.
            </div>
          </div>
          <div className="qna">
            <div className="question">
              You’ve taken the tour, seen the estate, and somehow, we’re
              shooting you at just these two areas. What is it, aesthetically or
              intrinsically, that drew you to this part of Tanglin Halt?
            </div>
            <div className="answer">
              I was most drawn to its architecture—you hardly get to see designs
              like these anymore, especially in Simei where I grew up, let alone
              these small, domed gazebos and that central area which I’m sure
              held a lot of memories for the people who commune and interact
              there.
            </div>
          </div>
        </div>
      </div>
      <div className="splash">
        <img src={splash} alt="lydia yang" />
      </div>
      <div className="answer mw-1200">
        I also find myself very drawn to the SIT flats—from the exposed brick
        work to the unique breezeblocks - I recently found out that they were
        actually designed for tropical living in mind. With the large windows
        and high ceilings. It’s interesting too—as I’m now at the point in life
        where I’m looking for my own place, so getting to check out places like
        this is actually refreshing.
      </div>
      <br />
      <div className="answer mw-1200">
        It’s odd: I used to strongly dislike the look of the HDBs I came across
        when I was younger...they’ve just never appealed to me aesthetically.
        It’s quite the opposite now ironically, having grown up in them for the
        most part of my life and in some way growing up and growing old in and
        with these flats. Maybe it’s the charm of time and how we tend to take
        things for granted till they are gone.
      </div>
      <div className="grid-section mw-1200 d-none d-lg-flex">
        <div className="col1">
          <div className="qna g1">
            <div className="question">
              You’ve done mural work—how do you resolve the struggle when it comes
              to creating something uniquely yours while retaining the original
              aesthetic of your space?
            </div>
            <div className="answer">
              At times, as creatives, we tend to jump at any chance to leave our
              mark wherever we are able to, but to be able to give back to the
              community with respect to the design aesthetic of the space and the
              spirit of the residents would be much more fulfilling for me
              personally.
            </div>
          </div>
          <img className="g3" src={g2} alt="" />
        </div>
        <div className="col2">
          <img className="g2" src={g1} alt="" />
          <div className="qna g4">
            <div className="question">
              Open brief! If you were commissioned to do a mural on this wall to
              commemorate Tanglin Halt, what would your concept be? How would you
              sum it up in the limited time you’ve been here?
            </div>
            <div className="answer">
              I would reject it...(laughs) I think, knowing what I know about
              Tanglin Halt, I’d leave it untouched. I’d feel like my work would
              possibly be out of place and imposing in a neighbourhood like
              Tanglin Halt.
            </div>
          </div>
          <div className="qna g5">
            <div className="question">
              What does Singapore stand to lose when we lose places like these to
              progress? Do you think what we gain (more efficient spaces,
              modernity, technology) is worth it?
            </div>
            <div className="answer">
              A lot! History, culture, the iconic architecture, and the community
              itself. My heart goes out to the elderly that’ll have to be uprooted
              to somewhere they might not be familiar with, along with the new
              environments they’ll have to adjust to. The second question is a
              little too tough to answer—I guess time will tell.
            </div>
          </div>
        </div>
      </div>
      <div className="grid-section mw-1200 d-lg-none">
        <div className="qna g1">
          <div className="question">
            You’ve done mural work—how do you resolve the struggle when it comes
            to creating something uniquely yours while retaining the original
            aesthetic of your space?
          </div>
          <div className="answer">
            At times, as creatives, we tend to jump at any chance to leave our
            mark wherever we are able to, but to be able to give back to the
            community with respect to the design aesthetic of the space and the
            spirit of the residents would be much more fulfilling for me
            personally.
          </div>
        </div>
        <img className="g2" src={g1} alt="" />
        <img className="g3" src={g2} alt="" />
        <div className="qna g4">
          <div className="question">
            Open brief! If you were commissioned to do a mural on this wall to
            commemorate Tanglin Halt, what would your concept be? How would you
            sum it up in the limited time you’ve been here?
          </div>
          <div className="answer">
            I would reject it...(laughs) I think, knowing what I know about
            Tanglin Halt, I’d leave it untouched. I’d feel like my work would
            possibly be out of place and imposing in a neighbourhood like
            Tanglin Halt.
          </div>
        </div>
        <div className="qna g5">
          <div className="question">
            What does Singapore stand to lose when we lose places like these to
            progress? Do you think what we gain (more efficient spaces,
            modernity, technology) is worth it?
          </div>
          <div className="answer">
            A lot! History, culture, the iconic architecture, and the community
            itself. My heart goes out to the elderly that’ll have to be uprooted
            to somewhere they might not be familiar with, along with the new
            environments they’ll have to adjust to. The second question is a
            little too tough to answer—I guess time will tell.
          </div>
        </div>
      </div>
      <StyledCarousel className="full-carousel mw-1200">
        <img src={fc1} alt="" />
        <img src={fc2} alt="" />
      </StyledCarousel>
      <div className="question mw-1200">
        What about you? What’s the legacy that you want to leave behind, after
        the world has changed and design philosophies move forward and murals
        are painted over?
      </div>
      <div className="answer mw-1200">
        I’ve never really given thought to this specifically... but off the top
        of my head—I think the fact that I’m doing what I’m doing, being a
        creative and making a living from doing what I love with a great team,
        is honestly enough of a legacy for me.
      </div>
    </Wrapper>
  );
};

export default LydiaPage;

const Wrapper = styled.div`
  background: rgba(255, 247, 197, 0.5);
  padding: 30px 20px 60px;

  .mw-1200 {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .question {
    color: #386641;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .answer {
    color: #386641;
    /* margin-bottom: 30px; */
  }

  .carousel-section {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    img {
      width: 100%;
    }
    .text-section {
      width: 100%;
      display: flex;
      margin-top: 30px;
      flex-direction: column;
      .qna:nth-child(2) {
        margin-top: auto;
      }
    }
  }
  .splash {
    margin: 60px -120px;
  }

  .grid-section {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    width: 100%;
    & > * {
      margin-bottom: 30px;
    }
    .g1 {
      order: 2;
    }
    .g2 {
      order: 1;
    }
    .g3 {
      margin-left: auto;
      margin-right: auto;
      order: 3;
    }
    .g4 {
      order: 4;
    }
    .g5 {
      order: 5;
      grid-column: 2;
      grid-row: 4;
    }
    .qna {
      max-width: 100%;
    }
  }
  .full-carousel {
    margin-bottom: 30px;
  }
  @media screen and (min-width: 768px) {
    background: rgba(255, 247, 197, 0.5);
    padding: 60px 120px 120px;

    .mw-1200 {
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
    }

    .question {
      color: #386641;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .answer {
      color: #386641;
      /* margin-bottom: 30px; */
    }

    .carousel-section {
      display: flex;
      align-items: stretch;
      img {
        width: 40%;
      }
      .text-section {
        width: 50%;
        margin-left: 30px;
        display: flex;
        flex-direction: column;
        .qna:nth-child(2) {
          margin-top: auto;
        }
      }
    }
    .splash {
      margin: 60px -120px;
      width: 100vw;
      img {
        width: 100%;
      }
    }

    .grid-section {
      display: flex;
      margin-top: 50px;
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      .col1,.col2 {
        width: 48%;
        & > * {
          margin-bottom: 30px;
        }
      }
      .qna {
        max-width: 90%;
      }
    }
    .full-carousel {
      margin-bottom: 30px;
    }
  }
`;

type HeroProps = {
  img?: string;
}

const Hero = styled.div<HeroProps>`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: 100%;
  max-width: 100%;
  margin-bottom: 30px;
  
  .img-container {
    background-image: url(${props => props.img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    grid-column: 2 / span 9;
    grid-row: 1 / span 4;
  }
  .text-section {
    grid-column: 1 / span 6;
    grid-row: 2 / span 2;

    .indent {
      margin-left: 20%;
      margin-bottom: 30px;
    }

  }
  .greenback {
    background: #d9edb1;
    grid-column: 1 / span 8;
    grid-row: 4 / span 2;
  }
  .qna {
    padding: 30px;
    grid-column: 1 / span 8;
    grid-row: 4 / span 2;
  }
  // @media screen and (min-width: 768px) {
  //   display: grid;
  //   grid-template-columns: repeat(4, 1fr);
  //   grid-template-rows: repeat(3, 1fr);
  //   width: 100%;
  //   margin-bottom: 60px;

  //   .img-container {
  //     max-width: 100%;
  //     grid-column: 2 / span 3;
  //     grid-row: 1 / 3;
  //   }
  //   .text-section {
  //     grid-column: 1 / span 2;
  //     grid-row: 1;

  //     .indent {
  //       margin-left: 100px;
  //       margin-bottom: 30px;
  //     }
  //   }
  //   .greenback {
  //     background: #d9edb1;
  //     grid-column: 1 / span 3;
  //     grid-row: 2 / span 2;
  //   }
  //   .qna {
  //     padding: 30px;
  //     grid-column: 1 / span 3;
  //     grid-row: 2 / span 2;
  //   }
  // }
`;
