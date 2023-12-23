import React from "react";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

const footer = () => {
  return (
    <div className="footer">
      <FaSquareTwitter className="footer__logo" />
      <FaFacebookSquare className="footer__logo" />
      <FaSquareInstagram className="footer__logo" />
      <FaSquareGithub className="footer__logo" />
    </div>
  );
};

export default footer;
