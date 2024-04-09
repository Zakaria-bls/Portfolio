import React from 'react'

// import css
import '../componantStyle/home.css'

//import assets
import download from '../assets/Download.svg'
import profile from '../assets/profilePic.svg'
import Cv from '../assets/CV-zakariaB.pdf'

//import componant
import SchrollDown from './SchrollDown'
import ZB from './ZB'

export default function Home({ scrollToSection, section }) {

  return (
    <div className='homeContainer'>
      <div className='insideHomeContainer'>
          <div className='insideHome'>
            <div className='insideHomeText'> 
                <div className='homeTextGras'>
                    <p id='name'>Hi, I’m Zakaria  </p>
                    <p id='work'>Junior Developer</p>
                </div>
                <div className='txtDownlaod'>
                    <div className='homeTextRegular'>
                        <p>As a computer science master's degree holder with expertise in software engineering and data processing, I have gained experience in full-stack web and software development. </p>
                    </div>
                    <div className='homeButton'>
                      <a href={Cv} download='CV-Zakaria-BLS'>
                          <p>Download CV</p>
                          <img src={download} alt=''/>
                      </a>
                    </div>
                </div>
            </div>
            <div className='insideHomePic'>
                <div id='cercileOfImage'>
                  <img src={profile} alt=''/>
                </div>
            </div>
          </div>

          <div className='darkMode'>
            <p id='light'>Light</p>
            <p id='slach'>/</p>
            <p id='dark'>Dark</p>
          </div>
      </div>

      
      <ZB top="-7.5vw" right="-15.5vw"/>

      <SchrollDown bottom="5vw" scrollToSection={scrollToSection} section = {section}/>

    </div>
  )
}
