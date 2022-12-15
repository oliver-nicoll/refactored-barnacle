import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="http://linkedin.com/in/nicoll-oliver-975444204" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/oliver-nicoll" target="_blank"><FaGithub/></a>
        <a href="https://dribble.com/oliver_nicoll" target="_blank"><FaDribbble/></a>

    </div>
  )
}

export default HeaderSocials