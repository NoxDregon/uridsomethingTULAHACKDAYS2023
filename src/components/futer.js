import React, { useState } from "react";
import '../index.css';
import Image from "./Image";
import VK from "../image/icons/vk.png"
import TG from "../image/icons/tg.png"
import EMAIL from "../image/icons/email.png"
import POINT from "../image/icons/point.png"
import EMAILB from "../image/icons/email_black.png"
import POINTB from "../image/icons/point_black.png"

function Futer() {
    return (
      <div className="futermain">
          <div className="Weebs">
              <p className="WeebsText">Поддержка</p>
            <div className="WeebsBlock">
                <Image image = {VK} className = "WeebsIcon"/>
                <p className="WeebsText"> · Вконтанте</p>
            </div>
            <div className="WeebsBlock">
                <Image image = {TG} className="WeebsIcon"/>
                <p className="WeebsText"> · Телеграм</p>
            </div>
            <div className="WeebsBlock">
                <Image image = {EMAIL} className = "WeebsIcon"/>
                <p className="WeebsText"> · xakdays@gmail.com</p>
            </div>
          </div>
          <div className="Adress">
            <Image image = {POINT} className = "WeebsIcon"/>
            <p className="WeebsText">· к, пр. Ленина, 125 корпус 3, Тула, Тульская обл., 300026</p>
          </div>
          <div className="UnderButton">
              <button className="MenuButton">Поддержка</button>
              <div className="Arow">↓</div>
          </div>
          <div className='downmenu'>
              <div>
                <div className="partOfDownMenu">
                  <Image image = {EMAILB} className = "WeebsIcon"/>
                  <p className="WeebsText"> ·xakdays@gmail.com</p>
                </div>
                <div className="partOfDownMenu">
                  <Image image = {TG} className="WeebsIcon"/>
                  <p className="WeebsText"> ·Телеграм</p>
                </div>
                <div className="partOfDownMenu">
                  <Image image = {VK} className = "WeebsIcon"/>
                  <p className="WeebsText"> ·Вконтанте</p>
                </div> 
                <div className="partOfDownMenu">
                <Image image = {POINTB} className = "WeebsIcon"/>
                <p className="WeebsText">· к, пр. Ленина, 125 корпус 3, Тула, Тульская обл., 300026</p>
                </div> 
              </div>
          </div>
      </div>
    );
  }
  export default Futer;