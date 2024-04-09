import React, { useRef } from 'react';

// import CSS
import "../componantStyle/accueil.css"
import "../componantStyle/header.css"
import "../componantStyle/footer.css"


// import componant
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';

//import images
import instagram from '../assets/Instagram.svg'
import linkedin from '../assets/LinkedIn.svg'
import git from '../assets/git.svg'
import arrowMail from '../assets/arrowEmail.svg'

import ZB from './ZB'
import { useState } from 'react';



const Accueil = () => {
    const sectionRefs = {
        header: useRef(null),
        section1: useRef(null),
        section2: useRef(null),
        section3: useRef(null),
        section4: useRef(null),
    };

    const [skill, setSkill] = useState(true)

    const scrollToSection = (section) => {
        sectionRefs[section].current.scrollIntoView({
            behavior: 'smooth',
        });
    };

       
    return (
    <div className='Container' ref={sectionRefs.header}>
        <div className='headerContainer'>
            <div className='insideHeaderContainer'>
                <div id='logoContainer'>
                    <p className='logo'>Z.B</p>
                </div>
                <ul className='headerList'>
                    <li className='listHeaderElement' onClick={() => scrollToSection('section1')}>
                        <p>Home</p>
                    </li>
                    <li className='listHeaderElement' onClick={() => {scrollToSection('section2'); setSkill(true)}}>
                        <p>About</p>
                    </li>
                    <li className='listHeaderElement' onClick={() => {scrollToSection('section2'); setSkill(false)}}>
                        <p>Skills</p>
                    </li>
                    <li className='listHeaderElement' onClick={() => scrollToSection('section3')}>
                        <p>Portfolio</p>
                    </li>
                    <li className='listHeaderElement' onClick={() => scrollToSection('section4')}>
                        <p>Contact</p>
                    </li>
                </ul>
            </div>
        </div>
        
            <div className='home' ref={sectionRefs.section1}>
                 <Home scrollToSection={scrollToSection} section="section2"/> 
            </div>
            <div className='about' ref={sectionRefs.section2}>
                 <About skill={skill} setSkill={setSkill} scrollToSection={scrollToSection} section="section3"/>
                 <ZB  top="35.5vw" right="60vw"/>
            </div>
            <div className='work' ref={sectionRefs.section3}>
                <Work scrollToSection={scrollToSection} section="section4"/>
            </div>
            <div ref={sectionRefs.section4}>
                 <Contact/>
            </div>

            <div className='footerContainer'>
        <div className='footer'>
            <div className='footerSection s1'>
            
            <div className='s1Up'>
                <p className='logo' onClick={() => scrollToSection('header')}>Z.B</p>
                <div className='s1Txt Txt'>
                
                <p>Crafting digital experiences with passion and precision.</p>
                <p>Turning ideas into innovative web and desktop solutions.</p>
                <p>Dedicated to delivering excellence in web and app development.</p>
                <p>Let's collaborate on your next digital journey.</p>
                </div>

                <div className='s1Down'>
                    <div className='socialMedia'>
                        <a href='https://github.com/Zakaria-bls' target='_blank'  rel="noopener noreferrer"><img src={git} alt=''/></a>
                        <a href='https://www.linkedin.com/in/zakaria-boulsane-a6044a21b/' target='_blank'  rel="noopener noreferrer"><img src={linkedin} alt=''/></a>
                        <a href='https://www.instagram.com/zackaria.bls/' target='_blank'  rel="noopener noreferrer"><img src={instagram} alt=''/></a>
                    </div>

                    <div className='Txt'>
                    <p>© 2023 . All rights reserved.</p>
                    </div>
                </div>

            </div>

            </div>

            <div className='footerSection footerSame s2'>
            <p className='footerSameTitle'>Take a tour</p>
            <div className='footerDiv'>
                <p className='footerSameTxt' onClick={() => scrollToSection('section3')}>Portfolio</p>
            </div>
            </div>

            <div className='footerSection footerSame s3'>
            <p className='footerSameTitle'>Sections</p>
            <div className='footerDiv'>
                <p className='footerSameTxt' onClick={() => scrollToSection('header')}>Home</p>
                <p className='footerSameTxt' onClick={() => {scrollToSection('section2'); setSkill(true)}}>About</p>
                <p className='footerSameTxt'  onClick={() => {scrollToSection('section2'); setSkill(false)}}>Skills</p>
                <p className='footerSameTxt' onClick={() => scrollToSection('section4')}>Contact</p>
            </div>
            </div>

            <div className='footerSection footerSame s4'>
            <p className='footerSameTitle'>Subscribe</p>
            
            <div className='Txt inputTxt'>
                <p>Abonnez-vous pour recevoir les dernier offres</p>
                
                <div className='inputContainer'>
                <input type='email' placeholder='Email Address'/>
                <div className='sendMail'>
                    <img src={arrowMail} alt=''/>
                </div>
                </div>
            </div>
            </div>

        </div>
</div>
    </div>

    
    );
};

export default Accueil;
