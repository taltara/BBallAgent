import React from "react";

import PlayerPreviewStats from "./PlayerPreviewStats";
import { ReactComponent as PlayerIcon } from "../../../assets/player.svg";

const PlayerInfoPreview = (props) => {
  const { playerInfo, hasBorder, filterAvg } = props;
  const borderClass = hasBorder ? "border" : "";

  const getBasicMatch = (info) => {
    // console.log(filterAvg.age, +info.Age, filterAvg.age - +info.Age);
    // console.log(
    //   filterAvg.contract,
    //   +info.Contract / 1000,
    //   filterAvg.contract - +info.Contract / 1000
    // );
    // console.log(
    //   filterAvg.weight,
    //   +info.Weight,
    //   filterAvg.weight - +info.Weight
    // );
    const contract = isNaN(+info.Contract)
      ? 1000
      : Math.abs(filterAvg.contract - +info.Contract / 1000);
    return (
      Math.abs(filterAvg.age - +info.Age) +
      contract +
      Math.abs(filterAvg.weight - +info.Weight)
    );
  };

  const matchRate = getBasicMatch(playerInfo);
  return (
    <div
      className={`player-info-preview ${borderClass} flex align-center space-start`}
      data-name={playerInfo.Player}
      data-match={matchRate}
    >
      <PlayerIcon className="player-info-icon" />
      <PlayerPreviewStats stats={playerInfo} />
      {/* <p>{playerInfo.Player}</p> */}
    </div>
  );
};

export default PlayerInfoPreview;
