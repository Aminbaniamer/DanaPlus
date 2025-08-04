import MyNavbar from "../../components/navbar/Navbar";
import { Container, Row, Col, Form, FormCheck, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import CourseItem from "../../components/courseitem/CourseItem";
import { MdCategory } from "react-icons/md";
import { PiCherriesDuotone } from "react-icons/pi";
import "./courses.css";
import Footer from "../../components/footer/Footer";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [sort, setSort] = useState("earliest");
  const [category, setCategory] = useState("");
  const [courseState, setCourseState] = useState("");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticlebyOrder("desc", "id");
  }, []);

  useEffect(() => {
    if (search.trim()) {
      axios
        .get(
          `https://68690518d5933161d70d2e6b.mockapi.io/data/courses/search=${search}`
        )
        .then((response) => {
          setCourses(response.data);
          setIsLoading(false);
        });
    } else {
      if (sort == "earliest") {
        getArticlebyOrder("desc", "id");
      } else if (sort == "oldest") {
        getArticlebyOrder("asc", "id");
      } else if (sort == "expensivest") {
        getArticlebyOrder("desc", "mainPrice");
      } else if (sort == "cheapest") {
        getArticlebyOrder("asc", "mainPrice");
      }
    }
  }, [sort]);
  useEffect(() => {
    axios
      .get(
        `https://68690518d5933161d70d2e6b.mockapi.io/data/courses/?category=${category}`
      )
      .then((response) => {
        setCourses(response.data);
        setIsLoading(false);
      });
  }, [category]);
  useEffect(() => {
    axios
      .get(
        `https://68690518d5933161d70d2e6b.mockapi.io/data/courses/?state=${courseState}`
      )
      .then((response) => {
        setCourses(response.data);
        setIsLoading(false);
      });
  }, [courseState]);
  const searchHandler = () => {
    axios
      .get(
        `https://68690518d5933161d70d2e6b.mockapi.io/data/courses/?search=${search}`
      )
      .then((response) => {
        setCourses(response.data);
        setIsLoading(false);
      });
  };

  const sortHandler = (e) => {
    setSort(e.target.id);
  };
  const getArticlebyOrder = (order, column) => {
    axios
      .get(
        `https://68690518d5933161d70d2e6b.mockapi.io/data/courses/?sortby=${column}&order=${order}`
      )
      .then((response) => {
        setCourses(response.data);
        setIsLoading(false);
      });
  };
  const inputSearchHandler = (e) => {
    setSearch(e.target.value);
  };
  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };
  const courseStateHandler = (e) => {
    setCourseState(e.target.value);
  };
  const clearFilters = () => {
    setCategory("");
    setCourseState("");
    setSort("earliest");
    setSearch("");
  };
  if (isLoading) {
    return (
      <>
        <MyNavbar />
        <div className="loader-wrapper">
          <div className="text-center mb-4">
            <p className="fw-bold fs-5">در حال بارگذاری...</p>
          </div>
          <div className="loader"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <MyNavbar />
      <Container className="my-5">
        <Row className="justify-content-between mb-4">
          <Col lg="3">
            <h2 className="fw-bold">لیست دوره ها</h2>
            <Accordion className="mt-4" defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>مرتب سازی </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Form.Check
                      type="radio"
                      id="earliest"
                      name="sort"
                      label="جدیدترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="oldest"
                      name="sort"
                      label="قدیمی ترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="expensivest"
                      name="sort"
                      label="گران ترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="cheapest"
                      name="sort"
                      label="ارزان ترین"
                      onChange={sortHandler}
                    />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="filterwrapper">
              <div className="filterIcon">
                <MdCategory />
                <b className="mx-1">دسته بندی</b>
              </div>
              <Form>
                <FormCheck
                  label="فرانت اند"
                  type="checkbox"
                  value="فرانت اند"
                  onChange={categoryHandler}
                  checked={category == "فرانت اند" ? true : false}
                />
                <FormCheck
                  label="بک اند"
                  type="checkbox"
                  value="بک اند"
                  onChange={categoryHandler}
                  checked={category == "بک اند" ? true : false}
                />
              </Form>
            </div>
            <div className="filterwrapper">
              <div className="filterIcon">
                <PiCherriesDuotone />
                <b className="mx-1">وضعیت</b>
              </div>
              <Form>
                <FormCheck
                  label="تکمیل شده"
                  type="switch"
                  value="completed"
                  onChange={courseStateHandler}
                  checked={courseState == "completed" ? true : false}
                />
                <FormCheck
                  label="پیش فروش"
                  type="switch"
                  value="presell"
                  onChange={courseStateHandler}
                  checked={courseState == "presell" ? true : false}
                />
                <FormCheck
                  label="در حال ضبط"
                  type="switch"
                  value="recording"
                  onChange={courseStateHandler}
                  checked={courseState == "recording" ? true : false}
                />
              </Form>
            </div>
            <Button variant="warning" className="mt-4" onClick={clearFilters}>
              ریست فیلترها
            </Button>
          </Col>
          <Col lg="9" sm="12">
            <Row className="mt-4 justify-content-end">
              <div className="text-end">
                <input
                  onChange={inputSearchHandler}
                  type="text"
                  className="searchInput"
                />
                <button
                  onClick={searchHandler}
                  className="searchBtn text-center"
                >
                  جستجو
                </button>
              </div>
            </Row>
            <Row className="mt-5">
              {courses.map((course) => (
                <Col
                  className="g-4"
                  xs="12"
                  sm="8"
                  md="6"
                  lg="4"
                  key={course.id}
                >
                  <CourseItem {...course} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Courses;
