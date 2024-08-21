import "./HeroBox.css";
import CountUp from "react-countup";

function HeroBox({ title, children, count }) {
  return (
    <div className="heroBoxContainer">
      <div className="heroBoxHeader">
        {children}
        <b className="headerBoxTitle">{title} </b>
      </div>
      <p className="heroBoxCount">
        <CountUp
          start={0}
          end={count}
          duration={3.5}
          delay={0.5}
          separator=""
        />
      </p>
    </div>
  );
}

export default HeroBox;
