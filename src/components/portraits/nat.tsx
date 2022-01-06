import styled from "styled-components";
import { StrokedText } from "../StoriesPage";
import hero from "../../assets/images/nat/hero.png";
import img1 from "../../assets/images/nat/img1.png";
import img2 from "../../assets/images/nat/img2.png";
import img3 from "../../assets/images/nat/img3.png";
import splash from "../../assets/images/nat/splash.png";
import splash2 from "../../assets/images/nat/splash2.png";
import g1 from "../../assets/images/nat/g1.png";
import g2 from "../../assets/images/nat/g2.png";

const NatPage = () => {
  return (
    <Wrapper>
      <Hero className="mw-1200" img={hero}>
        <div className="orange"></div>
        <div className="qna">
          <div className="question">So tell me&mdash;who are you?</div>
          <div className="answer">
            Hey! We’re Natasha & Nathaniel, the brother-sister duo behind &nbsp;
            <a href="https://www.kokeball.com/"><b>Kokeball Singapore</b></a> (
            <a href="https://www.instagram.com/kokeball.sg/">@kokeball.sg</a>)! We
            started Kokeball because we wanted to educate and teach people what
            we’ve learnt about taking care of plants—and show them that it’s not
            as hard as they think!
          </div>
        </div>
        <div className="img-container"></div>
        <div className="text-section">
          <StrokedText
            spacing="3px"
            color="#fb6d4d"
            strokeWidth={2}
            fontSize="6rem"
            lineHeight="1"
            mobileFontSize="3rem"
          >
            nathaniel
          </StrokedText>
          <StrokedText
            className="indent"
            spacing="3px"
            color="#fb6d4d"
            strokeWidth={2}
            fontSize="6rem"
            lineHeight="1"
            mobileFontSize="3rem"
          >
            &amp; natasha
          </StrokedText>
        </div>
      </Hero>
      <div className="two-column mw-1200 d-none d-lg-flex">
        <div className="left">
          <div className="question">Why Kokedama? Heck, why plants!?</div>
          <div className="answer">
            <b>Natasha:</b> Well, I was living in Melbourne for a while, and it
            gets pretty lonely over a long period, so I got into plants which
            was great because it was a living thing to focus on, ...and
            something that wouldn’t talk back to you either! (<i>laughs</i>) Starting
            out, I was really afraid of my plants dying, so I don’t think I gave
            myself the chance to really enjoy the process—but thanks to a very
            good friend who taught me how to take care of them, by the time I
            had left Melbourne, my Monstera had gone from 2 leaves to 10! So I
            wanted to share my knowledge with people, because I want them to
            feel that fun sense of experimentation, to allow themselves to fall
            in love with the process of taking care of plants and not be afraid
            of the results.
          </div>
          <div className="answer">
            <b>Nathaniel:</b> Personally, when I was in the army, I disliked
            nature—elements like soil and sand seemed “dirty” to me. During that
            time, I watched my sister repot and propagate plants and I’d be like
            “Why would you want to do that?” But in wanting to help her out, I
            started messing around with soil... and it actually started becoming
            therapeutic and calming for me! Since then, I’ve been involved in
            the technical side of the business and gotten my hands a lot dirtier
            since. (<i>laughs</i>) Regarding “Why Kokedamas”, it’s really because of
            how fun and approachable it is, and the level of customization that
            allows people to express themselves in their own way. It also
            inspires them to be in touch with nature more!
          </div>
          <div className="answer">
            <b>Natasha:</b> The story and history behind Kokedamas also inspired
            us, because originally, it came from a place of protecting plants
            during transportation—balling up their roots so they can be easily
            transplanted, and realizing there was something beautiful in that
            form, that imperfection of sorts. It’s all stemming from the idea of
            change, and being able to find the beauty in all the nooks and
            crannies of change.
          </div>
        </div>
        <div className="right">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>
      </div>
      <div className="mw-1200 d-lg-none">
        <img src={img1} alt="" />
        <div className="question mt-30">Why Kokedama? Heck, why plants!?</div>
        <div className="answer">
          <b>Natasha:</b> Well, I was living in Melbourne for a while, and it
          gets pretty lonely over a long period, so I got into plants which
          was great because it was a living thing to focus on, ...and
          something that wouldn’t talk back to you either! (<i>laughs</i>) Starting
          out, I was really afraid of my plants dying, so I don’t think I gave
          myself the chance to really enjoy the process—but thanks to a very
          good friend who taught me how to take care of them, by the time I
          had left Melbourne, my Monstera had gone from 2 leaves to 10! So I
          wanted to share my knowledge with people, because I want them to
          feel that fun sense of experimentation, to allow themselves to fall
          in love with the process of taking care of plants and not be afraid
          of the results.
        </div>
        <div className="answer">
          <b>Nathaniel:</b> Personally, when I was in the army, I disliked
          nature—elements like soil and sand seemed “dirty” to me. During that
          time, I watched my sister repot and propagate plants and I’d be like
          “Why would you want to do that?” But in wanting to help her out, I
          started messing around with soil... and it actually started becoming
          therapeutic and calming for me! Since then, I’ve been involved in
          the technical side of the business and gotten my hands a lot dirtier
          since. (<i>laughs</i>) Regarding “Why Kokedamas”, it’s really because of
          how fun and approachable it is, and the level of customization that
          allows people to express themselves in their own way. It also
          inspires them to be in touch with nature more!
        </div>
        <div className="answer">
          <b>Natasha:</b> The story and history behind Kokedamas also inspired
          us, because originally, it came from a place of protecting plants
          during transportation—balling up their roots so they can be easily
          transplanted, and realizing there was something beautiful in that
          form, that imperfection of sorts. It’s all stemming from the idea of
          change, and being able to find the beauty in all the nooks and
          crannies of change.
        </div>

        <img src={img2} alt="" />
      </div>
      <div className="mw-1200 mt-20">
        <div className="question">
          There is something incredibly intimate about working with plants,
          about tending to something daily and being directly responsible for it
          thriving or failing. Do you think that Singaporeans typically like the
          challenge, or are they intimidated by this? How do you mitigate those
          fears of failure?
        </div>
        <div className="answer">
          <b>Natasha:</b> Yeah, I’ve noticed that folks in our workshop tend to
          want a formula to get it right—but what is “right”? I mean, it’s their
          first time doing it! There’s definitely a lot of fear of failure in
          the frustration they feel, so we always try to tell them that the
          beauty is in the fact that they are trying, and that they’re the ones
          putting it together—so it becomes something they can definitively say
          is their own. That is inherently beautiful.
        </div>
      </div>
      <div className="splash">
        <img src={splash} alt="" />
      </div>
      <div className="mw-1200 mt-20">
        <div className="answer">
          <b>Nathaniel:</b> I think lots of Singaporeans tend to strive for
          perfection, and there’s this huge pressure from society informing us
          that we kinda have to be that way. And that can mean a huge fear of
          expression, of deviation in the attempt to get it “correct”. That’s
          why in our classes, we always try to make it a safe space for people
          to create, to make mistakes. And as long as they try their best and
          are personally happy with the result, that is really all that
          matters—and all it takes to be content, really.
        </div>
      </div>
      <div className="grid-container mw-1200 mt-20">
        <img className="g1" src={g1} alt="" />
        <div className="g2">
          <div className="question">
            Plants and trees have a way of watching the changes of the world
            silently, guardians of the history they’ve witnessed. Do you think
            they’d feel sad at the redevelopment, or would it just be another
            change in our Singaporean nature? Is progress and change hardwired
            into our identity?
          </div>
          <div className="answer">
            <b>Nathaniel:</b> I’d like to think that plants don’t think of us
            (<i>laughs</i>) But I think what the plants can teach us, with regards to
            Tanglin Halt, is their resilience and adaptability to change. They
            want to live, to change, and survive, no matter what happens to the
            world around them. And I think Singaporeans are the same way, having
            the ability to adapt to new environments, to thrive and grow in new
            places.
          </div>
          <div className="answer">
            <b>Natasha:</b> I took this picture on our tour, and I think it
            encapsulates Tanglin Halt—and us as Singaporeans! There’s always
            going to be buildings built up around you, there’s always going to
            be boxes and pressures built around us, but we should survive and
            make the most of it—establishing our roots and growing stronger, wherever we are planted.
          </div>
        </div>
        <div className="g3">
          <div className="question">
            What kind of plant represents Tanglin Halt to you?
          </div>
          <div className="answer">
            <b>Natasha:</b> Hmmm... that’s a very hard question... I actually
            think the Bodhi plant (also known as the sacred fig) is very apt.
            They’ve got beautiful, heart-shaped leaves and grow all over
            Singapore, somehow thriving even between the toughest concrete on
            sidewalks or anywhere really—the epitome of adaptability,
            resilience, and ability to grow through adversity.
          </div>
          <div className="question">
            When we were talking about the redevelopment, we realised that trees
            the height of the blocks will likely go with it—cut down to make way
            for a concrete jungle. Do you think there’s a better way? Is there a
            way to keep these plants in the picture as we move forward?
          </div>
          <div className="answer">
            <b>Nathaniel:</b> Generally, I think it’s important to be calculated
            and efficient about it—I mean, there’s no way they are going to be
            able to uproot and replant all the plants! But it’s about the effort
            of keeping them in the conversation, to make efforts to protect or
            move the plants that still have a long way to grow. And I think that
            would work, because we’re such an efficient society—one that
            searches for the best solution.
          </div>
        </div>
        <img className="g4" src={g2} alt="" />
      </div>
      <div className="mw-1200 mt-20">
        <div className="answer">
          <b>Natasha:</b> I remember when I was growing up, I had a huge forest
          right next to our house filled with singing birds, squirrels, and
          beautiful, lush greenery. But one day, it was all torn down, making
          way for the condominium beside us. I cried my eyeballs out! But now
          that I’m older, I recognize the need for space—I mean, we need space
          for people to live and grow, which means that inevitably, things will
          have to make way as well.
        </div>
        <div className="answer">
          But I think there are sustainable ways to do it, like ensuring the
          saplings of plants are collected, and understanding the biodiversity
          of an area in order to responsibly rehome the animals there. Or even
          for felled trees to be turned into furniture, of which there are many
          local carpenters and companies filling that space—making something
          that is, in the long run, far more sustainable and lasts for
          generations.
        </div>
      </div>
      <div className="two-column mw-1200 mt-20 d-none d-lg-flex">
        <div className="left">
          <img src={img3} alt="" />
        </div>
        <div className="right">
          <div className="question">
            Legacy is a key part of Tanglin Halt’s identity—a place laden with
            an amazing amount of truly unique history and truly memorable
            places. What is the legacy you’d like to leave behind—with Kokeball
            and beyond?
          </div>
          <div className="answer">
            <b>Nathaniel:</b> I think the legacy I’d like to leave behind, in
            our super competitive, fast- paced society, is the importance of
            being content. To be content with yourself and what you’ve done, to
            spend time with the people that matter to you. So much of the time,
            we peg our success to what we can’t control and honestly, what
            doesn’t even matter, so for me, I think it’s so important to just
            step back and be genuinely happy with the small victories we have.
          </div>
          <div className="answer">
            <b>Natasha:</b> It’s so difficult, I haven’t thought about this in a
            while! (<i>laughs</i>) I think... I’d like to leave behind the attitude of
            generosity by looking at ourselves and thinking “How can I give? How
            can I support and uplift?” rather than “What’s in it for me?”. I
            feel that if everyone started from that place of generosity, we’d be
            a lot more tolerant, harmonious, and forward-thinking. And through
            Kokeball, I feel like it’s a gift that just keeps giving— where we
            can educate people and in turn, they can continue on to teach
            friends and spread the love of growing and caring for plants.
          </div>
        </div>
      </div>
      <div className="mw-1200 mt-20 d-flex flex-column d-lg-none">
        <img src={img3} className="mx-auto" alt="" />
        <div className="question mt-20">
          Legacy is a key part of Tanglin Halt’s identity—a place laden with
          an amazing amount of truly unique history and truly memorable
          places. What is the legacy you’d like to leave behind—with Kokeball
          and beyond?
        </div>
        <div className="answer">
          <b>Nathaniel:</b> I think the legacy I’d like to leave behind, in
          our super competitive, fast- paced society, is the importance of
          being content. To be content with yourself and what you’ve done, to
          spend time with the people that matter to you. So much of the time,
          we peg our success to what we can’t control and honestly, what
          doesn’t even matter, so for me, I think it’s so important to just
          step back and be genuinely happy with the small victories we have.
        </div>
        <div className="answer">
          <b>Natasha:</b> It’s so difficult, I haven’t thought about this in a
          while! (<i>laughs</i>) I think... I’d like to leave behind the attitude of
          generosity by looking at ourselves and thinking “How can I give? How
          can I support and uplift?” rather than “What’s in it for me?”. I
          feel that if everyone started from that place of generosity, we’d be
          a lot more tolerant, harmonious, and forward-thinking. And through
          Kokeball, I feel like it’s a gift that just keeps giving— where we
          can educate people and in turn, they can continue on to teach
          friends and spread the love of growing and caring for plants.
        </div>
      </div>
      <div className="mw-1200 mt-30">
        <img src={splash2} alt="" />
      </div>
      <div className="mw-1200 mt-30">
        <div className="question">
          Lastly, in 50 years time, when these blocks are likely long gone, what
          would you tell kids if they ask “Hey, what was this Tanglin Halt place
          like?”
        </div>
        <div className="answer">
          <b>Natasha:</b> I think I would tell people that Tanglin Halt was a
          place where trains would stop, like a gentle pause in the wheels of
          change. Time came to a standstill, unfazed by the transience of the
          world around it—until it wasn’t. And whatever it looks like then, I
          think I’ll still bring my kids there to feel the gravity of that
          change, and to share the lesson of being adaptable and never
          forgetting where you come from, before you move forward.
        </div>
        <div className="answer">
          <b>Nathaniel:</b> I’d say that the development of Tanglin Halt
          represented the dawn of a new era, the embodiment of change in
          Singapore. Through pictures, I’d show how it serves as such a poignant
          story of growth and evolution—and at the same time, a reminder of
          where we once were, and how far we’ve come.
        </div>
      </div>
    </Wrapper>
  );
};

