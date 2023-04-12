import "./Card.scss";

function Card(props) {
  const {
    company,
    logo,
    new: newItem, //change name of property
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages, //array
    tools, //array
  } = props.data;

  return (
    <div className="card">
      <div className="card__logo">
        <img src={logo}></img>
      </div>
      <div className="card__container">
        <div className="card__infoArea">
          <div className="card__companyName">{company}</div>
          <div className="card__positionName">
            <a>{position}</a>
          </div>
          <div className="card__positionInfo">
            {postedAt} {contract} {location}
          </div>
        </div>
        <div className="card__tagsArea">
          {role} {level} {languages} {tools}
        </div>
      </div>
    </div>
  );
}

export default Card;
