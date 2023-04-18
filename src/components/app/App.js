import "./App.scss";
import Card from "../card/Card";
import Filter from "../filter/Filter";
import FilterTag from "../filterTag/FilterTag";
import Data from "../../data/data.json";
import { useState } from "react";

function App() {
  const data = structuredClone(Data);
  data.forEach((item) => {
    item.tags = [item.role, item.level, ...item.languages, ...item.tools];
  });

  const [listOfCards, setListOfCards] = useState(data);
  const [filterList, setFilterList] = useState(new Set());

  function addFilter(text) {
    const newFilter = new Set([...filterList, text]);
    displayFilteredCards(newFilter);
  }

  function removeFilter(text) {
    const newFilter = new Set([...filterList].filter((item) => item !== text));
    displayFilteredCards(newFilter);
  }

  function clearFilter() {
    const newFilter = new Set();
    displayFilteredCards(newFilter);
  }

  function displayFilteredCards(newFilter) {
    setFilterList(newFilter);
    setListOfCards(
      data.filter((card) =>
        //chose those cards wich have all tags from filter
        [...newFilter].every((item) => card.tags.includes(item))
      )
    );
  }

  return (
    <div className="app">
      <header className="app__header"></header>
      {/* if filter is not empty than show filter field with tags */}
      {filterList.size > 0 && (
        <Filter onClearFilter={clearFilter}>
          {[...filterList].map((item, i) => (
            <FilterTag key={i} text={item} removeFromFilter={removeFilter} />
          ))}
        </Filter>
      )}
      <div className="app__container">
        {listOfCards.map((card) => (
          <Card key={card.id} data={card} addToFilter={addFilter} />
        ))}
      </div>
      <div className="app__attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/ShevchukA">
          Anton Shevchuk
        </a>
        .
      </div>
    </div>
  );
}

export default App;
