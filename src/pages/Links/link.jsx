import React from 'react'
import './link.css';
import IMG1 from '../../assets/recommend/Twin sleep.png'
import IMG2 from '../../assets/recommend/twin carrier.png'
import IMG3 from '../../assets/recommend/Stroller.png'
import IMG4 from '../../assets/recommend/hichair.png'
import IMG5 from '../../assets/recommend/pouches.png'
import IMG6 from '../../assets/recommend/swing.png'
import IMG7 from '../../assets/recommend/book.png'
import IMG8 from '../../assets/recommend/pants.png'
import IMG9 from '../../assets/recommend/tent.png'





const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Twin Bassinet',
    link_name: 'https://amzn.to/3dfAUwK'
  },
  {
    id: 2,
    image: IMG2,
    title: "Twin Carrier",
    link_name: 'https://amzn.to/3eIylUg'
  },
  {
    id:3, 
    image: IMG3, 
    title: 'Twin Stroller',
    link_name: 'https://amzn.to/3BGxeh1'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Modern Space Saver High Chair',
    link_name: 'https://amzn.to/3U8nBPv'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Reusable Food Pouch',
    link_name: 'https://amzn.to/3Du9oGy'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Mamaroo Swing',
    link_name: 'https://amzn.to/3uXcttf'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Seeing Beautiful Again - book',
    link_name: 'https://amzn.to/3i0jEhD'
  },
  {
    id: 8,
    image: IMG8,
    title: "Lululemon Legging Dupe",
    link_name: "https://amzn.to/3CiXw94"
  },
  {
    id: 9,
    image: IMG9,
    title: "Must Have Playpen tent",
    link_name: "https://amzn.to/3jLLsH3"
  }

]

const link = () => {

  return (
    <section id='link' className='link_section'>
      <h5>Products I</h5>
      <h2>Recommend</h2>

      <div className="container link__container">
       { 
        data.map (({id, image, title, link_name}) => {
          return (
            <article key={id} className='link__item'> 
            <div className="link__item-image">
              <img src={image} alt={title} />
            </div>
            <div className="content__link">
              <h3>{title}</h3>
              <div className="link__item-cta">
                <a href={link_name} className='btn link_btn' target="_blank">Get More Info!</a>
              </div>
            </div>
          </article>
          )
        })
        }
      </div>
    </section >
    
  )
}

export default link

