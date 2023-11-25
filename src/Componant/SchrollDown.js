import React from 'react'

import arrow from '../assets/arrow.svg'

export default function SchrollDown({ scrollToSection , bottom, section}) {
  return (
    <div className='schrollDown' style={{bottom:bottom}} onClick={() => scrollToSection(section)}>
        <p>schroll down</p>
        <img src={arrow} alt=''/>
    </div>
  )
}
