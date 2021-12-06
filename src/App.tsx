import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.scss";
import Background from "./components/background/Background";
import HomePage from "./components/HomePage";
import MVPage from "./components/MVPage";
import PortraitsPage from "./components/PortraitsPage";
import SoundGallery from "./components/SoundGallery";
import StoriesPage from "./components/StoriesPage";
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
          <Route path="/sound-gallery" render={() => {
            return <SoundGallery />
          }}/>
          <Route path="/portraits" render={() => {
            return <PortraitsPage />
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
    </AnimatePresence>
    </>
  );
}

export default App;