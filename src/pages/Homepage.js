import React from 'react'
import ProjectSection from '../components/ProjectSection'

const Homepage = () => {
  return (
    <div>
        <body>
            <h2 id='about'>About me</h2>
            <p>This is about me.</p>
            <ProjectSection />
            <h2 id='contact'>Contact</h2>
            <p>You can contact me here.</p>
        </body>
    </div>
  )
}

export default Homepage