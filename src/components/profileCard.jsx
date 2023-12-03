import React from "react";
import '../index.css';

const ProfileCard = (props) => {
    return (
        <div className="profile-card">
            <div className="profile-card__logo"></div> 
            <div className="profile-card__info">
                <div className="profile-card__info profile-card__info-name">{props.name}</div>
                <div className="profile-card__info profile-card__info-role">{props.role}</div>
            </div>
        </div>
    )
}

export default ProfileCard;