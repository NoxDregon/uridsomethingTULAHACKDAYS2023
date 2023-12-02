import React from "react";
import '../index.css';
import Image from "./Image";
class DocBlock extends React.Component {
    render(){return (
      <div className="docblock">
          <Image image = {this.props.image} className = "doc_icon"/>
          <p className="title"> {this.props.title}</p>
          <p className="data">{this.props.data}</p>
      </div>
    );
  }
}
  
  export default DocBlock;