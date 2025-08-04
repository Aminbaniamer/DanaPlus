import MyNavbar from "../../components/navbar/Navbar";
import { Container, Row, Col, Form, FormCheck, Button } from "react-bootstrap";
import ArticleItem from "../../components/article/ArticleItem";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Articles.css";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../../components/footer/Footer";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [sort, setSort] = useState("earliest");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticlebyOrder("desc", "id");
  }, []);

  useEffect(() => {
    if (search.trim()) {
      axios
        .get(
          `https://68690518d5933161d70d2e6b.mockapi.io/data/articles/?search=${search}`
        )
        .then((response) => {
          setArticles(response.data);
          setIsLoading(false);
        });
    } else {
      if (sort == "earliest") {
        getArticlebyOrder("desc", "id");
      } else if (sort == "oldest") {
        getArticlebyOrder("asc", "id");
      } else if (sort == "longest") {
        getArticlebyOrder("desc", "readingTime");
      } else if (sort == "shortest") {
        getArticlebyOrder("asc", "readingTime");
      }
    }
  }, [sort]);
  useEffect(() => {
    axios
      .get(
        `https://68690518d5933161d70d2e6b.mockapi.io/data/articles/?category=${category}`
      )
      .then((response) => {
        setArticles(response.data);
        setIsLoading(false);
      });
  }, [category]);
  const searchHandler = () => {
    axios
      .get(
        `https://68690518d5933161d70d2e6b.mockapi.io/data/articles/?search=${search}`
      )
      .then((response) => {
        setArticles(response.data);
        setIsLoading(false);
      });
  };

  const sortHandler = (e) => {
    setSort(e.target.id);
  };
  const getArticlebyOrder = (order, column) => {
    axios
      .get(
        `https://68690518d5933161d70d2e6b.mockapi.io/data/articles/?sortBy=${column}&order=${order}`
      )
      .then((response) => {
        setArticles(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert("مقاله ای دریافت نشد");
      });
  };

  const inputSearchHandler = (e) => {
    setSearch(e.target.value);
  };
  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };
  const clearFilters = () => {
    setCategory("");
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
            <h2 className="fw-bold">لیست مقالات</h2>
            <Accordion className="mt-4" defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>مرتب سازی</Accordion.Header>
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
                      id="longest"
                      name="sort"
                      label="طولانی ترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="shortest"
                      name="sort"
                      label="کوتاه ترین"
                      onChange={sortHandler}
                    />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="0">
                <Accordion.Header>دسته بندی</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <FormCheck
                      label="تکنولوژی"
                      type="checkbox"
                      value="تکنولوژی"
                      onChange={categoryHandler}
                      checked={category == "تکنولوژی" ? true : false}
                    />
                    <FormCheck
                      label="هوش مصنوعی"
                      type="checkbox"
                      value="هوش مصنوعی"
                      onChange={categoryHandler}
                      checked={category == "هوش مصنوعی" ? true : false}
                    />
                    <FormCheck
                      label="مالی و سرمایه گذاری"
                      type="checkbox"
                      value="مالی و سرمایه گذاری"
                      onChange={categoryHandler}
                      checked={category == "مالی و سرمایه گذاری" ? true : false}
                    />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Button variant="warning" className="mt-4" onClick={clearFilters}>
              ریست فیلترها
            </Button>
          </Col>
          <Col lg="9" sm="12">
            <Row className="justify-content-end mt-4">
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
            <Row className="mt-5 g-3">
              {articles.map((article) => (
                <Col xs="12" md="6" lg="4" key={article.id}>
                  <ArticleItem {...article} />
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
export default Articles;
