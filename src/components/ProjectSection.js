import React, { useEffect } from 'react'
import projectsData from '../assets/projects-data'
import Project from './Project'
import { Box, Typography } from '@mui/material'

const ProjectSection = () => {

const project_components = projectsData.map(p => <Project name={p.name} date={p.date} description={p.description} link={p.link}/>)

return (
    <Box sx={{px: 3, py: 1}}>
        <Typography variant='h2' id='projects'>Projects</Typography>
        <Typography variant='body1'>Here is a collection of my favorite solo projects over the years.</Typography>
        {project_components}
    </Box>
  )
}

export default ProjectSection