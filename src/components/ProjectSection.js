import React, { useEffect } from 'react'
import projectsData from '../assets/projects-data'
import Project from './Project'
import { Box, Grid, Typography } from '@mui/material'

const ProjectSection = () => {

const project_components = projectsData.map(p => <Grid item xs={4}><Project name={p.name} description={p.description} link={p.link} imgPath={p.imgPath} imgAlt={p.imgAlt}/></Grid>)

return (
    <Box sx={{px: 10, py: 10}}>
        <Typography variant='h2' id='projects'>Projects</Typography>
        <Typography variant='body1'>Here is a collection of my favorite solo projects over the years.</Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {project_components}
        </Grid>
    </Box>
  )
}

export default ProjectSection