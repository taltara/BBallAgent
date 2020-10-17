import React, { useState, useEffect } from "react";

import StatBlock from "./StatBlock";
import utilService from "../../../services/utilService";

const PlayerPreviewStats = (props) => {
  const { stats } = props;

  const getTopStats = () => {
    if (stats) {
      const currLeagues = Array.isArray(stats.League)
        ? [...stats.League]
        : [stats.League];
      const currPositions = Array.isArray(stats.POS)
        ? [...stats.POS]
        : [stats.POS];
      const currContract = +stats.Contract
        ? utilService.numberWithCommas(+stats.Contract, "$")
        : "-";
      return {
        Nationality: stats.Nationality,
        POS: currPositions,
        Age: stats.Age,
        Height: stats.Height,
        Weight: stats.Weight,
        Salary: currContract,
        "League(s)": currLeagues,
      };
    } else return null;
  };
  const getBottomStats = () => {
    if (stats) {
      return {
        Minutes: stats["Minutes per game"],
        FGM: stats.FGM,
        FGA: stats.FGA,
        FTM: stats.FTM,
        FTA: stats.FTA,
        Assists: stats.AG,
        Turnover: stats.TOV,
        "Defensive Rebound": stats.DRB,
        "Total Rebound": stats.RG,
        "Offensive Rebound": stats.ORB,
        Steal: stats.SG,
        Points: stats.PG,
        Block: stats.BG,
      };
    } else return null;
  };

  const topStats = getTopStats();
  const bottomStats = getBottomStats();
  return (
    <div className="player-preview-stats flex column align-center space-center">
      <div className="preview-stats-top flex align-start space-evenly">
        <p className="stat-top-name">{stats.Player}</p>
        <div className="stats-top flex align-center space-between">
          {topStats
            ? Object.keys(topStats).map((stat, index) => {
                return (
                  <StatBlock key={index} name={stat} value={topStats[stat]} />
                );
              })
            : null}
        </div>
      </div>
      <div className="preview-stats-bottom flex align-center space-start wrap">
        {bottomStats
          ? Object.keys(bottomStats).map((stat, index) => {
              return (
                <span
                  key={index}
                  className="stats-bottom-span flex align-center space-center"
                >
                  <p>{`${stat} per game:`}</p>
                  <p>{bottomStats[stat]}</p>
                </span>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default PlayerPreviewStats;
