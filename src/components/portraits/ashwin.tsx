import styled from "styled-components";
import { StrokedText } from "../StoriesPage";
import hero from "../../assets/images/ashwin/hero.png";
import img1 from "../../assets/images/ashwin/img1.png";
import img2 from "../../assets/images/ashwin/img2.png";
import img3 from "../../assets/images/ashwin/img3.png";
import splash from "../../assets/images/ashwin/splash.png";
import splash2 from "../../assets/images/ashwin/splash2.png";
import splash3 from "../../assets/images/ashwin/splash3.png";
import last from "../../assets/images/ashwin/last.png";
import last2 from "../../assets/images/ashwin/last2.png";
import StyledCarousel from "./Carousel";

const AshwinPage = () => {
  return (
    <Wrapper>
      <Hero className="mw-1200" img={hero}>
        <div className="blue"></div>
        <div className="qna">
          <div className="question">So tell me&mdash;who are you?</div>
          <div className="answer">
            My name is Ashwin Menon (
            <a href="https://www.instagram.com/shwin.here/">@shwin.here</a>), I’m
            a musician from Singapore but I’ve been living in the UK for the last
            6 years, working and performing with my band{" "}
            <a href="https://www.facebook.com/oyapaya/"><b>Oya Paya</b></a> (
            <a href="https://www.instagram.com/oyapaya/">@oyapaya</a>)—named after
            “Oya Peya Som”, our favourite Singaporean game! (check us out on
            Spotify!) I’m also working at{" "}
            <a href="https://themusicparlour.com.sg/"><b>The Music Parlour</b></a> (
            <a href="https://www.instagram.com/themusicparloursingapore/">
              @themusicparloursingapore
            </a>
            ).
          </div>
        </div>
        <div className="img-container"></div>
        <div className="text-section">
          <StrokedText
            spacing="3px"
            color="#bf2553"
            strokeWidth={2}
            fontSize="6rem"
            lineHeight="1"
          >
            ashwin
          </StrokedText>
          <StrokedText
            className="indent"
            spacing="3px"
            color="#bf2553"
            strokeWidth={2}
            fontSize="6rem"
            lineHeight="1"
          >
            menon
          </StrokedText>
        </div>
      </Hero>
      <div className="img-section mw-1200 d-none d-lg-flex">
        <div className="left">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>
        <div className="right">
          <div className="question">
            Take me back to the beginning—why did you start playing music, and
            what were some of your first memories falling in love with it?
          </div>
          <div className="answer">
            My mom was actually a professional musician, playing piano and
            singing in bars—just chasing the dream. Once she had a family, she
            stopped, but she cultivated this love of music in me, right from the
            time I heard Michael Jackson’s Thriller to the point where she
            bought me my first drum set.
          </div>
          <div className="answer">
            She also taught me the basics of playing, sparking off a passion
            that I’m glad I stuck to—yeah man, it’s really all down to my mom’s
            love and support that I fell in love with music. And the interesting
            thing is, if she didn’t settle down and stop performing
            professionally, we probably wouldn’t be this close and have the
            opportunities to share and explore music together. Funny how life
            works I guess.
          </div>
          <div className="question">
            What do you feel about Singapore’s music scene? And now, after
            living and working in the UK, what’s one thing you wish our scene
            would learn from one as developed as theirs?
          </div>
          <div className="answer">
            When I started back in 2004, it used to be anything goes—the
            underground scene was an inspiration, with the community being
            amazingly welcoming and open to new people and ideas. Now, there are
            definitely far more opportunities, but they don’t seem to extend to
            the underground scene—which I think is a shame, because their
            careful community building basically kickstarted our music scene,
            and allowed the first prominent local bands to rise up. That said, I
            am optimistic about the future of the scene here—I mean the fact
            that people are really listening local now is massive, so I think
            there’s definitely going to be a change in the right direction.
          </div>
          <div className="answer">
            As for question 2... I think it’d have to be not caring about what
            everyone else thinks and just doing what they feel like doing—no
            questions, no inhibitions, just allowing yourself to go with the
            flow. I hope we get less precious and efficient with our time, and
            more open to just letting inspiration take over.
          </div>
        </div>
      </div>
      <div className="mw-1200 d-lg-none">
        <img src={img1} className="mb-30" alt="" />
        <div className="question">
          Take me back to the beginning—why did you start playing music, and
          what were some of your first memories falling in love with it?
        </div>
        <div className="answer">
          My mom was actually a professional musician, playing piano and
          singing in bars—just chasing the dream. Once she had a family, she
          stopped, but she cultivated this love of music in me, right from the
          time I heard Michael Jackson’s Thriller to the point where she
          bought me my first drum set.
        </div>
        <img src={img2} className="mb-30" alt="" />
        <div className="answer">
          She also taught me the basics of playing, sparking off a passion
          that I’m glad I stuck to—yeah man, it’s really all down to my mom’s
          love and support that I fell in love with music. And the interesting
          thing is, if she didn’t settle down and stop performing
          professionally, we probably wouldn’t be this close and have the
          opportunities to share and explore music together. Funny how life
          works I guess.
        </div>
        <div className="question">
          What do you feel about Singapore’s music scene? And now, after
          living and working in the UK, what’s one thing you wish our scene
          would learn from one as developed as theirs?
        </div>
        <div className="answer">
          When I started back in 2004, it used to be anything goes—the
          underground scene was an inspiration, with the community being
          amazingly welcoming and open to new people and ideas. Now, there are
          definitely far more opportunities, but they don’t seem to extend to
          the underground scene—which I think is a shame, because their
          careful community building basically kickstarted our music scene,
          and allowed the first prominent local bands to rise up. That said, I
          am optimistic about the future of the scene here—I mean the fact
          that people are really listening local now is massive, so I think
          there’s definitely going to be a change in the right direction.
        </div>
        <div className="answer">
          As for question 2... I think it’d have to be not caring about what
          everyone else thinks and just doing what they feel like doing—no
          questions, no inhibitions, just allowing yourself to go with the
          flow. I hope we get less precious and efficient with our time, and
          more open to just letting inspiration take over.
        </div>
      </div>
      <div className="splash">
        <StyledCarousel>
          <img src={splash} alt="ashwin menon" />
        </StyledCarousel>
      </div>
      <div className="mw-1200 mt-20">
        <div className="question">
          When we talk about progress vs preservation, it has uncanny
          connections to the tension between “traditional” instruments and
          modern music production. How do you find a balance between the two?
          Will traditional instruments ever fade from use and, in the way of
          Tanglin Halt, become but a memory?
        </div>
        <div className="answer">
          I don’t think traditional instruments will ever fade from use. There’s
          an unspoken truth that you just can’t recreate the mistakes and feel
          of an actual performance, and I think that’s something that music
          software just can’t emulate right now—so I really think that the value
          of proficiency over traditional instruments will last forever.
        </div>
      </div>
      <div className="splash2 mw-1200">
        <img src={splash2} alt="" />
      </div>
      <div className="mw-1200 mt-20">
        <div className="answer">
          To be honest, as a producer I don’t really find that balance! (<i>laughs</i>)
          I lean very much towards traditional instruments, while using the
          digital component to make up for gear I can never afford. I guess I
          feel like progress should always serve to improve what is already
          there, not replace it.
        </div>
      </div>

      <div className="last mw-1200 mt-30">
        <div className="qna">
          <div className="question">
            As you know, Tanglin Halt was home to one of Singapore’s most
            successful bands from the 60s: The Quests! From great residencies at
            the Capitol Theatre, to a hit single that took the number 1 spot on
            the charts from The Beatles, they’ve certainly had quite a journey
            during their 10-year lifespan. If you were part of that band, how
            would you have wanted to use that time in the limelight?
          </div>
          <div className="answer">
            Wow...I mean, what they did was monumental. Not just saying “we can
            do it too”, but they reminded Singaporeans on how important it was
            to just be themselves, by really making waves just doing them!
          </div>
          <div className="answer">
            If I was in the band... I can’t even answer you man! I can’t even
            fathom that—like the world was a lot more fucked up then, without
            the mod cons and tools we have today, the fact that they had the
            courage and drive to accomplish what they did in just over a decade
            is just amazing. Just blood, sweat, and tears man. I think there’s
            simply no way a Singaporean artist today will ever be able to match
            the bar they set.
          </div>
        </div>
        <img src={img3} alt="" />
      </div>
      <div className="splash">
        <img src={splash3} alt="" />
      </div>

      <div className="last mw-1200">
        <div className="qna">
          <div className="question">
            Inside this estate, this amphitheater, there is an undeniable
            connection to the past through the importance of sound—that’s why
            this was built, the electricity-free amplifier! Why do you think
            music is so important to us across the ages? What’s an ingenious
            music-related thing you’d LOVE to create that will help creators of
            the future?
          </div>
          <div className="answer">
            It takes away from your mind for a bit, it’s addictively calming I
            would say—whatever era you belong to. From the sounds around us to
            the background tracks in shows, music is a key part of everyday
            life—and I think that was true even then.
          </div>
          <div className="answer">
            Hmm... I think an incredibly user-friendly tool that allows anyone
            to express or create what’s in their head, one that levels the
            playing field without requiring years of training to learn to
            operate.
          </div>
        </div>
        <img src={last} className="order-2" alt="" />
      </div>
      <div className="last2 mw-1200 d-none d-lg-flex">
        <img src={last2} alt="" />
        <div className="qna">
          <div className="question">
            What’s the legacy that you want to leave in Singapore? How would you
            want people to remember your music or you?
          </div>
          <div className="answer">
            While I was growing up, I was always told “you can’t make it in
            music”—which is precisely why I wanted to do it. I think that’s what
            I want to be an example of, that if you can put in the hard work,
            anything can happen. Like, I’m not someone who’s unbelievably
            proficient or musically knowledgeable, but I’d like to think that I
            make music from the heart, so that’s what I’d like to be remembered
            as. The guy who was driven by the journey, who chased the dream
            while welcoming people to come along, and really lived for himself.
          </div>
          <div className="question">
            Lastly, in 50 years time, when these blocks are likely long gone,
            what would you tell kids if they ask “Hey, what was this Tanglin
            Halt place like?”
          </div>
          <div className="answer">
            It was authentically, fundamentally Singaporean. Like whatever they
            eat in the future, how they speak, stemmed from places like
            these—places that kickstarted the progress towards the exceptional
            future they will enjoy. And one I know I will miss, so I’m so glad
            we’re here, trying to preserve some part of it still.
          </div>
        </div>
      </div>
      <div className="mw-1200 d-flex flex-column d-lg-none">
        <div className="question">
          What’s the legacy that you want to leave in Singapore? How would you
          want people to remember your music or you?
        </div>
        <div className="answer">
          While I was growing up, I was always told “you can’t make it in
          music”—which is precisely why I wanted to do it. I think that’s what
          I want to be an example of, that if you can put in the hard work,
          anything can happen. Like, I’m not someone who’s unbelievably
          proficient or musically knowledgeable, but I’d like to think that I
          make music from the heart, so that’s what I’d like to be remembered
          as. The guy who was driven by the journey, who chased the dream
          while welcoming people to come along, and really lived for himself.
        </div>
        <img src={last2} className="mb-30" alt="" />
        <div className="question">
          Lastly, in 50 years time, when these blocks are likely long gone,
          what would you tell kids if they ask “Hey, what was this Tanglin
          Halt place like?”
        </div>
        <div className="answer">
          It was authentically, fundamentally Singaporean. Like whatever they
          eat in the future, how they speak, stemmed from places like
          these—places that kickstarted the progress towards the exceptional
          future they will enjoy. And one I know I will miss, so I’m so glad
          we’re here, trying to preserve some part of it still.
        </div>
      </div>
    </Wrapper>
  );
};

