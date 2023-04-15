import "./FilterTag.scss";

function FilterTag(props) {
  return (
    <span
      className="filterTag"
      onClick={() => props.removeFromFilter(props.text)}
    >
      {props.text}
      <span className="filterTag__close">
        {/* <img url="/images/icon-remove.svg" alt="close"></img> */}X
      </span>
    </span>
  );
}

export default FilterTag;
