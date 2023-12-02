import React from "react";
import '../index.css';
import DocBlock from "./docblock";
import firstIcon from "../image/icons/firstIcon.png"
import home from "../image/icons/home.png"
import pretenzia from "../image/icons/pretenzia.png"
import Raschet from "../image/icons/Raschet.png"
function Documents() {
    return (
    <div  className="docbackground">
      <div className="doc">
          <DocBlock title = 'Паспорт' data = "any" image = {firstIcon}/>
          <DocBlock title = 'Договор' data = 'any' image = {home}/>
          <DocBlock title = 'Претензия' data = 'any' image = {pretenzia}/>
          <DocBlock title = 'Рассчёт' data = 'any' image = {Raschet}/>
      </div>
      </div>
    );
  }
  
  export default Documents;