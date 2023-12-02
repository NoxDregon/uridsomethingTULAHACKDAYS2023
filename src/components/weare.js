import React from "react";
import '../index.css';
import topimage from "../image/TopBackground.png"
import Image from "./Image";
import aboutTeam from "../image/AboutTeam.png"
function WeAre() {
    
    return (
      <div>
          <Image image = {aboutTeam} className = "weare"></Image>
      </div>
    );
  }
  
  export default WeAre;