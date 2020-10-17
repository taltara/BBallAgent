import React, { useState, useEffect, useRef } from "react";

import TiltButton from "../Components/navigation/TiltButton/TiltButton";
import searchFilters from "../searchFilters";
import PlayerSearchColumn from "../Components/PlayerSearch/PlayerSearchColumn";
import SearchResults from "../Components/PlayerSearch/SearchResults";
import playerSearchService from "../services/playerSearchService";

import Isotope from "isotope-layout";

const PlayerSearch = (props) => {
  let containerRef = useRef({ current: null });

  const { width } = props;
  const [searchFilter, setSearchFilter] = useState({});
  const [currUnits, setCurrUnits] = useState({ length: "cm", weight: "kg" });
  const [searchOpen, setSearchOpen] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    var iso = new Isotope(containerRef.current, {
      layoutMode: "fitRows",
      itemSelector: ".player-search-column",
      fitRows: {
        gutter: 10,
      },
    });
  }, [containerRef.current]);

  const onPlayerSearch = (event) => {
    event.preventDefault();
    // console.log(searchFilter);
    setSearchOpen(true);
    playerSearchService.getPlayersData(searchFilter).then((res) => {
      setTimeout(() => {
        setResult(res);
      }, 1000);
    });
  };

  const onSearchFilterChange = (newData) => {
    setSearchFilter((prevState) => {
      const prevColumn = prevState[newData.id] ? prevState[newData.id] : {};
      const inputName = newData.filter.name;

      return {
        ...prevState,
        [newData.id]: { ...prevColumn, [inputName]: newData.filter.data },
      };
    });
  };
  // console.log(width);
  return (
    <>
      <form
        className="player-search flex align-start space-center"
        onSubmit={onPlayerSearch}
      >
        <section className="search-column-section" ref={containerRef}>
          {searchFilters.getSearchColumns(currUnits).map((column, index) => {
            // console.log(column);
            return (
              <PlayerSearchColumn
                key={index}
                columnData={column}
                onDataChange={onSearchFilterChange}
                columnType={column.type}
                setUnits={setCurrUnits}
                hasSwitch={column.switch}
              />
            );
          })}
        </section>

        <TiltButton
          buttonType="button"
          label="Find Players"
          isLinkToExact={true}
          isTilt={false}
          tiltOptions={{ scale: 1.05 }}
          animation="general"
          onClick={onPlayerSearch}
          buttonClass="tilt-button"
        />
      </form>
      <SearchResults
        isShowing={searchOpen}
        setIsShowing={setSearchOpen}
        result={result}
        searchFilter={searchFilter}
      />
    </>
  );
};

export default PlayerSearch;
