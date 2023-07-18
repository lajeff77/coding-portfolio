import { Box, Link, Paper, Typography } from '@mui/material'
// import NotesImg from '../assets/notes-screenshot.png'
import React, { useEffect, useState } from 'react'

const Project = ({name, description, link, imgPath, imgAlt}) => {
  return (
    <Box sx={{my: 2}}>
      <Paper variant="outlined" elevation={3} sx={{p: 3}}>
        <Typography variant='h3'>{name}</Typography>
        <img src={imgPath} alt={imgAlt} style={{width: '90%'}}/>
        <Typography variant='body1'>{description}</Typography>
        <Typography variant='body1'>View <Link href={link}>here</Link> on GitHub</Typography>
      </Paper>
    </Box>
  )
}

export default Project