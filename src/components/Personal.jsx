import React from "react";
import "../index.css"


const Personal = () => {
    return (
        <div className="personal-section">
            <div className="personal-container">
                <div className="profilePhoto"></div>
                <div className="profile-info">
                    <div className="profile-info__name">Фамилия Имя Отчество</div>
                    <div className="profile-info__documents">
                        <ol className="ol-profile">
                            <li>Паспортные данные</li>
                            <li>СНИЛС</li>
                            <li>ИНН</li>
                            <li>Адрес проживания</li>
                            <li>Кадастровый номер участка</li>
                            <li>Номер счета</li>
                            <li>ОРГН</li>
                            <li>Номер статьи договора</li>
                            <li>Сумма долга у арендатора</li>
                            <li>Сумма начисления пени у арендатора</li>
                            <li>Дата заключения / окончания договора</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personal;