import { motion } from "framer-motion";
import styled from "styled-components";
import Menu from "./menu/menu";
import { StrokedText } from "./StoriesPage";
import bg from "../assets/images/stories-header.png";
import { ArticleProps, stories1, stories2 } from "./model";

const StoriesSubPage = () => {
  return (
    <Wrapper
      initial={{ x: "100vw" }}
      animate={{ x: 0, transition: { duration: 0.5 } }}
      exit={{ x: "100vw" }}
    >
      <div className="container">
        <div className="header">
          <div className="menu">
            <Menu showLogo />
          </div>
          <StrokedText textAlign="center" fontSize="5rem" strokeWidth={1}>
            stories from the public
          </StrokedText>
        </div>
        <div className="col-container">
          <div className="col">
            {stories1.map((story) => <Article {...story} />)}
          </div>
          <div className="col">
            {stories2.map((story) => <Article {...story} />)}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default StoriesSubPage;

const Article = (props: ArticleProps) => (
  <ArticleWrapper>
    <div className="text">{`"${props.text}"`}</div>
    <div className="name">{props.name}</div>
    <div className="title" dangerouslySetInnerHTML={{__html: props.title}}></div>
  </ArticleWrapper>
);

const ArticleWrapper = styled.div`
  margin-bottom: 60px;
  .text {
    font-weight: 300;
    font-style: italic;
    color: #760909;
    margin-bottom: 15px;
  }
  .name,
  .title {
    font-weight: bold;
    color: #c02555;
  }
`;

const Wrapper = styled(motion.div)`
  background: #fffbe9;
  margin: 0 auto;
  overflow-x: hidden;
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  .header {
    background: url(${bg});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .menu {
      height: 150px;
      display: flex;
      width: 100%;
    }
  }
  .col-container {
    display: flex;
    padding: 30px;
    .col {
      width: 50%;
      padding: 30px;
    }
  }
`;

