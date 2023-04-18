import "./Filter.scss";

function Filter(props) {
  return (
    <div className="filterContainer">
      {props.children}
      <span
        className="filterContainer__clear"
        onClick={() => {
          props.onClearFilter();
        }}
      >
        clear
      </span>
    </div>
  );
}

export default Filter;
