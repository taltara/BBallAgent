import React, { useEffect, useState, useRef } from "react";

import { ReactComponent as ReturnIcon } from "../../assets/back.svg";
import LoadingRing from "./LoadingRing";
import PlayerInfoPreview from "./PlayerInfo/PlayerInfoPreview";
import TypeSearcher from "../inputs/TypeSearcher";

import Isotope from "isotope-layout";

const SearchResults = (props) => {
  const iso = useRef({ current: null });
  const containerRef = useRef(null);

  const { isShowing, setIsShowing, result, searchFilter } = props;

  const [backArrowClass, setBackArrowClass] = useState("");
  const [showClass, setShowClass] = useState("");
  const [basicFilterAvg, setBasicFilterAvg] = useState({});
  const [currSort, setCurrSort] = useState({ by: "match", ascending: true });
  // console.log(searchFilter);

  useEffect(() => {
    console.log(currSort);
    if (iso.current.arrange) {
      iso.current.arrange({
        sortBy: currSort.by,
        sortAscending: currSort.ascending,
      });
    }
  }, [currSort]);

  useEffect(() => {
    if (searchFilter && searchFilter["1"]) {
      console.log(searchFilter["1"]);
      const { age, contract, weight } = searchFilter["1"];
      setBasicFilterAvg({
        age: (age.range[0] + age.range[1]) / 2,
        contract: (+contract.range[0] + +contract.range[1]) / 2,
        weight: (weight.range[0] + weight.range[1]) / 2,
      });
    }
  }, [searchFilter]);

  useEffect(() => {
    if (containerRef.current) {
      // console.log(containerRef.current);
      iso.current = new Isotope(containerRef.current, {
        layoutMode: "vertical",
        itemSelector: ".player-info-preview",
        getSortData: {
          name: "[data-name]",
          match: "[data-match]",
        },
        sortBy: "match",
        sortAscending: true,
        vertical: {
          horizontalAlignment: 0,
        },
        // fitRows: {
        //   gutter: 10,
        // },
      });
    }
  }, [containerRef.current]);

  useEffect(() => {
    if (result) {
      setShowClass("showing");
    }
  }, [result]);

  useEffect(() => {
    let timer = null;
    if (isShowing) {
      timer = setTimeout(() => {
        setBackArrowClass("open-arrow");
        setTimeout(() => {
          setBackArrowClass("open-arrow arrow-opened");
        }, 300);
      }, 350);
    } else setBackArrowClass("no-arrow");

    return () => clearTimeout(timer);
  }, [isShowing]);

  const onAscendingToggle = () => {
    console.log("ASCENDING!");
    setCurrSort((prevState) => {
      return { ...prevState, ascending: !prevState.ascending };
    });
  };

  const onDataChange = (newSort) => {
    console.log(newSort);
    setCurrSort((prevState) => {
      if (newSort.selected.code === prevState.by) {
        return prevState;
      } else {
        console.log(prevState);
        return { by: newSort.selected.code, ascending: true };
      }
    });
  };

  const resultsClass = isShowing ? "show-res" : "";
  const currResults = result ? result.slice(0, 100) : null;
  return (
    <div
      className={`search-results ${resultsClass} flex column align-center space-center`}
    >
      <header className="results-top flex align-center space-center">
        <div className="return-container flex align-center space-start">
          <ReturnIcon
            className={`description-return flex align-center space-center ${backArrowClass}`}
            onClick={() => setIsShowing(false)}
          />
          <p className="return-text">back</p>
        </div>
        <div className="header-text flex align-baseline space-center">
          <p className="top-header">Search Results</p>
          <p className="top-header-count">
            {currResults ? `(${currResults.length} players)` : null}
          </p>
        </div>
        <TypeSearcher
          onDataChange={onDataChange}
          currValue={currSort}
          handleAsc={onAscendingToggle}
        />
      </header>
      {isShowing ? (
        result ? ( // SLICING 100 OF PLAYERS FOR EASIER DEVELOPMENT
          <section
            className={`player-info-list ${showClass} flex column align-start space-start`}
            ref={containerRef}
          >
            {currResults.map((playerInfo, index) => {
              return (
                <PlayerInfoPreview
                  key={index}
                  hasBorder={index !== 99}
                  playerInfo={playerInfo}
                  className="player-info-preview"
                  filterAvg={basicFilterAvg}
                />
              );
            })}
          </section>
        ) : (
          <LoadingRing />
        )
      ) : null}
    </div>
  );
};

export default SearchResults;
