import {Container, Box, Typography} from '@mui/material'
import React from 'react'

const AboutMeSection = () => {
  return (
    <Box sx={{px: 3, py: 1}}>
      <Typography variant='h2' id='about'>About me</Typography>
      <Typography variant='body1'>I am a coder! This is my portfolio website! Feel free to browse my projects below!</Typography>
    </Box>
  )
}

export default AboutMeSection