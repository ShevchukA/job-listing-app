import "../label/Label.scss";

function Label(props) {
  let classes, content;
  if (props.type === "new") {
    classes = "label label--new";
    content = "new!";
  }

  if (props.type === "featured") {
    classes = "label label--featured";
    content = "featured";
  }

  return <span className={classes}>{content}</span>;
}

export default Label;
