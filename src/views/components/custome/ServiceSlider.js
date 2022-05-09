import React from 'react';
import { EffectCoverflow } from 'swiper';
import { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

const ServiceSlider = () => {
    return (
        <div>
            <Swiper
            modules={[EffectCoverflow, EffectFade]}
            EffectCoverflow
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper> 
        </div>
    );
};

export default ServiceSlider;