import styled from "styled-components";
import { StrokedText } from "../StoriesPage";
import hero from "../../assets/images/chan/hero.png";
import img1 from "../../assets/images/chan/img1.png";
import img2 from "../../assets/images/chan/img2.png";
import img3 from "../../assets/images/chan/img3.png";
import splash from "../../assets/images/chan/splash.png";
import splash2 from "../../assets/images/chan/splash2.png";

const ChanPage = () => {
  return (
    <Wrapper>
      <Hero className="mw-1200">
        <div className="green"></div>
        <div className="question">So tell me&mdash;who are you?</div>
        <div className="answer">
          Hey, I’m Chan Hao (@chan.psb), but everyone calls me Chan. I
          photograph architecture and cities, mainly Singapore now because...
          well, it’s hard to go anywhere else! My work now is centered around my
          concerns about the documentation and representation of our city.
        </div>
        <img src={hero} alt="" />
        <div className="text-section">
          <StrokedText
            spacing="3px"
            color="#55c1ff"
            strokeWidth={2}
            fontSize="6rem"
            lineHeight="1"
          >
            chan
          </StrokedText>
          <StrokedText
            className="indent"
            spacing="3px"
            color="#55c1ff"
            strokeWidth={2}
            fontSize="6rem"
            lineHeight="1"
          >
            hao
          </StrokedText>
        </div>
      </Hero>
      <div className="mw-1200 my-30">
        <div className="question">
          Why architecture photography? What about capturing buildings in stills
          attracts you?
        </div>
        <div className="answer">
          Well, I studied it! I have a degree in architecture from NUS, so I’ve
          always had a natural inclination towards the discipline as is.
          Combined with my previous experience in primarily nightlife
          photography, I felt that architecture photography was the perfect
          crossover of my interests—the mashup that my artistic side was
          missing.
        </div>
        <div className="answer">
          Since then, its evolved into a deeper purpose: To represent a city
          visually in the way I see it and experience it, at the same time to
          constantly develop my unique photographic perspective and voice.
        </div>
      </div>
      <div className="two-column mw-1200 my-20">
        <div className="left">
          <img src={img1} alt="" />
        </div>
        <div className="right">
          <div className="question">
            Buildings have an oddly transient nature Singapore. Heck, people
            would tell you a 40-year old house is ancient, when overseas they
            stand for centuries! How do you feel about redevelopments like
            these—where houses get torn down for progress as much as they do? Is
            it good or bad to you—is it worth it?
          </div>
          <div className="answer">
            I... don’t like it. But probably not for the popular reasons, like
            culture, heritage, or history. But for me, it’s all about
            sustainability. If you keep rebuilding and tearing down over and
            over, you’re doing incredible damage to the environment—and I think,
            architecturally, there are more interesting things you can do with
            old structures other than simply tearing them down. So, while change
            is inevitable for a forward moving city, I do feel that there’s a
            better solution.
          </div>
          <div className="answer">
            Whether it’s good or bad, I think there’s a beauty in the
            transience. It brings people together, allowing them to celebrate
            what was. I mean, that’s why we’re meeting here, right? There’s
            always a duality to every change, and I think that’s always part of
            the story.
          </div>
        </div>
      </div>
      <div className="mw-1200 my-30">
        <img src={img2} alt="" />
      </div>
      <div className="mw-1200 my-20">
        <div className="question">
          The estate is certainly and interesting one, where every block feels
          iconic with different design sensibilities that you just can’t find
          anywhere else! Is it a beautiful mess or a poorly-curated nightmare?
        </div>
        <div className="answer">
          I find them a little superficial—ornamental, really. It’s more to
          provide an identity to different estates, rather than for a practical
          reason. But, hey, I like them! They bring a sense of fun to everyday
          life that I feel is lacking a little in new HDBs. It has an almost
          post-modern sensibility that is experimental and exciting—and one that
          has been almost pushed away these days because it isn’t pragmatic
          enough. I feel like we’ve lost that sense of fun and subjectivity and
          conversation in our approach to life in Singapore as a whole—and
          that’s a huge shame. Art is in the fun and subjectivity, it’s in the
          debate and different opinions, and it seems like we don’t have time
          for that anymore.
        </div>
      </div>
      <div className="two-column mw-1200 my-30">
        <div className="left">
          <div className="question">
            Tanglin Halt was Singapore’s first satellite town—even appearing on
            our $1 note! Developed between 1960 and 1967, they charted a sign of
            progress— leading the way to the sheer number of HDB estates we have
            now. As a unique and key part of the Singaporean identity, is there
            anything you would change about the HDB system or its design
            sensibilities today?
          </div>
          <div className="answer">
            I have to say, HDB is doing a great job in serving the nation as
            is—there’s so much that they’re doing that make it possible for most
            to have a roof over their heads. But for me, what I’d LOVE to see
            design-wise, are more experimental qualities in our HDBs. Like,
            right now, the blocks are all copy-and-paste, and I think we could
            do with a bit more uniqueness. Not in a superficial way, but
            something that penetrates deep within a HDB space that sparks
            conversation, that changes its layout and its character on the
            whole— ultimately bringing back the subjectivity and debate of
            design into everyday spaces.
          </div>
        </div>
        <div className="right">
          <img src={img3} alt="" />
        </div>
      </div>
      <div className="splash">
        <img src={splash} alt="" />
      </div>
      <div className="mw-1200 my-20">
        <div className="question">
          If you could preserve just one thing from the architectural anomalies
          of Tanglin Halt, what would it be? What would you fight to keep, even
          as blocks are torn down and glass towers are constructed?
        </div>
        <div className="answer">
          My first answer would be the SIT flats along Commonwealth Drive. For
          me, aesthetically, it’s so interesting and reductive, and you simply
          won’t be able to find HDBs like that anymore. If I think about it
          socially, perhaps the hawker centres, as people can always come back
          no matter how far they are displaced—and it’ll always serve as a
          gathering point for people to come together and meet up again.
        </div>
      </div>
      <div className="mw-1200 my-30">
        <img src={splash2} alt="" />
      </div>
      <div className="mw-1200 my-30">
        <div className="question">
          Lastly, in 50 years time, when these blocks are likely long gone, what
          would you tell kids if they ask “Hey, what was this Tanglin Halt place
          like?”
        </div>
        <div className="answer">
          I would say it was an organic, unfiltered neighbourhood, surrounded by
          a sanitized, efficient, urban environment—an informal town that stood
          out with sheer fun, casualness, and the right amount of “dirty” that
          was so refreshing to experience. And I really hope there’ll be more
          places like these in the future, for people to see and experience,
          even then.
        </div>
      </div>
    </Wrapper>
  );
};

