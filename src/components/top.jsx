import React from "react";
import '../index.css';
import topimage from "../image/TopBackground.png"
import Image from "./Image";
import MainButton from "./mainButton";

const Top = () => {
    return (
      <div className="Top">
        <div className="top-container">
          <div className="top-column">
            <div className="top-row"><p className="main-title">Составление искового заявления</p></div>
            <div className="top-row"><MainButton/></div>
          </div>
          <div className="top-column"></div>
        </div>
      </div>
    );
  }

export default Top;