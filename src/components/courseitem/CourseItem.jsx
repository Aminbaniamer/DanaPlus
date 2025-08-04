import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BiLogoPocket } from "react-icons/bi";
import { PiStudentBold } from "react-icons/pi";
import { Link } from "react-router-dom";

function CourseItem({
  id,
  image,
  title,
  desciption,
  teacher,
  studentCount,
  mainPrice,
  category,
  duration,
}) {
  return (
    <Card className="py-3 border-1 border-rounded">
      <Card.Img variant="top" src={image} />
      <span
        className="position-absolute top-0 start-0 bg-light px-2 py-1 rounded-end d-flex align-items-center gap-1"
        style={{
          fontSize: "0.9rem",
          fontWeight: "bold",
          zIndex: 2,
          color: "#335",
        }}
      >
        <PiStudentBold size={18} />
        {studentCount}
      </span>
      <Card.Body>
        <Card.Title className="fw-bold fs-5">{title}</Card.Title>
        <Card.Text className="text-muted">{desciption}</Card.Text>
        <div className="d-flex flex-column gap-2 mt-3">
          <Button
            className="w-100 d-flex justify-content-center align-items-center gap-2"
            as={Link}
            to={`/courses/${id}`}
            variant="success"
          >
            ثبت نام
            <BiLogoPocket size={18} />
          </Button>
          <div className="text-center fw-bold text-dark">تومان {mainPrice}</div>
        </div>
        <div className="d-flex justify-content-between my-3">
          <span>مدرس: {teacher}</span>
          <span>مدت: {duration}</span>
        </div>
      </Card.Body>
      <span className="badge bg-info position-absolute bottom-0 end-0 mt-5">
        {category}
      </span>
    </Card>
  );
}

export default CourseItem;
