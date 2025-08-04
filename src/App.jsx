import "./App.css";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import AddArticle from "./pages/addArticle/AddArticle";
import Home from "./pages/home/Home";
import Article from "./pages/article/Article";
import EditArticle from "./pages/editarticle/EditArticle";
import Articles from "./pages/articles/Articles";
import Courses from "./pages/courses/Courses";
import Course from "./pages/course/Course";
import AddCourse from "./pages/addcourse/AddCourse";

function App() {
  return (
    <BrowserRouter basename="/DanaPlus">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/addarticle" element={<AddArticle />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/editarticle/:id" element={<EditArticle />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<Course />} />
        <Route path="/addcourse" element={<AddCourse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
