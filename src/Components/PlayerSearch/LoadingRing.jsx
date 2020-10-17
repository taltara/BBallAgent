import React from "react";

const LoadingRing = (props) => {
  const { theme } = props;
  return (
    <div className={`loading-ring loading-${theme} flex align-center space-center`} >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    // <span className="loader-span flex align-center space-center">
    //   <div className="loader">
    //     <div></div>
    //     <div></div>
    //   </div>
    // </span>
  );
};

export default LoadingRing;