export default NatPage;

const Wrapper = styled.div`
  background: rgba(223, 181, 133, 0.5);
  padding: 30px 30px 30px;

  .mw-1200 {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .question {
    color: #671821;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .answer {
    color: #671821;
    margin-bottom: 15px;
  }

  .two-column {
    display: flex;
    justify-content: space-between;
    .left {
      width: 48%;
    }
    .right {
      width: 48%;
      img {
        margin-bottom: 30px;
      }
    }
  }
  .splash {
    margin: 30px -120px;
  }
  .grid-container {
    display: flex;
    flex-direction: column;

    .g1 {
      order: 1;
    }

    .g2 {
      margin-top: 30px;
      order: 2;
    }

    .g3 {
      margin-top: 30px;
      order: 4;
    }

    .g4 {
      order: 3;
    }
    @media screen and (min-width: 576px) {
      display: grid;
      grid-template-columns: 5fr 5fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-gap: 30px;
      .g1 {
        grid-column: 1;
        grid-row: 1;
      }
      .g2 {
        margin-top: 0;
        grid-column: 2;
        grid-row: 1 / span 2;
      } 
      .g3 {
        margin-top: 0;
        grid-column: 1;
        grid-row: 2 / span 2;
      }
      .g4 {
        grid-column: 2;
        grid-row: 3 / span 2;
      }
    }
  }
  @media screen and (min-width: 992px) {
    background: rgba(223, 181, 133, 0.5);
  padding: 60px 120px 120px;

  .mw-1200 {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .question {
    color: #671821;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .answer {
    color: #671821;
    margin-bottom: 15px;
  }

  .two-column {
    display: flex;
    justify-content: space-between;
    .left {
      width: 48%;
    }
    .right {
      width: 48%;
      img {
        margin-bottom: 30px;
      }
    }
  }
  .splash {
    margin: 30px -120px;
    width: 100vw;
    img {
      width: 100%;
    }
  }
  .grid-container {
    display: grid;
    grid-template-columns: 5fr 5fr;
    grid-template-rows: 4fr 1fr 4fr;
    grid-gap: 30px;

    .g1 {
      grid-column: 1;
      grid-row: 1 / span 2;
    }

    .g2 {
      grid-column: 2;
      grid-row: 1;
    }

    .g3 {
      grid-column: 1;
      grid-row: 3;
    }

    .g4 {
      grid-column: 2;
      grid-row: 2 / span 2;
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
  grid-template-rows: 30px 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  margin-bottom: 60px;

  .img-container {
    background-image: url(${props => props.img});
    background-position: center;
    background-size: cover;
    grid-column: 1 / span 8;
    grid-row: 1 / span 4;
  }
  .text-section {
    grid-column: 1 / span 9;
    grid-row: 3 / span 2;
    align-self: center;
    justify-self: end;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 30px;

    .indent {
      margin-left: 20%;
      margin-bottom: 30px;
      white-space: nowrap;
    }
  }
  .orange {
    grid-column: 2 / span 9;
    grid-row: 2 / span 5;
    background: #74684a;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
  }
  .qna {
    grid-column: 2 / span 9;
    grid-row: 5 / span 2;
    align-self: end;
    padding-top: 15px;
  }
  .question {
    color: #ffffff;
    padding-left: 30px;
    width: 100%;
  }
  .answer {
    color: #ffffff;
    padding-left: 30px;
    width: 90%;
  }
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 3fr 3fr 2fr 3fr;
    grid-template-rows: 1fr 2fr 2fr 1fr;
    width: 100%;
    margin-bottom: 60px;

    .img-container {
      grid-column: 1 / span 3;
      grid-row: 1 / span 4;
    }
    .text-section {
      grid-column: 2 / span 3;
      grid-row: 1 / span 2;
      align-self: center;
      justify-self: end;
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
      grid-column: 2 / span 3;
      grid-row: 1 / span 3;
      background: #74684a;
      padding: 0 30px;
      display: flex;
      flex-direction: column;
      margin-top: -30px;
    }
    .qna {
      grid-column: 4;
      grid-row: 2 / span 2;
      align-self: end;
    }
    .question {
      color: #ffffff;
      padding-left: 30px;
      width: 100%;
    }
    .answer {
      color: #ffffff;
      padding-left: 30px;
      width: 90%;
    }
  }
`;
