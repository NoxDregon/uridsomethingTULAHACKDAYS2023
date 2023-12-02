import { render } from "@testing-library/react";
import React from "react";
import '../index.css';
class Image extends React.Component {

   render(){
       return(
           <img src = {this.props.image} className = {this.props.className}/>
       )
   }
  }
  
  export default Image;