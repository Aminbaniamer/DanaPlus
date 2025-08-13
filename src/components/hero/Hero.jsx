import { Col, Container, Row } from "react-bootstrap";
import "./Hero.css";
import heroImage from "../../assets/images/hero.svg";
import HeroBox from "../heroBox/HeroBox";
import { FaUser } from "react-icons/fa6";
import { TbArticleFilled } from "react-icons/tb";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { VscCodeReview } from "react-icons/vsc";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  let heroText = [
    {
      icon: [<FaUser />],
      title: "تعداد دانشجو",
      count: 3555,
    },
    {
      icon: [<VscCodeReview />],
      title: "تعداد مدرس",
      count: 186,
    },
    {
      icon: [<GiPoliceOfficerHead />],
      title: "تعداد نویسنده",
      count: 258,
    },
    {
      icon: [<TbArticleFilled />],
      title: "تعداد دوره",
      count: 100,
    },
  ];
  return (
    <Container fluid>
      <Row
        className="d-flex justify-content-around"
        style={{ backgroundColor: "#eee" }}
      >
        <Col
          className="d-flex justify-content-center"
          data-aos="fade-left"
          sm="12"
          md="6"
          lg="3"
        >
          <img src={heroImage} className="mt-5 img-fluid" />
        </Col>
        <Col sm="12" md="6" lg="4">
          <h2 className="my-5 fw-bold text-center">
            آمارها باعث افتخار ما هستند
          </h2>
          <Row className="g-3">
            {heroText.map((item) => (
              <Col className="d-flex justify-content-center" md={6} sm={12}>
                <HeroBox {...item} />
              </Col>
            ))}
            <p className="text-end fs-4 fw-bold mt-4">
              <button type="button" className="hero-btn fw-bold fs-4">
                شروع آموزش
              </button>
            </p>
          </Row>
        </Col>
      </Row>
      <Row>
        <svg
          className="p-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#eee"
            fillOpacity="1"
            d="M0,256L40,229.3C80,203,160,149,240,154.7C320,160,400,224,480,213.3C560,203,640,117,720,96C800,75,880,117,960,138.7C1040,160,1120,160,1200,133.3C1280,107,1360,53,1400,26.7L1440,0L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </Row>
    </Container>
  );
}
export default Hero;
