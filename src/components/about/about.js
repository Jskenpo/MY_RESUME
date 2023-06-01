import React from "react";
import AboutHeader from "../About_name/about_name";
import Conocimientos from "../conocimientos/conocimientos";
import Progress from "../Progress/progress";
import Grid from "../Grid/grid";
import RayitaP from "../rayitaProyects/rayitaP";

import './about.scss';


function About() {
    return (
        <div className="page">
            <AboutHeader />
            <Conocimientos />
            <Progress
                porcentaje="50%"
                color="success"
                lenguaje="JavaScript"
                cantidad="50"
            />
            <Progress
                porcentaje="80%"
                color="warning"
                lenguaje="Python"
                cantidad="80"
            />
            <Progress
                porcentaje="60%"
                color="info"
                lenguaje="CSS"
                cantidad="60"
            />
            <Progress
                porcentaje="70%"
                color="success"
                lenguaje="Java"
                cantidad="70"
            />
            <Progress
                porcentaje="45%"
                color="danger"
                lenguaje="Express"
                cantidad="45"
            />
            <RayitaP />
            <Grid />
        </div>
    );
}

export default About;