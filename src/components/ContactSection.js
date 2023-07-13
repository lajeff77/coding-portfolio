import { Box, Link, Typography } from '@mui/material'
import React from 'react'

const ContactSection = () => {
  return (
    <Box  sx={{px: 3, py: 1}}>
        <Typography variant='h2' id='contact'>Contact</Typography>
        <Typography variant='body1'>Email: lajeff77@gmail.com</Typography>
        <Typography variant='body1'><Link href="https://github.com/lajeff77/">GitHub Profile</Link></Typography>
        <Typography variant='body1'><Link href=" https://www.linkedin.com/in/lauryn-jefferson/">LinkedIn Profile</Link></Typography>
    </Box>
  )
}

export default ContactSection