import "./FilterTag.scss";
import img from "./icon-remove.svg";

function FilterTag(props) {
  return (
    <span className="filterTag">
      {props.text}
      <span
        className="filterTag__close"
        onClick={() => props.removeFromFilter(props.text)}
      >
        <img src={img} alt="close"></img>
      </span>
    </span>
  );
}

export default FilterTag;
