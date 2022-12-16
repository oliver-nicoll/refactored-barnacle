import React from 'react';
import { Pagination } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import './Testimonials.css';
import IMG1 from '../../assets/anomaly_mug.png'
import IMG2 from '../../assets/nicoll/main.png'
import IMG3 from '../../assets/drawing.png'
import IMG4 from '../../assets/1.jpg'
import IMG5 from '../../assets/2.jpg'
import IMG6 from '../../assets/3.jpg'
import IMG7 from '../../assets/4.jpg'
import IMG8 from '../../assets/5.jpg'
import IMG9 from '../../assets/nicoll/logo_three.png'








const data = [
    {
      id: 1,
      image: IMG1,
      name: 'Anomaly Craft Brewing Logo'
    },
    {
        id: 2,
        image: IMG2,
        name: 'Anomaly Craft Brewing Logo 2'
      },
      {
        id: 3,
        image: IMG3,
        name: 'AutoCad Drawing'
      },
      {
        id: 4,
        image: IMG4,
        name: 'Kitchen Build'
      },
      {
        id: 5,
        image: IMG5,
        name: 'Kitchen Build'
      },
      {
        id: 6,
        image: IMG6,
        name: 'Kitchen Design'
      },
      {
        id: 7,
        image: IMG7,
        name: 'Kitchen Design'
      },
      {
        id: 8,
        image: IMG8,
        name: 'Kitchen Design'
      },
      {
        id: 9,
        image: IMG9,
        name: 'Logo Design'
      },

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Other Projects</h5>
      <h2>Pictures</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({id, image, name}) => {
            return (
              <SwiperSlide key={id} className='testimonial'>
                <div className="image_portfolio">
                  <img src={image} alt={name} />
                </div>
                  <h4 className='client__name'>{name}</h4>
              </SwiperSlide>
            )
        })}
      </Swiper>
    </section >

  )
}

export default Testimonials