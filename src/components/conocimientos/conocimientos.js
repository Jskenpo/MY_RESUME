import React from "react";
import { EffectCube, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import './conocimientos.scss';

import A1 from '../../imas/CSS.png'
import A2 from '../../imas/EXPRESS.png'
import A3 from '../../imas/NODE.jpg'
import A4 from '../../imas/REACT.jpg'
import A5 from '../../imas/SASS.png'
import A6 from '../../imas/JS.png'
import A7 from '../../imas/WEBPACK.png'


function Conocimientos() {
    return (
        <div id='MisGustos'>
            <div className="rayita">
            </div>
            <div id='Titulo'>
                <h1>
                    Mis conocimientos en STW
                </h1>
            </div>
            <div id='GustosCarrousel'>
                <div id='carrousel1' class="container">
                    <div class="row">
                        <div id='pruebac1' class="col-7">
                            <p id='YoDescription'>
                                Tengo sólidos conocimientos de JavaScript y React. JavaScript es el lenguaje de programación esencial para el desarrollo web, y lo utilizo para crear funcionalidades interactivas y dinámicas en mis proyectos. Con React, una poderosa biblioteca de JavaScript, puedo construir interfaces de usuario eficientes y reutilizables. Me encanta crear componentes personalizados y trabajar con el enrutamiento y el manejo del estado utilizando React Router y Redux.
                                <br />
                                <br />
                                Además, tengo experiencia en el uso de CSS y estoy al tanto de las últimas características y técnicas. Utilizo Flexbox y CSS Grid para crear diseños responsivos y adaptables, y agrego animaciones y transiciones para dar vida a mis proyectos web.
                                <br />
                                <br />
                                En el lado del backend, he trabajado con Node.js y Express. Estas tecnologías me permiten construir aplicaciones web y APIs de manera rápida y eficiente. Con Node.js, puedo utilizar JavaScript en el lado del servidor y manejar operaciones de E/S, trabajar con bases de datos y crear servicios RESTful. Express, por su parte, me brinda un framework minimalista pero potente para manejar rutas, middleware y autenticación en mis aplicaciones.
                            </p>
                        </div>
                        <div class="col-5">

                            <div id='swiper1'>
                                <Swiper
                                    rewind={true}
                                    effect={"cube"}
                                    cubeEffect={{
                                        shadow: true,
                                        slideShadows: true,
                                        shadowOffset: 20,
                                        shadowScale: 0.94,
                                    }}
                                    grabCursor={true}
                                    pagination={true}
                                    modules={[EffectCube, Pagination]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <img class='imgC1' src={A1} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img class='imgC1' src={A2} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img class='imgC1' src={A3} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img class='imgC1' src={A4} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img class='imgC1' src={A5} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img class='imgC1' src={A6} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img class='imgC1' src={A7} />
                                    </SwiperSlide>

                                </Swiper>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Conocimientos;