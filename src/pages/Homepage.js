import React from 'react'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import AboutMeSection from '../components/AboutMeSection'

const Homepage = () => {
  return (
    <div>
        <body>
            <AboutMeSection />
            <ProjectSection />
            <ContactSection />
        </body>
    </div>
  )
}

export default Homepage