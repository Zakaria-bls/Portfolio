import React from 'react'

import '../componantStyle/about.css'
import '../componantStyle/work.css'

import revo from '../assets/revo.svg'
import sonatrach from '../assets/sonatrach.svg'
import myCima from '../assets/myCima.svg'
import reatec from '../assets/reatec.svg'
import bonne from '../assets/bonneCommand.svg'
import avendre from '../assets/avendre.svg'
import pcs from "../assets/shopPc.svg"

import ZB from './ZB'
import SchrollDown from './SchrollDown'

export default function Work({scrollToSection, section}) {
  return (
    <div className='workContainer'>
            <div className='workContainerInside'>
                <div>
                  <div className='workTitle'>
                    <div className='AS color font'>
                      <p>03</p>
                      <p>MY WORK</p>
                    </div>
                    <div className="textContainer">
                      <p>I’m glad to present you my work</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='elements'>

                    <div className='element'>
                      <div>
                        <img className='imageProject' src={revo} alt=''/>
                      </div>
                      <div className='projectText'>
                        <div>
                          <p className='color'>REVO APPS</p>
                          <p className='typeProject'>WEB APPLICATION</p>
                        </div>
                        <p className='textContainer descProject'>Web application pour faire bcp de choose Web application pour faire bcp de choose Web application pour faire bcp de choose Web application pour faire bcp de </p>
                      </div>
                    </div>


                    <div className='element'>
                      <div className='projectText'>
                        <div>
                          <p className='color'>SONAT APPS</p>
                          <p className='typeProject'>SOFTWARE FOR WINDOWS</p>
                        </div>
                        <p className='textContainer descProject'>Web application pour faire bcp de choose Web application pour faire bcp de choose Web application pour faire bcp de choose Web application pour faire bcp de </p>
                      </div>

                      <div className='imageContainerElement'>
                        <img className='imageProject' src={sonatrach} alt=''/>
                      </div>
                    </div>




                    <div className='element'>
                      <div className='imageContainerElement'>
                        <img className='imageProject' src={myCima} alt=''/>
                      </div>
                      <div className='projectText'>
                        <div>
                          <p className='color'>DEEPCIMA APPS</p>
                          <p className='typeProject'>WEB APPLICATION</p>
                        </div>
                        <p className='textContainer descProject'>Web application pour faire bcp de choose Web application pour faire bcp de choose Web application pour faire bcp de choose Web application pour faire bcp de </p>
                      </div>
                    </div>




                    <div className='element'>
                      <div className='projectText'>
                        <div>
                          <p className='color'>REATEC APPS</p>
                          <p className='typeProject'>WEB APPLICATION</p>
                        </div>
                        <p className='textContainer descProject'>Web application pour faire bcp de choose Web application pour faire bcp de choose Web application pour faire bcp de choose Web application pour faire bcp de </p>
                      </div>
                      <div className='imageContainerElement'>
                        <img className='imageProject' src={reatec} alt=''/>
                      </div>
                    </div>



                    <div className='element'>
                      <div className='imageContainerElement'>
                        <img className='imageProject' src={bonne} alt=''/>
                      </div>
                      <div className='projectText'>
                        <div>
                          <p className='color'>FACTURE APPS</p>
                          <p className='typeProject'>SOFTWARE FOR WINDOWS</p>
                        </div>
                        <p className='textContainer descProject'>Web application pour faire bcp de choose Web application pour faire bcp de choose Web application pour faire bcp de choose Web application pour faire bcp de </p>
                      </div>
                    </div>



                    <div className='element'>
                      <div className='projectText'>
                        <div>
                          <p className='color'>AVENDRE APPS</p>
                          <p className='typeProject'>WEB APPLICATION</p>
                        </div>
                        <p className='textContainer descProject'>Web application pour faire bcp de choose Web application pour faire bcp de choose Web application pour faire bcp de choose Web application pour faire bcp de </p>
                      </div>
                      <div className='imageContainerElement'>
                        <img className='imageProject' src={avendre} alt=''/>
                      </div>
                    </div>

                    <div className='element'>
                      <div className='imageContainerElement'>
                        <img className='imageProject' src={pcs} alt=''/>
                      </div>
                      <div className='projectText'>
                        <div>
                          <p className='color'>PCs SHOP APPS</p>
                          <p className='typeProject'>WEB APPLICATION</p>
                        </div>
                        <p className='textContainer descProject'>Web application pour faire bcp de choose Web application pour faire bcp de choose Web application pour faire bcp de choose Web application pour faire bcp de </p>
                      </div>
                    </div>

                  </div>
                </div>
          </div>

          <ZB className="aboutZb" top="11.5vw" right="0vw"/>
          <ZB className="aboutZb" top="68.5vw" right="50vw"/>
          <ZB className="aboutZb" top="130.5vw" right="-20vw"/>

          <SchrollDown bottom="120vw" scrollToSection={scrollToSection} section = {section}/>

          <SchrollDown bottom="80vw" scrollToSection={scrollToSection} section = {section}/>

    </div>
    )
}
