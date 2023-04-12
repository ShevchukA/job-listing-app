import "./Card.scss";

function Card(props) {
  const {
    id,
    company,
    new: newItem,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = props.data;

  return <div className="card">{company}</div>;
}

export default Card;
