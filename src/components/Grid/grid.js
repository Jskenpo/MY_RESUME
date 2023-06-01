import React from 'react';
import { useState, useEffect } from 'react';
import Memory from '../../imas/memory.png';
import proyecto1 from '../../imas/PROYECTO1.png';
import TableTrek from '../../imas/tabletrek.png';
import APITT from '../../imas/APITT.png';
import LAB4 from '../../imas/LAB4.png';
import CHATS from '../../imas/CHATS.png';

import './grid.scss';

import Proyect from '../Proyects/proyect';

function Grid() {
    return (
        <div className="grid">
            <Proyect
                name="mk-memory"
                description="Juego de memoria de Mortal Kombat "
                url="https://github.com/Jskenpo/LAB8-STW.git"
                img={Memory}
            />
            <Proyect
                name="Proyecto 1"
                description="Este proyecto trata de replicar una página identicanmente mediannte una aplicación de react"
                url="https://github.com/Jskenpo/PROYECTO1-STW.git"
                img={proyecto1}
            />
            <Proyect
                name="Table Trek"
                description="Este proyecto tiene el proposito de servir tanto a restaurantes como a consumidores."
                url="https://github.com/Teviets/TableTrek.git"
                img={TableTrek}
            />
            <Proyect
                name="Table Trek API"
                description="Este repositorio contiene el código fuente del API utilizado en la página web de reservaciones de restaurantes."
                url="https://github.com/Jskenpo/API_PROYECTO2_STW.git"
                img={APITT}
            />
            <Proyect
                name="CSS Only"
                description="Este proyecto es una figura hecha solamente con CSS"
                url="http://3.22.74.121:3062"
                img={LAB4}
            />
            <Proyect
                name="Chat UVG "
                description="Este proyecto es un chat funcional hecho solamente con JS, ademas consume un API hecha con mongoDB"
                url="http://3.22.74.121:3161"
                img={CHATS}
            />
        </div>
    );
}

export default Grid;