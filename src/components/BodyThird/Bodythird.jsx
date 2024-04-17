import React from "react";
import "./Bodythird.css";
import girlsimg from './girls-img.jpg';
const Bodythird = () => {
  return (
    <div className="Bodythird-main-div">
      <div className="Bodythird-text-div">
        <h2>Where do we run our training courses?</h2>
        <p>
          In minim labore eu cillum sint. Aliquip mollit enim labore aliquip qui
          adipisicing quis laboris. Elit non reprehenderit aliqua dolor aute
          ullamco commodo. Non quis aliquip eu velit mollit tempor officia elit
          incididunt eiusmod amet magna. Consectetur exercitation reprehenderit
          consequat anim commodo commodo nulla velit in consequat elit.
        </p>
        <button>Contact us to find out more</button>
      </div>
      <div className="thirdbody-img"> 
        <img src={girlsimg} alt="girls-img" className="girls-img" />
      </div>
    </div>
  );
};

export default Bodythird;
