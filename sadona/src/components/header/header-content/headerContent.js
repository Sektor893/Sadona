import React from "react";
import "./headerContent.scss";
import facebook from "../../../assets/Icon zocial-facebook.svg";
import instagram from "../../../assets/Icon simple-instagram.svg";

const headerContent = () => {
  return (
    <>
      <div className="content-wrap">
        <div className="headings">
          <h3>A new type of salon.</h3>
          <p>A New Type Of Experience</p>
          <button>Contact</button>
        </div>
        <div className="header-icons">
          <div className="icons">
            <img src={facebook} alt="facebook" className="facebook" />
            <img src={instagram} alt="instagram" className="instagram" />
            <span className="vertical-line"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default headerContent;
