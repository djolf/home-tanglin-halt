import styled from "styled-components";
import { StrokedText } from "../StoriesPage";
import hero from "../../assets/images/art/hero.png";
import c1 from "../../assets/images/art/c1.png";
import c2 from "../../assets/images/art/c2.png";
import c3 from "../../assets/images/art/c3.png";
import c4 from "../../assets/images/art/c4.png";
import splash from "../../assets/images/art/splash.png";
import splash2 from "../../assets/images/art/splash2.png";
import last from "../../assets/images/art/last.png";
import StyledCarousel from "./Carousel";

const ArtPage = () => {
  return (
    <Wrapper>
      <Hero className="mw-1200" img={hero}>
        <div className="img-container">
        </div>

        <div className="text-section">
          <div className="orange">
            <div className="title">
              <StrokedText
                spacing="3px"
                color="#fff7c5"
                strokeWidth={1}
                fontSize="6rem"
                lineHeight="1"
              >
                art
              </StrokedText>
              <StrokedText
                className="indent"
                spacing="3px"
                color="#fff7c5"
                strokeWidth={1}
                fontSize="6rem"
                lineHeight="1"
              >
                mirzi
              </StrokedText>
            </div>
            <div className="question">So tell me&mdash;who are you?</div>
            <div className="answer">
              Hi! I’m Mirzi (
              <a href="https://www.instagram.com/art.mirzi/">@art.mirzi</a>), and
              I’ve been a barber for just over 8 years, currently at my shop,&nbsp;
              <a href="https://www.facebook.com/gosmackbarbers/">
                <b>GOSMACK Barbershop & Supplies</b>
              </a>
              (
              <a href="https://www.instagram.com/gosmackbarbers/">
                @gosmackbarbers
              </a>
              )—come on down for a cut, anytime! Before that, I used to be an
              aerospace engineer with Singapore Airlines.
            </div>
          </div>
        </div>
      </Hero>
      <div className="carousel-section mw-1200 d-none d-lg-flex">
        <StyledCarousel>
          <img src={c1} alt="" />
          <img src={c2} alt="" />
        </StyledCarousel>
        <div className="text-section">
          <div className="qna">
            <div className="question">
              Aerospace to barbering—that’s a huge change! Why did you decide to
              switch professions?
            </div>
            <div className="answer">
              For me, the aerospace industry was a very stressful place to
              be—especially after doing it for almost 18 years. So now, you can
              probably guess my age huh? (<i>laughs</i>) I wanted something
              different, more relaxing that I didn’t have to be stressed by—so I
              thought, why not!
            </div>
            <div className="answer">
              I’ve learnt the fundamentals of cutting hair, and I’ve been
              cutting hair for my friends and family since I was 17. Even in
              Singapore Airlines, the guys will say “Eh Mirzi, cut our hair!”,
              so lunch time became practice time for me. (<i>laughs</i>) So,
              since then, I’ve spent time honing my skills at great spots like
              The Golden Rule at Race Course Road, and now at my own shop—and
              I’m loving every moment of it man.
            </div>
          </div>
          <div className="qna">
            <div className="question">
              Often times, you get to know your clients really well, and they
              become your regulars. What do you think makes the relationship
              between a person and their barber so special? And, if you had to
              move, how do you think your regulars would react? Would they
              follow you, or forget about you?
            </div>
            <div className="answer">
              It’s funny man, when you’re a barber and your client walks through
              your door, you know instantly whether he’s happy or sad, if he’s
              got something on his mind. If they give a long sigh when they sit
              on your chair, ah! You know what’s up.
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-section-mobile mw-1200 d-lg-none">
        <StyledCarousel>
          <img src={c1} alt="" />
          <img src={c2} alt="" />
        </StyledCarousel>
        <div className="text-section">
          <div className="qna">
            <div className="question">
              Aerospace to barbering—that’s a huge change! Why did you decide to
              switch professions?
            </div>
            <div className="answer">
              For me, the aerospace industry was a very stressful place to
              be—especially after doing it for almost 18 years. So now, you can
              probably guess my age huh? (<i>laughs</i>) I wanted something
              different, more relaxing that I didn’t have to be stressed by—so I
              thought, why not!
            </div>
            <div className="answer">
              I’ve learnt the fundamentals of cutting hair, and I’ve been
              cutting hair for my friends and family since I was 17. Even in
              Singapore Airlines, the guys will say “Eh Mirzi, cut our hair!”,
              so lunch time became practice time for me. (<i>laughs</i>) So,
              since then, I’ve spent time honing my skills at great spots like
              The Golden Rule at Race Course Road, and now at my own shop—and
              I’m loving every moment of it man.
            </div>
          </div>
          <div className="qna">
            <div className="question">
              Often times, you get to know your clients really well, and they
              become your regulars. What do you think makes the relationship
              between a person and their barber so special? And, if you had to
              move, how do you think your regulars would react? Would they
              follow you, or forget about you?
            </div>
            <div className="answer">
              It’s funny man, when you’re a barber and your client walks through
              your door, you know instantly whether he’s happy or sad, if he’s
              got something on his mind. If they give a long sigh when they sit
              on your chair, ah! You know what’s up.
            </div>
          </div>
        </div>
      </div>
      <div className="mw-1200">
        <div className="answer">
          So, to me, I feel a sense of trust and privilege, to try and change
          the course of someone’s day in the time I spend with them—to listen
          and offer advice. That’s what makes the relationship so special—a
          regular routine for people to share and open up to a listening ear, to
          a friend. And that, to me, is what makes it so special.
        </div>
        <div className="answer">
          If I had to move, I’m pretty sure they would follow me—in fact, they
          have! One customer has followed me since day one to over five
          different places, regardless to the changing prices!
        </div>
      </div>
      <div className="splash">
        <img src={splash} alt="art mirzi" />
      </div>
      <div className="qna mw-1200">
        <div className="question">
          It’s your first time in Tanglin Halt—what do you feel looking at this
          stretch of hairdressers and barbers, over 45 years in the making, and
          knowing it’s all going away soon enough? How would it feel if it was
          your shop going through that redevelopment?
        </div>
        <div className="answer ">
          Of course I’d feel extremely sad bro... these folks have been here for
          so long, growing up here, building their community here through all
          the changes, seeing trees grow taller—it’s all these little,
          irreplaceable things that makes a place special.
        </div>
        <div className="answer">
          Like, when got here and got out of the car, I saw this old-school,
          great looking Nasi Lemak place and I had to have it—you just don’t
          find places like these anymore man. If my shop was here, I don’t know
          how I’d feel about the redevelopment... it’d be like you’re taking my
          home away. I have no idea how these guys will adapt to the change.
        </div>
      </div>
      <div className="carousel-section-2 mw-1200 d-none d-lg-flex">
        <div className="qna">
          <div className="question">
            Do you think there’s still a place for old, neighbourhood
            hairdressers like these? How do you as a “modern barber” compare
            your services to the ones that these establishments provide, and do
            you see them as competition or complimentary?
          </div>
          <div className="answer">
            Yes, of course man. For me, I’ll always remember my roots, all the
            pak cik/malay babershops—they deserve our respect, because without
            them, there wouldn’t be a barber culture. And they’ll always have
            their place in our estates, there’s still demand for their
            services—in fact, I’m sure many youngsters would be attracted to the
            vibe of these old hairdressers.
          </div>
          <div className="answer">
            I feel like it all works together, because I still want these old
            school barbers and hairdressers to be around—it just adds to the
            variety and uniqueness of barbering culture here. And it’s always
            been like that—just look at this place! 3 salons, all in a row. I
            love it like that because it all works as an ecosystem—a way for
            both customers and barbers to win with choice, quality, and
            availability.
          </div>
        </div>
        <StyledCarousel>
          <img src={c3} alt="" />
          <img src={c4} alt="" />
        </StyledCarousel>
      </div>
      <div className="carousel-section-2-mobile mw-1200 d-lg-none">
        <StyledCarousel>
          <img src={c3} alt="" />
          <img src={c4} alt="" />
        </StyledCarousel>
        <div className="qna">
          <div className="question">
            Do you think there’s still a place for old, neighbourhood
            hairdressers like these? How do you as a “modern barber” compare
            your services to the ones that these establishments provide, and do
            you see them as competition or complimentary?
          </div>
          <div className="answer">
            Yes, of course man. For me, I’ll always remember my roots, all the
            pak cik/malay babershops—they deserve our respect, because without
            them, there wouldn’t be a barber culture. And they’ll always have
            their place in our estates, there’s still demand for their
            services—in fact, I’m sure many youngsters would be attracted to the
            vibe of these old hairdressers.
          </div>
          <div className="answer">
            I feel like it all works together, because I still want these old
            school barbers and hairdressers to be around—it just adds to the
            variety and uniqueness of barbering culture here. And it’s always
            been like that—just look at this place! 3 salons, all in a row. I
            love it like that because it all works as an ecosystem—a way for
            both customers and barbers to win with choice, quality, and
            availability.
          </div>
        </div>
      </div>
      <div className="splash2 mw-1200">
        <img src={splash2} alt="" />
      </div>
      <div className="last mw-1200 d-none d-lg-flex">
        <img src={last} alt="" />
        <div className="qna">
          <div className="question">
            What do you think the future of barber culture in Singapore looks
            like? Are you optimistic or pessimistic?
          </div>
          <div className="answer">
            I think more and more barbershops will show up, and we’ll just keep
            growing as a community! I believe in this generation and their
            appreciation for quality craft in pushing us forward, so I think
            more and more inspired people will open their own places—even during
            this pandemic! So yeah man, I’m super optimistic!
          </div>
          <div className="question">
            How do you want to add to this tapestry of barber culture in
            Singapore? What mark do you want to leave—and how do you think you
            can achieve that over time?
          </div>
          <div className="answer">
            Wow, I’ve never thought about that...I guess, at the end of it, I
            just want to show people that barbering is gold—you can earn your
            living, enjoy meeting and talking to people, and refine your craft
            all at once. So, follow your passion—because whatever you do, that’s
            what really matters.
          </div>
          <div className="question">
            Lastly, in 50 years’ time, when these shops are likely long gone,
            what would you tell kids if they ask “Hey, what was this Tanglin
            Halt place like?”
          </div>
          <div className="answer">
            Tanglin Halt is a modern <i>kampung</i>—yes it’s an HDB, but it
            still has that sense of community, a true <i>kampung</i> vibe. So,
            if you wanted the best traditional nasi lemak, you’d go to Tanglin
            Halt. If you wanted the best old school salon experience, you’d go
            to Tanglin Halt. Because I think you’ll simply never be able to find
            this vibe and feeling ever again, once it’s gone.
          </div>
        </div>
      </div>
      <div className="last-mobile mw-1200 d-lg-none">
        <img src={last} alt="" />
        <div className="qna">
          <div className="question">
            What do you think the future of barber culture in Singapore looks
            like? Are you optimistic or pessimistic?
          </div>
          <div className="answer">
            I think more and more barbershops will show up, and we’ll just keep
            growing as a community! I believe in this generation and their
            appreciation for quality craft in pushing us forward, so I think
            more and more inspired people will open their own places—even during
            this pandemic! So yeah man, I’m super optimistic!
          </div>
        </div>
      </div>
      <div className="qna d-lg-none">
        <div className="question">
          How do you want to add to this tapestry of barber culture in
          Singapore? What mark do you want to leave—and how do you think you
          can achieve that over time?
        </div>
        <div className="answer">
          Wow, I’ve never thought about that...I guess, at the end of it, I
          just want to show people that barbering is gold—you can earn your
          living, enjoy meeting and talking to people, and refine your craft
          all at once. So, follow your passion—because whatever you do, that’s
          what really matters.
        </div>
        <div className="question">
          Lastly, in 50 years’ time, when these shops are likely long gone,
          what would you tell kids if they ask “Hey, what was this Tanglin
          Halt place like?”
        </div>
        <div className="answer">
          Tanglin Halt is a modern <i>kampung</i>—yes it’s an HDB, but it
          still has that sense of community, a true <i>kampung</i> vibe. So,
          if you wanted the best traditional nasi lemak, you’d go to Tanglin
          Halt. If you wanted the best old school salon experience, you’d go
          to Tanglin Halt. Because I think you’ll simply never be able to find
          this vibe and feeling ever again, once it’s gone.
        </div>
      </div>
    </Wrapper>
  );
};

