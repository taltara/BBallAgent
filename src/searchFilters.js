const getSearchColumns = (currUnits) => {
  return [
    {
      id: 1,
      type: "large",
      switch: true,
      title: "Player Personal Details",
      filters: [
        {
          inputType: "select",
          inputName: "nationality",
          label: "Nationality",
          data: { selectType: "country", isMulti: false },
        },
        {
          inputType: "select",
          inputName: "positions",
          label: "Position(s)",
          data: { selectType: "positions", isMulti: true },
        },
        {
          inputType: "range",
          inputName: "age",
          label: "Age",
          data: { range: [0, 100], step: 1 },
        },
        {
          inputType: "range",
          inputName: "height",
          label: `Height (${currUnits.length})`,
          data: { range: [160, 230], step: 1 },
        },
        {
          inputType: "range",
          inputName: "weight",
          label: `Weight (${currUnits.weight})`,
          data: { range: [60, 180], step: 1 },
        },
        {
          inputType: "range",
          inputName: "contract",
          label: "Current Salary",
          data: { range: [0, 220], step: 1 },
        },
        {
          inputType: "select",
          inputName: "leagues",
          label: "League(s)",
          data: { selectType: "leagues", isMulti: true },
        },
      ],
    },
    {
      id: 2,
      type: "small",
      switch: false,
      title: "Basic Stats",
      filters: [
        {
          inputType: "number",
          inputName: "MinutesPerGame",
          label: "Minutes per game",
          data: { min: 0, max: null, step: 1 },
        },
        {
          inputType: "number",
          inputName: "FGM",
          label: "FGM per game",
          data: { min: 0, max: null, step: 1 },
        },
        {
          inputType: "number",
          inputName: "FGA",
          label: "FGA per game",
          data: { min: 0, max: null, step: 1 },
        },
        {
          inputType: "number",
          inputName: "FTM",
          label: "FTM per game",
          data: { min: 0, max: null, step: 1 },
        },
        {
          inputType: "number",
          inputName: "FTA",
          label: "FTA per game",
          data: { min: 0, max: null, step: 1 },
        },
        {
          inputType: "number",
          inputName: "ORB",
          label: "Offensive rebound per game",
          data: { min: 0, max: null, step: 0.1 },
        },
        {
          inputType: "number",
          inputName: "DRB",
          label: "Defensive rebound per game",
          data: { min: 0, max: null, step: 0.1 },
        },
        {
          inputType: "number",
          inputName: "RG",
          label: "Total rebound per game",
          data: { min: 0, max: null, step: 1 },
        },
        {
          inputType: "number",
          inputName: "AG",
          label: "Assists per game",
          data: { min: 0, max: null, step: 1 },
        },
        {
          inputType: "number",
          inputName: "SG",
          label: "Steals per game",
          data: { min: 0, max: null, step: 1 },
        },
        {
          inputType: "number",
          inputName: "BG",
          label: "Block per game",
          data: { min: 0, max: null, step: 1 },
        },
        {
          inputType: "number",
          inputName: "TOV",
          label: "Turnover per game",
          data: { min: 0, max: null, step: 0.1 },
        },
        {
          inputType: "number",
          inputName: "PG",
          label: "Points per game",
          data: { min: 0, max: null, step: 1 },
        },
      ],
    },
    {
      id: 3,
      type: "small",
      switch: false,
      title: "Advanced Stats",
      filters: [
        {
          inputType: "number",
          inputName: "TS",
          label: "TS (%)",
          data: { min: 0, max: null, step: 1 },
        },
        {
          inputType: "number",
          inputName: "to/ast",
          label: "TO/AST Ratio",
          data: { min: 0, max: null, step: 1 },
        },
        {
          inputType: "number",
          inputName: "fta-per-minutes",
          label: "FTA per minutes played",
          data: { min: 0, max: null, step: 1 },
        },
        {
          inputType: "number",
          inputName: "efficiency-rating",
          label: "Player efficiency rating",
          data: { min: 0, max: null, step: 1 },
        },
        {
          inputType: "number",
          inputName: "total-rebound",
          label: "Total rebound (%)",
          data: { min: 0, max: null, step: 1 },
        },
        {
          inputType: "number",
          inputName: "total-assist",
          label: "Total assist (%)",
          data: { min: 0, max: null, step: 1 },
        },
      ],
    },
    {
      id: 4,
      type: "small",
      switch: false,
      title: "Position Combined Attributes",
      filters: [
        {
          inputType: "number",
          inputName: "PGp",
          label: "PG",
          data: { min: 0, max: null, step: 1 },
        },
        {
          inputType: "number",
          inputName: "SGp",
          label: "SG",
          data: { min: 0, max: null, step: 1 },
        },
        {
          inputType: "number",
          inputName: "SFp",
          label: "SF",
          data: { min: 0, max: null, step: 1 },
        },
        {
          inputType: "number",
          inputName: "PFp",
          label: "PF",
          data: { min: 0, max: null, step: 1 },
        },
        {
          inputType: "number",
          inputName: "Cp",
          label: "C",
          data: { min: 0, max: null, step: 1 },
        },
      ],
    },
  ];
};

export default {
  getSearchColumns,
};
