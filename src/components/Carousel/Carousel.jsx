import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel.css';

import img1 from '../../pages/images/Coffee shop-amico.png'
import img2 from '../../pages/images/Eating together-pana.png';
import img3 from '../../pages/images/Catering service-bro.png';
import img4 from '../../pages/images/Product quality-bro.png';

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: img1,
      title: 'Authentic Chai Experience',
      subtitle: 'Brewed with tradition, served with love'
    },
    {
      id: 2,
      image: img3,
      title: 'Fresh Snacks Daily',
      subtitle: 'Made with locally sourced ingredients'
    },
    {
      id: 3,
      image: img4,
      title: 'Quality Ingredients',
      subtitle: 'Only the best for our customers'
    },
    {
      id: 4,
      image: img2,
      title: 'Community Vibes',
      subtitle: 'Join us for events and gatherings'
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