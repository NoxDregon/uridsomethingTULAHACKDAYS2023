import React, { useState } from "react";
import '../index.css';
import Image from "./Image";
import logo from "../image/Logo.png"
import logo2 from "../image/Logo2.png"
import search from "../image/icons/search.png"
import Menu from "./Menu";

const Header = () => {
    const [menuActive, setMenuActive] = useState(false)
    const items = [{value: "О нас", href: ''}, {value: "Документы", href: ''}, {value: "Поддержка", href: ''}, {value: "О нас", href: ''}]
    return (
            <header className="App-header">
                <div className="left-part">
                <div className="burger__btn" onClick={() => setMenuActive(!menuActive)}>
                    <span></span>
                </div>
                <Menu active={menuActive} setActive={setMenuActive} header={"Бургер"} items={items}/>
                <div className="input">
                    <input placeholder="Введите ваш запрос" className="inputmain"/>
                    <Image image = {search} className="BackInput"/>
                </div>
                </div>
                <div className="headerImgs">
                    <Image image = {logo} className = "Avatar"/>
                    <Image image = {logo2} className="Avatar2"/>
                </div>
                </header>
     
    );
  }
  export default Header;