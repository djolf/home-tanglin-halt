import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.scss";
import Background from "./components/background/Background";
import HomePage from "./components/HomePage";
import MusicLink from "./components/MusicLink";
import MVPage from "./components/MVPage";
import PortraitsPage from "./components/PortraitsPage";
import PortraitsSubPage from "./components/PortraitsSubPage";
import SoundGallery from "./components/SoundGallery";
import StoriesPage from "./components/StoriesPage";
import StoriesSubPage from "./components/StoriesSubPage";
import ThanksPage from "./components/ThanksPage";
import WriteUp from "./components/WriteUp";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Background key={"background"} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/thanks" render={() => {
            return <ThanksPage />
          }}/>
          <Route path="/stories" render={() => {
            return <StoriesPage />
          }}/>
          <Route path="/stories-detail" render={() => {
            return <StoriesSubPage />
          }}/>
          <Route path="/sound-gallery" render={() => {
            return <SoundGallery />
          }}/>
          <Route path="/portraits" render={() => {
            return <PortraitsPage />
          }} />
          <Route path="/portraits-details" render={() => {
            return <PortraitsSubPage />
          }} />
          <Route path="/music-video" render={() => {
            return <MVPage />
          }} />
          <Route path="/writeup" render={() => {
            return <WriteUp />
          }}/>
          <Route path="/" render={() => {
            return <HomePage/>
          }}/>
        </Switch>
        <MusicLink />
    </AnimatePresence>
    </>
  );
}

export default App;