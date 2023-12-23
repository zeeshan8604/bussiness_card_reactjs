import React from "react";
import MyImage from "../../assets/my-image.jpg";
import "./Soloproject1.css";
import { MdOutlineMail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
const Hearder = () => {
  return (
    <div>
      <div className="top__div">
        <img src={MyImage} alt="" width="100px" className="my__img" />
        <h1 className="My__name">Zeeshan Ahmed</h1>
        <h5 className="My__pro">Fullsatck developer</h5>
        <a
          href="https://zeeshan8604.github.io/web.portfolio/"
          className="My__website"
        >
          My website
        </a>
      </div>
      <div className="buttons">
        <a href="#" className="btn email">
          <MdOutlineMail className="logo" />
          Email
        </a>
        <a href="#" className="btn linkedin">
          <CiLinkedin className="logo" />
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Hearder;
