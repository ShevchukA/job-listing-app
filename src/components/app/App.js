import "./App.scss";
import Card from "../card/Card";
import Filter from "../filter/Filter";
import Data from "../../data/data.json";

let filter = true;

function App() {
  return (
    <div className="app">
      <header className="app__header"></header>
      {filter && <Filter />}
      <div className="app__container">
        {Data.map((item) => (
          <Card key={item.id} data={item} />
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
