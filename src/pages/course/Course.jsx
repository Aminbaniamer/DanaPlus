import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import MyNavbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function Course() {
  const [course, setCourse] = useState();
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://68690518d5933161d70d2e6b.mockapi.io/data/courses/${id}`)
      .then((response) => setCourse(response.data));
  }, [id]);
  if (!course) {
    return (
      <Container>
        <div class="loader"></div>
      </Container>
    );
  }
  return (
    <>
      <MyNavbar />
      <Container>
        <Row>
          <Col>
            <Card style={{ marginTop: "20px", width: "35rem" }}>
              <Card.Img variant="top" src={course?.image} />
              <Card.Body>
                <Card.Title className="fw-bold">{course?.title}</Card.Title>
                <Card.Text>{course?.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>مدرس دوره : {course?.teacher}</ListGroup.Item>
                <ListGroup.Item>
                  تعداد دانشجویان دوره : {course?.studentCount}
                </ListGroup.Item>
                <ListGroup.Item>
                  مدت زمان دوره : {course?.duration}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col>
            <ListGroup className="mt-4">
              <ListGroup.Item className="text-center fs-2">
                <p>قیمت دوره :</p>
                <b>{course?.mainPrice} تومان</b>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className="w-100" variant="success">
                  خرید دوره
                </Button>
              </ListGroup.Item>
            </ListGroup>
            <h4 className="mt-4 fw-bold">سرفصل های دوره</h4>
            <ListGroup className="mt-4">
              <ListGroup.Item>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </ListGroup.Item>
              <ListGroup.Item>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </ListGroup.Item>
              <ListGroup.Item>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </ListGroup.Item>
              <ListGroup.Item>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </ListGroup.Item>
              <ListGroup.Item>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Course;
