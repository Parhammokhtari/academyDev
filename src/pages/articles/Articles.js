import { useEffect, useState } from "react";
import MyNavbar from "../../components/navbar/MyNavbar";
import "./Articles.css";
import axios from "axios";
import { Accordion, Alert, Col, Container, Form, Row } from "react-bootstrap";
import ArticleItem from "../../components/article/ArticleItem";
import { FaSort } from "react-icons/fa";

function Articles() {
  const [articles, setArticles] = useState();
  const [sortType, setSortType] = useState("earliest");
  const [searchInput, setSearchInput] = useState("");

  const sortHandler = (e) => {
    setSortType(e.target.id);
  };
  const searchHandler = (e) => {
    setSearchInput(e.target.value);
    console.log(searchInput);
  };
  const searchClickHandler = () => {
    axios
      .get(
        `http://localhost/react/api/articles/?search=${searchInput}&column=${"writter"}`
      )
      .then((response) => setArticles(response.data.data));
  };
  const sortByOrderType = (order, column) => {
    axios
      .get(
        `http://localhost/react/api/articles/?order=${order}&column=${column}`
      )
      .then((response) => setArticles(response.data.data));
  };
  useEffect(() => {
    if (sortType == "earliest") sortByOrderType("desc", "id");
    else if (sortType == "latest") sortByOrderType("asc", "id");
    else if (sortType == "longest") sortByOrderType("desc", "readingTime");
    else if (sortType == "shortest") sortByOrderType("asc", "readingTime");
  }, [sortType]);
  return (
    <>
      <MyNavbar />
      <Container>
        <div className="searchSection">
          <h1>لیست مقالات </h1>
          <div className="searchContainer">
            <input
              className="searchInput"
              placeholder="نام نویسنده "
              type="text"
              onChange={searchHandler}
            />
            <button className="searchButton" onClick={searchClickHandler}>
              جستجو
            </button>
          </div>
        </div>
        <Row>
          <Col className="col-12 col-lg-3">
            <Row>
              <Accordion alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <FaSort />
                    <b> مرتب سازی</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Form>
                      <Form.Check
                        type="radio"
                        id="earliest"
                        label="جدید ترین"
                        name="sort"
                        onChange={sortHandler}
                      />

                      <Form.Check
                        type="radio"
                        id="longest"
                        label="طولاتی ترین"
                        name="sort"
                        onChange={sortHandler}
                      />
                      <Form.Check
                        type="radio"
                        id="shortest"
                        label="کوتاه ترین"
                        name="sort"
                        onChange={sortHandler}
                      />
                      <Form.Check
                        type="radio"
                        id="latest"
                        label="قدیمی ترین"
                        name="sort"
                        onChange={sortHandler}
                      />
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Row>
          </Col>
          <Col className="col-12 col-lg-9">
            <Row className="py-4 row-cols-1 row-cols-md-2 row-cols-xl-3  gy-4">
              {articles?.map((article) => {
                return (
                  <Col>
                    <ArticleItem key={article?.id} {...article} />
                  </Col>
                );
              })}
            </Row>
            {articles?.length == 0 && (
              <Alert className="py-3  gy-4" variant="warning">
                مقاله ای یافت نشد
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Articles;
