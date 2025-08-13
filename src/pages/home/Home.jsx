import { Container, Row, Col } from "react-bootstrap";
import ArticleItem from "../../components/article/ArticleItem";
import MyNavbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SwiperBtn from "../../components/swiperbutton/SwiperBtn";
import "./Home.css";
import CourseItem from "../../components/courseitem/CourseItem";

function Home() {
  const [courses, setCourses] = useState([]);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://68690518d5933161d70d2e6b.mockapi.io/data/articles/?page=1&limit=6"
      )
      .then((response) => setArticles(response.data));
    axios
      .get(
        "https://68690518d5933161d70d2e6b.mockapi.io/data/courses/?page=1&limit=6"
      )
      .then((response) => setCourses(response.data));
  }, []);

  return (
    <>
      <MyNavbar />
      <Hero />
      <Container className="mb-5">
        <Row className="cols-xs-12">
          <Col xs={12}>
            <Swiper
              className="swiperStyle"
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              slidesPerView={4}
              spaceBetween={20}
              modules={[Autoplay]}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
            >
              <div className="title-courses">
                <h2 className="fw-bold">جدیدترین دوره ها</h2>
                <SwiperBtn />
              </div>
              {courses.map((course) => (
                <SwiperSlide>
                  <CourseItem {...course} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
        <Row className="cols-xs-12">
          <Col xs={12}>
            <Swiper
              className="swiperStyle"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              slidesPerView={4}
              spaceBetween={20}
              modules={[Autoplay]}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
            >
              <div className="title-articles">
                <h2 className="fw-bold">جدیدترین مقالات</h2>
                <SwiperBtn />
              </div>
              {articles.map((article) => (
                <SwiperSlide>
                  <ArticleItem {...article} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Home;
