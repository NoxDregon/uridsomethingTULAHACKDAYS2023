import React from "react";
import '../index.css';
import topimage from "../image/TopBackground.png"
import Image from "./Image";
function Top() {
    
    return (
      <div className="Top">
        <Image image = {topimage} className="Top"/>
      </div>
    );
  }
  
  export default Top;