import React from "react";
import './home.scss';

import MASTER from '../nombre_animation/nombre.js'
import SobreMi from '../sobre_mi/sobre_mi.js'


function Home() {
    return (
        <div className="page">
            <MASTER />
            <SobreMi />
        </div>
    );
}

export default Home;