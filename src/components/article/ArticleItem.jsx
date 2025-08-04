import "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FcLeft } from "react-icons/fc";
import "./ArticleItem.css";
import { Link } from "react-router-dom";

function ArticleItem(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>
          <b>{props.title}</b>
        </Card.Title>
        <Card.Text>{props.desciption}</Card.Text>
        <Link className="link-btn" to={`/article/${props.id}`}>
          ادامه مقاله
        </Link>
        <span>
          <FcLeft />
        </span>
        <div className="infocontainer d-flex justify-content-between mt-2">
          <p>نویسنده : {props.writter}</p>
          <p>مدت زمان : {props.readingTime}</p>
        </div>
      </Card.Body>
      <span className="badge bg-info">{props.category}</span>
    </Card>
  );
}

export default ArticleItem;
