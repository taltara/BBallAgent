import React, { useState } from "react";

import FoldingTabs from "../navigation/FoldingTabs/FoldingTabs";
import logo from "../../assets/logo.png";
import logoBall from "../../assets/logo-ball.png";

import Tilt from "react-tilt";

const Toolbar = () => {
  const getCurrActiveTab = () => {
    let currentTab = window.location.pathname;
    console.log(currentTab);
    switch (currentTab) {
      case "/":
        return "HOME";
      case "/getplayer":
        return "SEARCH";
      case "/about":
        return "ABOUT";
      default:
        return "";
    }
  };

  const [currTab, setCurrTab] = useState(getCurrActiveTab());

  const onSetTab = (ActiveTab) => {
    // console.log(ActiveTab);
    setCurrTab(ActiveTab);
  };

  return (
    <div className="toolbar flex column align-center space-center">
      <div className="toolbar-content flex align-center space-start">
        <div className="logo-container">
          <img src={logo} alt="" className="toolbar-logo" />
          <Tilt className="Tilt" options={{ scale: 1.01, perspective: 100, reversed: true }}>
            <img src={logoBall} alt="" className="logo-ball Tilt-inner" />
          </Tilt>
        </div>
        <FoldingTabs activeTab={currTab} onSetTab={onSetTab} />
      </div>
    </div>
  );
};

export default Toolbar;
