import "./App.scss";
import Card from "../card/Card";
import Filter from "../filter/Filter";
import Tag from "../tag/Tag";
import Data from "../../data/data.json";
import { useState } from "react";

function App() {
  const [listOfCards, setListOfCards] = useState(Data);
  const [filterList, setFilterList] = useState(new Set());

  function addFilter(text) {
    const newFilter = new Set([...filterList, text]);
    setFilterList(newFilter);
    setListOfCards([...listOfCards].filter((card) => newFilter.has(card.role)));
  }

  function displayCards(list, filterList) {
    if (filterList.size > 0) {
      list
        .filter((item) => filterList.has(item))
        .map((card) => (
          <Card key={card.id} data={card} addToFilter={addFilter} />
        ));
    } else {
      list.map((card) => (
        <Card key={card.id} data={card} addToFilter={addFilter} />
      ));
    }
  }

  return (
    <div className="app">
      <header className="app__header"></header>
      {filterList.size > 0 && (
        <Filter>
          {[...filterList].map((item, i) => (
            <Tag key={i} text={item} />
          ))}
        </Filter>
      )}
      <div className="app__container">
        {listOfCards.map((card) => (
          <Card key={card.id} data={card} addToFilter={addFilter} />
        ))}
        {/* {displayCards(listOfCards, filterList)} */}
      </div>
      <div className="app__attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
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
