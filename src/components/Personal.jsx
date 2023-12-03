import React from "react";
import "../index.css"


const Personal = () => {
    return (
        <div className="personal-section">
            <div className="personal-container">
                <div className="profilePhoto"></div>
                <div className="profile-info">
                    <div className="profile-info__name"><input className="profile-input" type="text" placeholder="Введите ФИО"/></div>
                    <div className="profile-info__documents">
                        <form action="">
                        <ol className="ol-profile">
                            <li><input className="profile-input" type="text" placeholder="Паспортные данные"/></li>
                            <li><input className="profile-input" type="text" placeholder="ИНН"/></li>
                            <li><input className="profile-input" type="text" placeholder="Адрес проживания"/></li>
                            <li><input className="profile-input" type="text" placeholder="Кадастровый номер участка"/></li>
                            <li><input className="profile-input" type="text" placeholder="Номер счета"/></li>
                            <li><input className="profile-input" type="text" placeholder="ОРГН"/></li>
                            <li><input className="profile-input" type="text" placeholder="Номер статьи договора"/></li>
                            <li><input className="profile-input" type="text" placeholder="Сумма долга арендатора у плательщика"/></li>
                            <li><input className="profile-input" type="text" placeholder="Сумма начисления пени у арендатора"/></li>
                            <li> <div className="li-block">Дата заключения договора<input className="profile-input" type="date" placeholder="Дата заключения / окончания договора"/></div></li>
                            <li> <div className="li-block">Дата заключения договора<input className="profile-input" type="date" placeholder="Дата заключения / окончания договора"/></div></li>
                        </ol>
                        <input type="submit" value="Отправить форму"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personal;