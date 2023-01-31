import React from "react";
import AboutUs from "../aboutUs/AboutUs";
import DeveloperInfo from "../developerInfo/DeveloperInfo";
import './FooterInfo.scss';


const FooterInfo = () => {
    return (
        <div className="footer-info">
            <hr />
            <div className="about-developer-info">
                <AboutUs />
                <DeveloperInfo />
            </div>
        </div>
    )
}

export default FooterInfo;