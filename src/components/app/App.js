import "./App.scss";
import Card from "../card/Card";
import Filter from "../filter/Filter";

let filter = true;

function App() {
  return (
    <div className="app">
      <header className="app__header">HEADER</header>
      {filter && <Filter />}
      <div className="app__container">
        <Card />
      </div>
    </div>
  );
}

export default App;
