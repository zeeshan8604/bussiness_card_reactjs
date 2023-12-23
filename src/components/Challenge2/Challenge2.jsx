import React from "react";
import Logo from "../../assets/react-logo2.png";
import "./Challenge2.css";

const Challenge2 = () => {
  return (
    <div>
      <header className="head-content">
        <nav className="nav_1">
          <img className="logo-img" src={Logo} alt="" />
          <h3 className="nav__logotext">ReactFacts</h3>
        </nav>
        <nav className="nav2">
          <h4>React Course - Project 1</h4>
        </nav>
      </header>
      <main>
        <h1 className="main_title">Fun facts about React</h1>
        <ul className="main_facts">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    </div>
  );
};

export default Challenge2;
