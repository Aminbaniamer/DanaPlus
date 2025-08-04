import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import MyNavbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function Article() {
  const [articledata, setArticleData] = useState(null);
  let { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://68690518d5933161d70d2e6b.mockapi.io/data/articles/${id}`)
      .then((response) => {
        setArticleData(response.data);
      });
  }, [id]);

  const deleteHandler = () => {
    Swal.fire({
      title: "مطمِئنی میخوای حذفش کنی ؟",
      showDenyButton: true,
      confirmButtonText: "بله ",
      denyButtonText: "نه بیخیال ",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://68690518d5933161d70d2e6b.mockapi.io/data/articles/${id}`
          )
          .then(() => {
            Swal.fire("حذف شد");
            navigate("/");
          });
      } else if (result.isDenied) {
        Swal.fire("حذف نشد");
      }
    });
  };
  if (!articledata) {
    return (
      <div className="loader-wrapper">
        <p className="fw-bold fs-5">در حال بارگذاری...</p>
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <MyNavbar />
      <Container className="mt-5">
        <Row className="align-items-center">
          <Col lg="3" md="4" sm="12">
            <Card>
              <Card.Img variant="top" src={articledata.image} />
              <Card.Body>
                <Card.Title>
                  <b>{articledata.title}</b>
                </Card.Title>
                <div className="infocontainer d-flex justify-content-between mt-2">
                  <p>نویسنده : {articledata.writter}</p>
                  <p>مدت زمان : {articledata.readingTime}</p>
                </div>
              </Card.Body>
              <span className="badge bg-info">{articledata.category}</span>
            </Card>
            <Button
              as={Link}
              to={`/editarticle/${articledata.id}`}
              className="mt-3 w-100"
              variant="warning"
            >
              ادیت مقاله
            </Button>
            <Button
              onClick={deleteHandler}
              className="mt-3 w-100"
              variant="danger"
            >
              حذف مقاله
            </Button>
          </Col>
          <Col>
            <h3 className="mt-5 fw-bold">{articledata.title}</h3>
            <div>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </div>
            <div className="my-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </div>
            <div>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Article;
