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
    postedAt,
    contract,
    location,
    tags,
  } = props.data;

  return (
    <div className="card">
      <div className="card__logo">
        <img src={logo} alt="logo"></img>
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
            {postedAt}
            <span>&#x2E31;</span>
            {contract}
            <span>&#x2E31;</span>
            {location}
          </div>
        </div>
        <div className="card__tagsArea">
          {tags.map((tag, i) => (
            <Tag key={i} text={tag} addToFilter={props.addToFilter} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
