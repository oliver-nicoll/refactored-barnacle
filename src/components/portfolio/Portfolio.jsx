import React from 'react';
import IMG1 from '../../assets/project_1.png'
import IMG2 from '../../assets/project_2.png'
import IMG3 from '../../assets/project_3.png'
import './Portfolio.css';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Tourney',
    github: 'https://github.com/oliver-nicoll/tourney-maker.git',
    demo: 'https://youtu.be/QXVDVYwgsjU'
  },
  {
    id: 2,
    image: IMG2,
    title: "A Perfect Blend",
    github: 'https://github.com/oliver-nicoll/A-Perfect-Blend.git',
    demo: 'https://youtu.be/uHyBUd3CqUU'
  },
  {
    id:3, 
    image: IMG3, 
    title: 'Investor',
    github: 'https://github.com/oliver-nicoll/Sinatra-Investor_Property_Tracker.git',
    demo: 'https://www.youtube.com/watch?v=FkUdx7uedaI'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       { 
        data.map (({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio__item'> 
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target="_blank">Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
          )
        })
        }
      </div>
    </section >
    
  )
}

export default Portfolio