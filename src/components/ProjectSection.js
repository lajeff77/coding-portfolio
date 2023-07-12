import React, { useEffect } from 'react'
import projectsData from '../assets/projects-data'
import Project from './Project'

const ProjectSection = () => {

const project_components = projectsData.map(p => <Project name={p.name} date={p.date} description={p.description} link={p.link}/>)

return (
    <div>
        <h2 id='projects'>Projects</h2>
        <p>Here is a collection of my favorite solo projects over the years.</p>
        {project_components}
    </div>
  )
}

export default ProjectSection