export default ArtPage;

const Wrapper = styled.div`
  background: rgba(203, 221, 167, 0.5);
  padding: 30px 30px 60px;

  .mw-1200 {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .question {
    color: #6b4628;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .answer {
    color: #6b4628;
    margin-bottom: 15px;
  }

  .carousel-section-mobile {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    .ant-carousel {
      width: 100%;
    }
    .text-section {
      margin-top: 30px;
      width: 100%;
      display: flex;
      flex-direction: column;
      .qna:nth-child(2) {
        margin-top: auto;
      }
    }
  }
  .carousel-section-2-mobile {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 30px;
    .qna {
      width: 100%;
    }
    .ant-carousel {
      width: 100%;
      margin-bottom: 30px;
    }
  }
  .splash {
    margin: 30px -120px;
  }
  .last-mobile {
    margin-top: 30px;
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;
    flex-wrap: wrap;
    img {
      width: 100%;
      height: auto;
      margin-bottom: 30px;
    }
    .qna {
      width: 100%;
      margin-left: auto;
    }
    @media screen and (min-width: 576px) {
      img {
        width: 50%;
      }
      .qna {
        width: 45%;
      }
    }
  }
  @media screen and (min-width: 992px) {
    background: rgba(203, 221, 167, 0.5);
    padding: 60px 120px 120px;
  
    .mw-1200 {
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
    }
  
    .question {
      color: #6b4628;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .answer {
      color: #6b4628;
      margin-bottom: 15px;
    }
  
    .carousel-section {
      display: flex;
      align-items: stretch;
      margin-bottom: 30px;
      .ant-carousel {
        width: 45%;
      }
      .text-section {
        width: 40%;
        margin-left: 60px;
        display: flex;
        flex-direction: column;
        .qna:nth-child(2) {
          margin-top: auto;
        }
      }
    }
    .carousel-section-2 {
      display: flex;
      margin-top: 30px;
      margin-bottom: 30px;
      .qna {
        width: 40%;
      }
      .ant-carousel {
        width: 55%;
        margin-left: auto;
      }
    }
    .splash {
      margin: 60px -120px;
      width: 100vw;
      img {
        width: 100%;
      }
    }
    .last {
      margin-top: 60px;
      display: flex;
      img {
        width: 50%;
      }
      .qna {
        width: 45%;
        margin-left: auto;
      }
    }
  }
`;

