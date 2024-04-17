import React from "react";
import "./Bodyfirst.css";
import officeimg from "./blurred-office.jpg";
const Bodyfirst = () => {
  const myStyle = {
    backgroundImage: `url(${officeimg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "70vh",
  };
  return (
    <div style={myStyle} className="bodyfirst">
      <h1 className="firsth1">Be 100% Effective! Online and Classroom</h1>
      <h1 className="secondh1">
        Traing Courses, <span>From Only €25!</span>
      </h1>
      <p className="body-p">
        We deliver market-leading eLearning and traditional classroom training
        in four key categories: Change Management; Professional Development;
        Management Develpment; Business Improvement.
      </p>
      <div className="btn_div">
        <button className="bodyfirst-btn">View Courses</button>
        <button className="bodyfirst-btn">Contact Us</button>
      </div>
    </div>
  );
};

export default Bodyfirst;
