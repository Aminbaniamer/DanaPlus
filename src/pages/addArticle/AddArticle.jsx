import { Container } from "react-bootstrap";
import MyNavbar from "../../components/navbar/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FcDataRecovery } from "react-icons/fc";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./addArticle.css";

function AddArticle() {
  const [articleData, setArticleData] = useState({
    image: "",
    title: "",
    description: "",
    writter: "",
    category: "",
    readingTime: "",
  });
  let navigate = useNavigate();
  const addHandle = () => {
    axios
      .post(
        "https://68690518d5933161d70d2e6b.mockapi.io/data/articles",
        articleData
      )
      .then(() => {
        Swal.fire({
          title: "مقاله با موفقیت اضافه شد",
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
          text: "در ارسال مقاله مشکلی پیش آمد",
          icon: "error",
        });
      });
  };
  const inputHandler = (e) => {
    setArticleData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <MyNavbar />
      <h2 className="mt-3 text-center text-success fw-bold">ساخت مقاله جدید</h2>
      <Container>
        <Form>
          <Form.Label htmlFor="title">عنوان مقاله</Form.Label>
          <Form.Control
            name="title"
            type="text"
            id="title"
            onChange={(e) => {
              inputHandler(e);
            }}
          />
          <Form.Label className="mt-4" htmlFor="image">
            آدرس عکس مقاله
          </Form.Label>
          <Form.Control
            name="image"
            type="text"
            id="image"
            onChange={(e) => {
              inputHandler(e);
            }}
          />
          <Form.Label className="mt-4" htmlFor="writter">
            نویسنده
          </Form.Label>
          <Form.Control
            name="writter"
            type="text"
            id="writter"
            onChange={(e) => {
              inputHandler(e);
            }}
          />
          <Form.Label className="mt-4" htmlFor="readingTime">
            مدت زمان
          </Form.Label>
          <Form.Control
            name="readingTime"
            type="text"
            id="readingTime"
            onChange={(e) => {
              inputHandler(e);
            }}
          />
          <Form.Label className="mt-4" htmlFor="description">
            توضیحات مقاله
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
              ساخت مقاله
              <span>
                <FcDataRecovery />
              </span>
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}
export default AddArticle;
