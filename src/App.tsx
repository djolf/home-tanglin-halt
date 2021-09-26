import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.scss";
import HomePage from "./components/HomePage";
import MVPage from "./components/MVPage";
import PortraitsPage from "./components/PortraitsPage";
import WriteUp from "./components/WriteUp";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter >
      <Switch location={location} key={location.pathname}>
        <Route path="/portraits">
          <PortraitsPage />
        </Route>
        <Route path="/mv">
          <MVPage />
        </Route>
        <Route path="/writeup">
          <WriteUp />
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default App;