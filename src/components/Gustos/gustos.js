import React from "react";
import { EffectFlip, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './gustos.scss';

import C1 from '../../imas/fender.jpg'
import C2 from '../../imas/FOO.jpg'
import C3 from '../../imas/LIT.jpg'
import C4 from '../../imas/jordan.jpg'
import C5 from '../../imas/programar.jpg'


function MisGustos() {
    return (
        <div id='MisGustos'>
            <div className="rayita">
            </div>
            <div id='GustosCarrousel'>
                <div id='carrousel1' class="container">
                    <div class="row">
                        <div id='pruebac1' class="col-7">
                            <h3 id='YoName'>
                                Mis Gustos
                            </h3>
                            <p id='YoDescription'>
                                Soy una persona apasionada por la música, el deporte y la tecnología. Disfruto tocando la guitarra
                                y explorando diferentes géneros musicales más allá de Foo Fighters. Además, me encanta jugar al baloncesto y
                                probar nuevos deportes. La programación es otro de mis intereses, me fascina aprender nuevos lenguajes y tecnologías.
                                Siempre estoy abierto a explorar y ampliar mis gustos en estas áreas, buscando desafíos y experiencias enriquecedoras.
                            </p>
                        </div>
                        <div class="col-5">

                            <div id='swiper1'>
                                <Swiper
                                    rewind={true}
                                    effect={"flip"}
                                    grabCursor={true}
                                    pagination={true}
                                    navigation={true}
                                    modules={[EffectFlip, Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <img class='imgC1' src={C1} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img class='imgC1' src={C2} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img class='imgC1' src={C3} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img class='imgC1' src={C4} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img class='imgC1' src={C5} />
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

export default MisGustos;