import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel.css';

import img12 from './12.png';

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: img12,
      title: 'Authentic Chai Experience',
      subtitle: 'Brewed with tradition, served with love'
    },
    {
      id: 2,
      image: img12,
      title: 'Fresh Snacks Daily',
      subtitle: 'Made with locally sourced ingredients'
    },
    {
      id: 3,
      image: img12,
      title: 'Perfect Hangout Spot',
      subtitle: 'Relax and enjoy with friends'
    }
  ];

  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <img src={slide.image} alt={slide.title} className="slide-image" />
              <div className="slide-text">
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-subtitle">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;