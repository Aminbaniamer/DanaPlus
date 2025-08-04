import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { FcDataConfiguration } from "react-icons/fc";
import { Container } from "react-bootstrap";
import MyNavbar from "../../components/navbar/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "../../components/footer/Footer";

function EditArticle() {
  let navigate = useNavigate();
  let { id } = useParams();
  const [articledata, setArticleData] = useState({
    image: "",
    title: "",
    description: "",
    writter: "",
    category: "",
    readingTime: "",
  });
  useEffect(() => {
    axios
      .get(`https://68690518d5933161d70d2e6b.mockapi.io/data/articles/${id}`)
      .then((response) => {
        const data = response.data;
        setArticleData(data);
      })
      .catch((error) => console.log(error, "خطا در دریافت مقاله"));
  }, [id]);
  const inputeditHandler = (e) => {
    setArticleData({ ...articledata, [e.target.name]: e.target.value });
  };
  const editBtnHandler = () => {
    axios
      .put(
        `https://68690518d5933161d70d2e6b.mockapi.io/data/articles/${id}`,
        articledata
      )
      .then(() => {
        Swal.fire({
          title: "مقاله با موفقیت ویرایش شد",
          icon: "success",
          confirmButtonText: "باشه",
        });
        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          title: "خطا!",
          text: "در ادیت مقاله مشکلی پیش امد",
          icon: "error",
        });
      });
  };
  return (
    <>
      <MyNavbar />
      <Container>
        <Form>
          <Form.Label htmlFor="title">عنوان مقاله</Form.Label>
          <Form.Control
            name="title"
            type="text"
            id="title"
            onChange={(e) => {
              inputeditHandler(e);
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
              inputeditHandler(e);
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
              inputeditHandler(e);
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
              inputeditHandler(e);
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
              inputeditHandler(e);
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
              inputeditHandler(e);
            }}
          />
          <div className="text-center">
            <Button
              onClick={editBtnHandler}
              className="my-5 w-75"
              variant="outline-success"
            >
              ادیت مقاله
              <span>
                <FcDataConfiguration />
              </span>
            </Button>
          </div>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
export default EditArticle;
