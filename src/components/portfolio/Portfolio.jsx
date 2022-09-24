import React from 'react';
import IMG1 from '../../assets/project_1.png'
import IMG2 from '../../assets/project_2.png'
import IMG3 from '../../assets/project_3.png'
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       { 
        <article className='portfolio__item'> 
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Tourney</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="https://dribble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        }
      </div>
    </section >
    
  )
}

export default Portfolio