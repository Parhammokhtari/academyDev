import { useEffect, useState } from "react";
import MyNavbar from "../../components/navbar/MyNavbar";
import "./Courses.css";
import axios from "axios";
import { Accordion, Alert, Col, Container, Form, Row } from "react-bootstrap";
import { MdCategory } from "react-icons/md";
import { FaSort, FaFilter } from "react-icons/fa";
import CourseItem from "../../components/course/CourseItem";

function Courses() {
  const [courses, setCourses] = useState();
  const [sortType, setSortType] = useState("earliest");
  const [category, setCategory] = useState();
  const [courseState, setCourseState] = useState();
  const [mode, setMode] = useState("sort");

  const [searchInput, setSearchInput] = useState();

  const sortHandler = (e) => {
    setSortType(e.target.id);
    setMode("sort");
  };
  const searchHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
    setMode("category");
  };
  const courseStateHandler = (e) => {
    setCourseState(e.target.value);
    setMode("state");
  };
  const searchClickHandler = () => {
    axios
      .get(
        `http://localhost/react/api/courses/?search=${searchInput}&column=${"teacher"}`
      )
      .then((response) => setCourses(response.data.data));
  };

  const sortByOrderType = (order, column) => {
    axios
      .get(
        `http://localhost/react/api/courses/?order=${order}&column=${column}`
      )
      .then((response) => setCourses(response.data.data));
  };
  const filterCourseByType = (category) => {
    axios
      .get(`http://localhost/react/api/courses/?category=${category}`)
      .then((response) => setCourses(response.data.data));
  };
  const filterCoursesByState = (state) => {
    axios
      .get(`http://localhost/react/api/courses/?state=${state}`)
      .then((response) => setCourses(response.data.data));
  };

  //   useEffect(() => {
  //     if (category === "frontend") filterCourseByType("فرانت اند");
  //     if (category === "backend") filterCourseByType("بک اند");
  //   }, [category, sortType, courseState]);
  //   useEffect(() => {
  //     filterCoursesByState(courseState);
  //   }, [courseState]);

  useEffect(() => {
    if (mode === "sort") {
      if (sortType === "earliest") sortByOrderType("desc", "id");
      else if (sortType === "latest") sortByOrderType("asc", "id");
      else if (sortType === "mostExpensive")
        sortByOrderType("desc", "mainPrice");
      else if (sortType === "cheapest") sortByOrderType("asc", "mainPrice");
    } else if (mode === "state") {
      filterCoursesByState(courseState);
    } else if (mode === "category") {
      if (category === "frontend") filterCourseByType("فرانت اند");
      if (category === "backend") filterCourseByType("بک اند");
    }
  }, [category, sortType, courseState]);
  return (
    <>
      <MyNavbar />
      <Container>
        <div className="searchSection">
          <h1>لیست دوره ها </h1>
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
                        id="latest"
                        label="قدیمی ترین"
                        name="sort"
                        onChange={sortHandler}
                      />
                      <Form.Check
                        type="radio"
                        id="cheapest"
                        label="ارزان ترین"
                        name="sort"
                        onChange={sortHandler}
                      />
                      <Form.Check
                        type="radio"
                        id="mostExpensive"
                        label="گران ترین"
                        name="sort"
                        onChange={sortHandler}
                      />
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
                <div className="filterWrapper">
                  <div className="filterIcon">
                    <MdCategory />
                    <b>دسته بندی</b>
                  </div>
                  <Form>
                    <Form.Check
                      type="checkbox"
                      value={"frontend"}
                      label="فرانت اند"
                      checked={category === "frontend" ? true : false}
                      onChange={categoryHandler}
                    />
                    <Form.Check
                      type="checkbox"
                      value={"backend"}
                      label="بک اند"
                      checked={category === "backend" ? true : false}
                      onChange={categoryHandler}
                    />
                  </Form>
                </div>

                <div className="filterWrapper">
                  <div className="filterIcon">
                    <FaFilter />
                    <b> وضعیت دوره</b>
                  </div>
                  <Form>
                    <Form.Check
                      type="switch"
                      value={"completed"}
                      label="تکمیل شده "
                      checked={courseState === "completed" ? true : false}
                      onChange={courseStateHandler}
                    />
                    <Form.Check
                      type="switch"
                      value={"presell"}
                      label="پیش فروش "
                      checked={courseState === "presell" ? true : false}
                      onChange={courseStateHandler}
                    />
                    <Form.Check
                      type="switch"
                      value={"recording"}
                      label="درحال ضبط"
                      checked={courseState === "recording" ? true : false}
                      onChange={courseStateHandler}
                    />
                  </Form>
                </div>
              </Accordion>
            </Row>
          </Col>
          <Col className="col-12 col-lg-9">
            <Row className="py-4 row-cols-1 row-cols-md-2 row-cols-xl-3  gy-4">
              {courses?.map((course) => {
                return (
                  <Col>
                    <CourseItem key={course?.id} {...course} />
                  </Col>
                );
              })}
            </Row>
            {courses?.length === 0 && (
              <Alert className="py-3  gy-4" variant="warning">
                دوره ای یافت نشد
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Courses;
