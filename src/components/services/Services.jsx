import React from 'react';
import {BiCheck} from 'react-icons/bi'
import './Services.css';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Designer</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Constantly evolving.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ability to juggle multiple projects and deadlines.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Logos, Website Designs, Social Media Content</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Experienced in Kitchen and Bath design</p>
            </li>
          </ul>
        </article>

        {/* end of article one */}

        <article className='service'>
          <div className="service__head">
            <h3>Drafter</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Excellent attention to detail.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Use of CAD software and ability to use it effectively.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Problem-solving abilities.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Flexibility.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Estimation and management of projects.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Willingnes to learn and develop new skills.</p>
            </li>
          </ul>
        </article>

        {/* end of article one */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>HTML/CSS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>JavaScript</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React Framework</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ruby on Rails</p>
            </li>
          </ul>
        </article>

        {/* end of article two */}

        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Contributes to a collaborative creative process.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Able to come up with fresh, original ideas for content.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Clearly and effectively communicates.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Self-motivated. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Passion for projects.</p>
            </li>
          </ul>
        </article>

      </div>
    </section >
  )
}

export default Services