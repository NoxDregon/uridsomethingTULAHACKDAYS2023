import React from "react";
import '../index.css';
import Image from "./Image";
class DocBlock extends React.Component {
    render(){return (
        <div className="docblock">
            <Image image = {this.props.image} className = "doc_icon"/>
            <p className="title"> {this.props.title}</p>
            <p className="data">{this.props.data}</p>
            <form className="download">
          <input type="file"/>
        </form>

      </div>
    );
  }
}
  
  export default DocBlock;