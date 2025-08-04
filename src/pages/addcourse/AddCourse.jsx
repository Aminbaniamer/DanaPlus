import { Container } from "react-bootstrap";
import MyNavbar from "../../components/navbar/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FcDataRecovery } from "react-icons/fc";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./addcourse.css";
import Footer from "../../components/footer/Footer";

function AddCourse() {
  let navigate = useNavigate();
  const [course, setCourse] = useState({
    id: "",
    image: "",
    title: "",
    description: "",
    teacher: "",
    studentCount: "",
    mainPrice: "",
    category: "",
    duration: "",
    state: "",
    // progressPercent: "",
  });
  const addHandle = () => {
    axios
      .post("https://68690518d5933161d70d2e6b.mockapi.io/data/courses", course)
      .then(() => {
        Swal.fire({
          title: "دوره با موفقیت اضافه شد",
          icon: "success",
          confirmButtonText: "باشه",
        });
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "خطا!",
          text: "در ارسال دوره مشکلی پیش آمد",
          icon: "error",
        });
      });
  };

  const inputHandler = (e) => {
    setCourse((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <MyNavbar />
      <Container>
        <h2 className="mt-3 text-center text-success fw-bold">
          ساخت دوره جدید
        </h2>
        <Form className="mt-2">
          <Form.Label htmlFor="title">عنوان دوره</Form.Label>
          <Form.Control
            name="title"
            type="text"
            id="title"
            onChange={(e) => {
              inputHandler(e);
            }}
          />
          <Form.Label className="mt-4" htmlFor="image">
            آدرس عکس دوره
          </Form.Label>
          <Form.Control
            name="image"
            type="text"
            id="image"
            onChange={(e) => {
              inputHandler(e);
            }}
          />
          <Form.Label className="mt-4" htmlFor="teacher">
            مدرس دوره
          </Form.Label>
          <Form.Control
            name="teacher"
            type="text"
            id="teacher"
            onChange={(e) => {
              inputHandler(e);
            }}
          />
          <Form.Label className="mt-4" htmlFor="studentCount">
            تعداد دانشجو
          </Form.Label>
          <Form.Control
            name="studentCount"
            type="text"
            id="studentCount"
            onChange={(e) => {
              inputHandler(e);
            }}
          />
          <Form.Label className="mt-4" htmlFor="mainPrice">
            قیمت دوره
          </Form.Label>
          <Form.Control
            name="mainPrice"
            type="text"
            id="mainPrice"
            onChange={(e) => {
              inputHandler(e);
            }}
          />
          <Form.Label className="mt-4" htmlFor="duration">
            مدت زمانی دوره
          </Form.Label>
          <Form.Control
            name="duration"
            type="text"
            id="duration"
            onChange={(e) => {
              inputHandler(e);
            }}
          />
          <Form.Label className="mt-4" htmlFor="state">
            وضعیت دوره
          </Form.Label>
          <Form.Control
            name="state"
            type="text"
            id="state"
            onChange={(e) => {
              inputHandler(e);
            }}
          />
          <Form.Label className="mt-4" htmlFor="description">
            توضیحات دوره
          </Form.Label>
          <Form.Control
            name="description"
            type="text"
            id="description"
            onChange={(e) => {
              inputHandler(e);
            }}
          />
          <Form.Label className="mt-4" htmlFor="category">
            دسته بندی
          </Form.Label>
          <Form.Control
            name="category"
            type="text"
            id="category"
            onChange={(e) => {
              inputHandler(e);
            }}
          />
          <div className="text-center">
            <Button
              onClick={addHandle}
              className="my-5 w-75"
              variant="outline-success"
            >
              ساخت دوره جدید
              <span>
                <FcDataRecovery />
              </span>
            </Button>
          </div>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
export default AddCourse;