export default ChanPage;

const Wrapper = styled.div`
  background: rgba(250, 236, 176, 0.5);
  padding: 60px 120px 120px;

  .mw-1200 {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .question {
    color: #483c46;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .answer {
    color: #483c46;
    margin-bottom: 15px;
  }

  .two-column {
    display: flex;
    justify-content: space-between;
    .left {
      width: 48%;
    }
    .right {
      display: flex;
      flex-direction: column;
      width: 48%;
    }
  }
  .splash {
    margin: 30px -120px;
  }
`;

const Hero = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 2fr 3fr;
  grid-template-rows: 1fr 2fr 2fr 1fr;
  width: 100%;
  margin-bottom: 60px;

  img {
    grid-column: 1 / span 3;
    grid-row: 1 / span 4;
  }
  .text-section {
    grid-column: 3 / span 2;
    grid-row: 1 / span 2;
    align-self: center;
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 30px;

    .indent {
      margin-left: 100px;
      margin-bottom: 30px;
    }
  }
  .green {
    grid-column: 3 / span 2;
    grid-row: 2 / span 3;
    background: #739b75;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    margin-bottom: -30px;
  }
  .question {
    color: #ffffff;
    grid-column: 4;
    grid-row: 2;
    padding-left: 30px;
    align-self: end;
    width: 100%;
  }
  .answer {
    color: #ffffff;
    grid-column: 4;
    grid-row: 2 / span 2;
    padding-left: 30px;
    align-self: end;
    width: 90%;
  }
`;