export default AshwinPage;

const Wrapper = styled.div`
  background: rgba(207, 173, 175, 0.5);
  padding: 30px;

  .mw-1200 {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .question {
    color: #182b40;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .answer {
    color: #182b40;
    margin-bottom: 15px;
  }

  .img-section {
    display: flex;
    justify-content: space-between;

    .left {
      width: 48%;
      display: flex;
      flex-direction: column;
      img {
        margin-bottom: 30px;
      }
    }
    .right {
      width: 45%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
  }

  .carousel-section-2 {
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    .qna {
      width: 55%;
    }
    .ant-carousel {
      width: 40%;
      margin-left: auto;
    }
  }
  .splash {
    margin: 30px -120px;
  }
  .last {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    img {
      order: 1;
      width: 100%;
      margin-bottom: 30px;
      &.order-2 {
        order: 2 !important;
      }
    }
    .qna {
      order: 2;
      width: 100%;
    }
  }
  .last2 {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      width: 100%;
    }
    .qna {
      width: 100%;
    }
  }
  @media screen and (min-width: 992px) {
    background: rgba(207, 173, 175, 0.5);
    padding: 60px 120px 120px;
  
    .mw-1200 {
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
    }
  
    .question {
      color: #182b40;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .answer {
      color: #182b40;
      margin-bottom: 15px;
    }
  
    .img-section {
      display: flex;
      justify-content: space-between;
  
      .left {
        width: 48%;
        display: flex;
        flex-direction: column;
        img {
          margin-bottom: 30px;
        }
      }
      .right {
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }
    }
  
    .carousel-section-2 {
      display: flex;
      margin-top: 30px;
      margin-bottom: 30px;
      .qna {
        width: 55%;
      }
      .ant-carousel {
        width: 40%;
        margin-left: auto;
      }
    }
    .splash {
      margin: 30px -120px;
    }
    .last {
      margin-top: 60px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      img {
        width: 45%;
      }
      .qna {
        width: 50%;
      }
    }
    .last2 {
      margin-top: 60px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      img {
        width: 50%;
      }
      .qna {
        width: 45%;
      }
    }    
  }
`;

