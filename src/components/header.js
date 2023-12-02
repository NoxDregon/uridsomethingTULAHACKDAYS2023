import React from "react";
import { ReactDOM } from "react";
import '../index.css';
import Image from "./Image";
import logo from "../image/Logo.png"
import search from "../image/icons/search.png"
function Header() {
    
    return (
      
        <header className="App-header">
            <Image image = {logo} className = "Avatar"/>
            <div className="input">
                <input placeholder="Введите ваш запрос" className="inputmain"/>
                <Image image = {search} className="BackInput"/>
            </div>
            <div className="upmenu">
                <p className="uptext">О нас</p>
                <p className="uptext">Документы</p>
                <p className="uptext">Начало работы</p>
                <p className="uptext">Поддержка</p>
            </div>
            
        </header>
     
    );
  }
  export default Header;