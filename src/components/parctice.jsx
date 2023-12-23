import React from "react";
import ME from "../assets/react-logo.jpg";
import "./Practice.css";
const Parctice = () => {
  return (
    <div>
      <header className="head-item">
        <img src={ME} alt="my image" width="40px" />
        <ul className="list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </header>
      <div className="main__content">
        <h1>Fun facts About react</h1>
        <ul>
          <li>Was first release in 2013</li>
          <li>Was originally create by Jordan Walke</li>
          <li>Has over 100K stars of github</li>
          <li>Is maintained my facebook</li>
          <li>Powers thousand of enterprises apps, including mobile apps</li>
        </ul>
      </div>
    </div>
  );
};

export default Parctice;
