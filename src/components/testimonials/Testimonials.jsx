import React from 'react';
import AVA1 from '../../assets/avatar1.jpg'
import AVA2 from '../../assets/avatar2.jpg'
import AVA3 from '../../assets/avatar3.jpg'
import AVA4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import './Testimonials.css';

const testData = [
  {
    id: 1,
    image: AVA1,
    name: 'Lorem Ipsum',
    testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatibus atque, maxime optio tenetur nobis.' 
  },
  {
    id: 2,
    image: AVA2,
    name: 'Lorem Ipsum',
    testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatibus atque, maxime optio tenetur nobis.' 
  },
  {
    id: 3,
    image: AVA3,
    name: 'Lorem Ipsum',
    testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatibus atque, maxime optio tenetur nobis.' 
  },
  {
    id: 4,
    image: AVA4,
    name: 'Lorem Ipsum',
    testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatibus atque, maxime optio tenetur nobis.' 
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          testData.map(({id, image, name, testimonial}) => {
            return (
              <SwiperSlide key={id} className='testimonial'>
                <div className="client__avatar">
                  <img src={image} alt={name} />
                </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>
                    {testimonial}
                  </small>
              </SwiperSlide>
            )
        })}
      </Swiper>
    </section >

  )
}

export default Testimonials