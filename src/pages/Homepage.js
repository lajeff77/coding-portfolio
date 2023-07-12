import React from 'react'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'

const Homepage = () => {
  return (
    <div>
        <body>
            <h2 id='about'>About me</h2>
            <p>This is about me.</p>
            <ProjectSection />
            <ContactSection />
        </body>
    </div>
  )
}

export default Homepage