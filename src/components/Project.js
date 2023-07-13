import { Box, Link, Paper, Typography } from '@mui/material'
import React from 'react'

const Project = ({name, date, description, link}) => {
  return (
    <Box sx={{my: 2}}>
      <Paper elevation={3} sx={{p: 3}}>
        <Typography variant='h3'>{name}: {date}</Typography>
        <Typography variant='body1'>{description}</Typography>
        <Typography variant='body1'>View <Link href={link}>here</Link> on GitHub</Typography>
      </Paper>
    </Box>
  )
}

export default Project