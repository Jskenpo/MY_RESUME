import React from "react";
import AboutHeader from "../About_name/about_name";
import Conocimientos from "../conocimientos/conocimientos";

import './about.scss';


function About() {
    return (
        <div className="page">
            <AboutHeader />
            <Conocimientos />
        </div>
    );
}

export default About;