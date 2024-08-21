import Card from "react-bootstrap/Card";
import { BiTimeFive } from "react-icons/bi";
import { TiArrowLeftThick } from "react-icons/ti";
import "./ArticleItem.css";
import { Link } from "react-router-dom";
function ArticleItem({
  id,
  image,
  title,
  description,
  writter,
  category,
  readingTime,
}) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="py-2">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={`/article/${id}`}>
          <span className="read-more">
            <span>ادامه مقاله</span>
            <TiArrowLeftThick size="25px" />
          </span>
        </Link>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center py-3">
        <span>نویسنده : {writter}</span>
        <span>
          {" "}
          <BiTimeFive /> {readingTime} دقیقه
        </span>
      </Card.Footer>
    </Card>
  );
}

export default ArticleItem;
