import "./Tag.scss";

function Tag(props) {
  return (
    <span className="tag" onClick={() => props.addToFilter(props.text)}>
      {props.text}
    </span>
  );
}

export default Tag;
