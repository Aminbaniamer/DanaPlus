import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FcPlus } from "react-icons/fc";

function MyNavbar() {
  const expand = "md";
  return (
    <>
      <Navbar style={{ backgroundColor: "#eee" }} key={expand} expand={expand}>
        <Container fluid>
          <Navbar.Brand href="/" className="Parasto fw-bold">
            دانا پلاس
            <span>
              <FcPlus className="mb-3" />
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                دانا پلاس
                <span>
                  <FcPlus className="mb-3" />
                </span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="navbar justify-content-end flex-grow-1 pe-4">
                <NavLink className="nav-link px-4" to="/">
                  خانه
                </NavLink>
                <NavLink className="nav-link px-4" to="/addarticle">
                  ساخت مقاله
                </NavLink>
                <NavLink className="nav-link px-4" to="/articles">
                  همه مقالات
                </NavLink>
                <NavLink className="nav-link px-4" to="/addcourse">
                  ساخت دوره
                </NavLink>
                <NavLink className="nav-link px-4" to="/courses">
                  همه دوره ها
                </NavLink>
                <NavLink className="nav-link px-4" to="/about">
                  درباره ما
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
export default MyNavbar;
