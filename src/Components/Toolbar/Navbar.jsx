import React, { useState } from "react";

import TiltButton from "../navigation/TiltButton/TiltButton";
import { activeTab } from "../../store/actions/MainActions";

import { connect } from "react-redux";

const Navbar = (props) => {
  // const {  } = props;
  const [currActiveTab, setCurrActiveTab] = useState("");

  const setActiveTab = (newActive) => {
    setCurrActiveTab(newActive);
    activeTab(newActive);
  };

  const tabs = [
    { label: "home", to: "" },
    { label: "player search", to: "getplayer" },
  ];

  return (
    <div className="navbar flex align-center space-start">
      <nav className="navbar-links flex align-center space-start">
        {tabs.map((tab, index) => {
          return (
            <TiltButton
              key={index}
              buttonType="link"
              label={tab.label}
              linkTo={tab.to}
              activeLink={currActiveTab}
              activeLinkClass="activeTab"
              isLinkToExact={true}
              isTilt={false}
              tiltOptions={{ scale: 1.05 }}
              animation="general"
              onClick={() =>
                setActiveTab(tab.label === "home" ? "" : tab.label)
              }
              buttonClass="tilt-button"
            />
          );
        })}
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    activeTab: state.main.activeTab,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    activeTab: (activeTab) => dispatch(activeTab(activeTab)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
