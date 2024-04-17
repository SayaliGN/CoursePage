import React from "react";
import "./Bodysecond.css";
import SixSigma from "./Six-sigma.jpeg";
const Bodysecond = () => {
  return (
    <div class="bodysecond-container">
      <div class="bodysecond-text-div">
        <h2>Essential Guide to Lean Six Sigma </h2>
        <p>
          lorem iEsse esse pariatur aliqua exercitation ad eiusmod laborum in
          duis. Reprehenderit anim pariatur eiusmod reprehenderit ad. Labore ex
          magna aute enim veniam exercitation dolore ut veniam dolore. Nulla
          proident ea aliquip in excepteur. Deserunt adipisicing eu amet tempor
          eiusmod adipisicing est occaecat nisi anim est ad.
        </p>
        <button>Buy on Amazon</button>
      </div>
      <div class="bodysecond-img-div">
        <img src={SixSigma} alt="Six sigma img" className="six-sigma-img" />
      </div>
    </div>
  );
};

export default Bodysecond;
