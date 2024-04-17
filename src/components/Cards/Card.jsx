import React from "react";
import './Card.css';

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-content">
            <h3 className="card-h3">Online Training Courses</h3>
            <p className="card-p">learn at your own time & pace, anywhere in the world,with the interactive eLearning.</p>
            <a href="" class="btn-link">View All</a>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
            <h3 className="card-h3">Classroom (face to face) Training</h3>
            <p className="card-p">open & in-house classroom courses designed and delivered by Lean Six Sigma experts.</p>
            <a href="" class="btn-link">View Availavle Courses</a>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
            <h3 className="card-h3">eLearning Development</h3>
            <p className="card-p">We're also experts in writing, designing and developing courses from the ground up</p>
            <a href="" class="btn-link">Find Out More</a>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
            <h3 className="card-h3">Consultancy Services</h3>
            <p className="card-p">Our approach is practical, proven, and focused on effectively transferring our knowledge and skills</p>
            <a href="" class="btn-link">See How We Can Help</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
