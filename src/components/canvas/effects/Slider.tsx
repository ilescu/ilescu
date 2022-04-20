import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import javascriptLogo from '@/images/logo-javascript.svg';
import phpLogo from '@/images/php-logo.svg';
import tsLogo from '@/images/typescript.svg';
import sassLogo from '@/images/sass-logo.svg';
import dockerLogo from '@/images/docker.svg';
import jetbrainsLogo from '@/images/jetbrains.svg';

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/bundle";

import "@/components/canvas/effects/style.scss";
import {Autoplay} from "swiper";

const Slider: React.FC = () => {
    return (
        <>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: true,
                }}
                speed={1000}
                slidesPerView={1}
                effect={"fade"}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={javascriptLogo} alt="JavaScript"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={tsLogo} alt="TypeScript"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={phpLogo} alt="PHP"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sassLogo} alt="SASS"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={dockerLogo} alt="Docker"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={jetbrainsLogo} alt="JetBrains"/>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;