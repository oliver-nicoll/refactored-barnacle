import React from 'react';
import Me from '../../assets/mee.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {RiFilePaper2Line} from 'react-icons/ri'

import './About.css';

const About = () => {
  return (
    <section id='about'>
      <h5>
        Get To Know
      </h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>5+ Years Designing <br/>
              2+ Years Developing</small>
            </article>
            <article className='about__card'>
              <RiFilePaper2Line className='about__icon'/>
              <h5>Degree</h5>
              <small>Architectural Engineering in Technology</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ Completed Projects<br/>100+ Designs </small>
            </article>
          </div>
          <p>Hi there! My name is Nicoll Oliver and I am an ALL boy momma, wife to my big idea, dreamer husband & Jesus lover. In my professional life, I love to design in different areas, develop new tech, draft plans out, estimate projects, lead projects & all around dream and learn on what's next.
          <br/><br/>From the joys and challenges of raising boys to the insights and inspiration I find in my faith and career, I am excited to share my experiences and connect with others who share my passions. I can't wait to connect with you!</p>
          <a href="#contact" className='btn'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About