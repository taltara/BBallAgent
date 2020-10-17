import React, { useState, useEffect } from "react";
// import "./App.css";
import "./style/global.scss";

import Homepage from "./Pages/Homepage";
import PlayerSearch from "./Pages/PlayerSearch";
import About from "./Pages/About";
import Toolbar from "./Components/Toolbar/Toolbar";

import { Switch, Route } from "react-router-dom";

const App = () => {
  let contentRef = { current: null };
  const [contentWidth, setContentWidth] = useState(null);

  useEffect(() => {
    if(contentRef && contentRef.current) {
      setContentWidth(contentRef.current.innerWidth)
    }
  }, [contentRef.current]);
  // useEffect(() => {
  //   if(contentRef && contentRef.current) {
  //     setContentWidth(contentRef.current.innerWidth)
  //   }
  // }, []);

  return (
    <div className="bb-app flex column align-center space-start">
      <Toolbar />
      <main
        className="app-content flex align-start space-center"
        ref={(input) => {
          contentRef = input;
        }}
      >
        <Switch>
          <Route
            render={() => <PlayerSearch width={contentWidth} />}
            path="/getplayer"
          />
          <Route render={() => <About />} path="/about" />
          <Route render={() => <Homepage />} path="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
