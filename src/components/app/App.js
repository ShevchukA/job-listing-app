import "./App.scss";
import Card from "../card/Card";
import Filter from "../filter/Filter";
import Tag from "../tag/Tag";
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
    setFilterList(newFilter);
    setListOfCards(
      [...listOfCards].filter((card) =>
        //возвращаем карточку, если все тэги фильтра есть в тегах карточки
        [...newFilter].every((item) => card.tags.includes(item))
      )
    );
  }

  function removeFromFilter(text) {}

  return (
    <div className="app">
      <header className="app__header"></header>
      {filterList.size > 0 && (
        <Filter>
          {[...filterList].map((item, i) => (
            <FilterTag key={i} text={item} />
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