type HeroProps = {
  img?: string;
}

const Hero = styled.div<HeroProps>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr 3fr 3fr;
  width: 100%;
  margin-bottom: 30px;

  .img-container {
    background-image: url(${props => props.img});
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 62.56%;
    min-width: 300px;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    grid-column: 1 / span 6;
    grid-row: 1 / span 2;
  }
  .text-section {
    grid-column: 3 / span 6;
    grid-row: 2 / span 2;
    align-self: center;
    justify-self: start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .indent {
      margin-left: 20%;
      margin-bottom: 30px;
    }
  }
  .orange {
    grid-column: 3 / span 5;
    grid-row: 2 / span 2;
    background: #ffa963;
    padding: 30px;
    display: flex;
    flex-direction: column;
    .title {
      margin-top: -25%;
    }
    .question {
      margin-top: auto;
      color: #ffffff;
    }
    .answer {
      color: #ffffff;
    }
  }
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 0.5fr 1fr 1fr;
    width: 100%;
    margin-bottom: 60px;
  
    .img-container {
      max-width: 100%;
      grid-column: 1 / span 3;
      grid-row: 1 / span 4;
    }
    .text-section {
      grid-column: 3 / span 2;
      grid-row: 3 / span 2;
      align-self: center;
      justify-self: start;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0 30px;
  
      .indent {
        margin-left: 100px;
        margin-bottom: 30px;
      }
    }
    .orange {
      grid-column: 3 / span 2;
      grid-row: 2 / span 2;
      background: #ffa963;
      padding: 30px;
      display: flex;
      flex-direction: column;
      .question {
        margin-top: auto;
        color: #ffffff;
      }
      .answer {
        color: #ffffff;
      }
    }    
  }
`;
