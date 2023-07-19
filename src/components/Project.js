import { Box, Link, Card, Typography, CardContent, CardMedia } from '@mui/material'
// import NotesImg from '../assets/notes-screenshot.png'
import React, { useEffect, useState } from 'react'

const Project = ({name, description, link, imgPath, imgAlt}) => {
  return (
    <Box sx={{my: 2}}>
      <Card variant="outlined" sx={{p: 3, background:'#f9fbf2' }} alignItems="center">
        <CardContent align="center" sx={{margin:'none', p: 3}} >
          <Typography variant='h3'>{name}</Typography>
        </CardContent>
        <CardMedia component="img" src={imgPath} alt={imgAlt} style={{width: '90%', margin:'auto'}}/>
        <CardContent>
          <Typography variant='body1'>{description}</Typography>
          <Typography variant='body1'>View this project <Link href={link}>here</Link> on GitHub</Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Project