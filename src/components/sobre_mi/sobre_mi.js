import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Yo from '../../imas/YoyTio.jpg';

import './sobre_mi.scss';

function SobreMi() {

    return (
        <div id='sobre_mi'>
            <div className="rayita">
            </div>
            <div id='TituloYo' >
                <h1>¿Quién soy?</h1>
            </div>
            <div id = 'columnas' class="container">
                <div class="row">
                    <div  class="col-5">
                        <img  id ='ImagenYo' src = {Yo}/>
                    </div>
                    <div class="col-7">
                        <h3 id = 'YoName'>
                            José Pablo Santisteban Vargas
                        </h3>
                        <p id = 'YoDescription'>
                            Soy un estudiante de Ingeniería en Ciencias de Computación en la Universidad del Valle de Guatemala, actualmente en el 5to semestre de la carrera. 
                            Me gusta mucho la programación y el desarrollo de software, y me gustaría trabajar en el área de desarrollo de software en el futuro. 
                            Me gusta mucho aprender cosas nuevas y me considero una persona muy curiosa. Me gusta mucho la música, toco guitarra, y me gusta mucho escuchar música. 
                            También me gusta mucho el deporte, en especial el fútbol, y me gusta mucho ver series y películas.
                        </p>

                    </div>
                </div>
            </div>
        </div>

    );

}

export default SobreMi;