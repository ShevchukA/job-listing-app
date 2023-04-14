import "./Card.scss";
import Tag from "../tag/Tag";
import Label from "../label/Label";

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

  const tags = [role, level, ...languages, ...tools];

  return (
    <div className="card">
      <div className="card__logo">
        <img src={logo}></img>
      </div>
      <div className="card__container">
        <div className="card__infoArea">
          <div className="card__companyName">
            {company}
            {newItem && <Label type="new" />}
            {featured && <Label type="featured" />}
          </div>
          <div className="card__positionName">{position}</div>
          <div className="card__positionInfo">
            {postedAt} {contract} {location}
          </div>
        </div>
        <div className="card__tagsArea">
          {tags.map((tag) => (
            <Tag text={tag} addToFilter={props.addToFilter} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
