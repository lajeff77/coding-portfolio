import { AppBar, Button, Link, Stack, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{
            flexGrow: 1
          }}>
            Lauryn Jefferson
          </Typography>
          <Stack>
            <div style={{ display: 'flex', gap: '10px' }}>
                <Button color='inherit'><Link href='#about'  color="inherit"  style={{ textDecoration: 'none' }}>About</Link></Button>
                <Button color='inherit'><Link href='#projects'  color="inherit" style={{ textDecoration: 'none' }}>Projects</Link></Button>
                <Button color='inherit' ><Link href='#contact'  color="inherit" style={{ textDecoration: 'none' }}>Contact</Link></Button>
            </div>
          </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default Header
