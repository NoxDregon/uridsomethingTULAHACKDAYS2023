import React from "react";
import ProfileCard from "./profileCard";
import '../index.css'
const AboutUs = () => {
    return (
        <div className="profiles-back">
            <div className="profiles-container">
                    <div className="profiles-container__part">
                    <ProfileCard name={"Наздар"} role={'Дизайнер'}/>
                    <ProfileCard name={"Григорий"} role={'Программист'}/>
                    <ProfileCard name={"Никита"} role={'JS developer'}/>
                    </div>
                    <div className="profiles-container__part profiles-container__part-right">
                    <ProfileCard name={"Леонид"} role={'Teamlead'}/>
                    <ProfileCard name={"Леонид"} role={'Teamlead'}/>
                    </div>
                </div>
            </div>     

    )
}

export default AboutUs;