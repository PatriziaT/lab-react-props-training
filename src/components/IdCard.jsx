import "./IdCard.css";

function IdCard(props) {
    return (
      <div>
        <img src={props.picture} />
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth}</p>
      </div>
    );
  }

export default IdCard;