type HeroProps = {
  img?: string;
}

const Hero = styled.div<HeroProps>`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(8, 1fr);
  width: 100%;
  margin-bottom: 30px;

  .img-container {
    background-image: url(${props => props.img});
    background-position: center;
    background-size: cover;
    grid-column: 3 / span 8;
    grid-row: 1 / span 6;
  }
  .text-section {
    grid-column: 1 / span 7;
    grid-row: 5 / span 2;
    align-self: center;
    justify-self: start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 30px;

    .indent {
      margin-left: 25%;
      margin-bottom: 30px;
    }
  }
  .blue {
    grid-column: 1 / span 9;
    grid-row: 2 / span 9;
    background: #073d77;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
  }
  .qna {
    grid-column: 1 / span 8;
    grid-row: 7 / span 3;
    padding-top: 30px;
  }
  .question {
    margin-top: auto;
    color: #ffffff;
    grid-column: 1 / span 8;
    grid-row: 7;
    padding-left: 30px;
    align-self: end;
  }
  .answer {
    color: #ffffff;
    grid-column: 1 / span 8;
    grid-row: 8 / span 3;
    padding-left: 30px;
    align-self: center;
  }
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 3fr 2fr 2fr 2fr;
    grid-template-rows: 1fr 2fr 1fr 1fr 1fr;
    width: 100%;
    margin-bottom: 60px;
  
    .img-container {
      grid-column: 2 / span 3;
      grid-row: 1 / span 5;
    }
    .text-section {
      grid-column: 1 / span 2;
      grid-row: 1 / span 2;
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
    .blue {
      grid-column: 1 / span 2;
      grid-row: 2 / span 4;
      background: #073d77;
      padding: 0 30px;
      display: flex;
      flex-direction: column;
      margin-bottom: -30px;
    }
    .qna {
      grid-column: 1;
      grid-row: 3 / span 3;
    }
    .question {
      margin-top: auto;
      color: #ffffff;
      grid-column: 1;
      grid-row: 2;
      padding-left: 30px;
      align-self: end;
    }
    .answer {
      color: #ffffff;
      grid-column: 1;
      grid-row: 3 / span 3;
      padding-left: 30px;
      align-self: center;
      width: 70%;
    }    
  }
`;
