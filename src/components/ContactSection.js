import { Box, Link, Typography } from '@mui/material'
import React from 'react'

const ContactSection = () => {
  return (
    <Box  sx={{px: 10, py: 10, background: "#9CA3DB"}}>
        <Typography variant='h2' id='contact' sx={{py:5}}>Contact</Typography>
        <Typography variant='h3' sx={{py:2}}>Want to Get in Contact with Me?</Typography>
        <Typography variant='body1' sx={{py:1}}>Email: lajeff77@gmail.com</Typography>
        <Typography variant='body1' sx={{py:1}}><Link href="https://github.com/lajeff77/">GitHub Profile</Link></Typography>
        <Typography variant='body1' sx={{py:1}}><Link href=" https://www.linkedin.com/in/lauryn-jefferson/">LinkedIn Profile</Link></Typography>
    </Box>
  )
}

export default ContactSection