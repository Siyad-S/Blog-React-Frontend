import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer_child">
      <div className="footer_btn_div">
        <button className="footer_btn">
          <FontAwesomeIcon icon={faAnglesLeft} />
          <p>Previous</p>
        </button>
        <button className="footer_btn">
          <p>Next</p>
          <FontAwesomeIcon icon={faAnglesRight} />
        </button>
      </div>
      <div className="footer_caption">
        <p>Created by Siyad</p>
      </div>
    </div>
  );
};

export default Footer;
