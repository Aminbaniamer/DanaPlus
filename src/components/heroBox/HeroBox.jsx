import "./HeroBox.css";
import CountUp from "react-countup";

function HeroBox({ icon, title, count }) {
  return (
    <>
      <div className="heroBoxContainer">
        <div className="heroBoxHeader">
          <h3 className="fw-bold text-center">
            <span className="mx-2">{icon}</span>
            {title}
          </h3>
        </div>
        <div className="heroBoxBody">
          <h3 className="text-center">
            <CountUp end={count} decimal="," separator="" />
          </h3>
        </div>
      </div>
    </>
  );
}
export default HeroBox;
