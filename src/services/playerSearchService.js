import { playerData } from "../data";

const getPlayersData = (searchObj) => {
  console.log(searchObj);
  const {
    age,
    contract,
    height,
    leagues,
    nationality,
    positions,
    weight,
  } = searchObj[1];

  console.log(playerData);

  const allPlayers = playerData.filter((player) => {
    // PERSONAL
    const isAge = +player.Age >= age.range[0] && +player.Age <= age.range[1];
    const isHeight =
      +player.Height >= height.range[0] && +player.Height <= height.range[1];
    const isWeight =
      +player.Weight >= weight.range[0] && +player.Weight <= weight.range[1];
    const isNationality =
      nationality.selected !== null
        ? player.Nationality.toLowerCase() ===
          nationality.selected.toLowerCase()
        : true;

    const isLeague = leagues.selected
      ? leagues.selected.includes(player.League)
      : true;

    const isPersonal =
      isAge && isHeight && isWeight && isNationality && isLeague;

    // BASIC STATS
    const {
      AG,
      BG,
      DRB,
      FGA,
      FGM,
      FTA,
      FTM,
      MinutesPerGame,
      ORB,
      SG,
      TOV,
      RG,
      PG,
    } = searchObj[2];

    const isAG = AG.value !== "" ? +player.AG >= AG.value : true;
    const isBG = BG.value !== "" ? +player.BG >= BG.value : true;
    const isDRB = DRB.value !== "" ? +player.DRB >= DRB.value : true;
    const isFGA = FGA.value !== "" ? +player.FGA >= FGA.value : true;
    const isFTA = FTA.value !== "" ? +player.FTA >= FTA.value : true;
    const isFTM = FTM.value !== "" ? +player.FTM >= FTM.value : true;
    const isORB = ORB.value !== "" ? +player.ORB >= ORB.value : true;
    const isPG = PG.value !== "" ? +player.PG >= PG.value : true;
    const isRG = RG.value !== "" ? +player.RG >= RG.value : true;
    const isSG = SG.value !== "" ? +player.SG >= SG.value : true;
    const isTOV = TOV.value !== "" ? +player.TOV >= TOV.value : true;
    const isMinutesPerGame =
      MinutesPerGame.value !== ""
        ? +player["Minutes per game"] >= MinutesPerGame.value
        : true;

    const isBasicStats =
      isAG &&
      isBG &&
      isDRB &&
      isFGA &&
      isFTA &&
      isFTM &&
      isORB &&
      isPG &&
      isRG &&
      isSG &&
      isTOV &&
      isMinutesPerGame;

    // ADVANCED STATS

    const { ASTp, FTp, REB, TOAST, TS, ER } = searchObj[3];

    const isAdvancedStats = true;

    // POSITION ATTR

    const { SGp, SFp, PGp, PFp, Cp } = searchObj[4];

    const isPositionAttr = true;

    return isPersonal && isBasicStats && isAdvancedStats && isPositionAttr;
  });
  console.log(allPlayers);
  return Promise.resolve(allPlayers);
};

export default {
  getPlayersData,
};
