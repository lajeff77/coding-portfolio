import { Box, Typography, Grid} from '@mui/material'

const AboutMeSection = () => {
  return (
    <Box sx={{px: 10, py: 10, background: "#9CA3DB"}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}><img src={require('../assets/lauryn.jpg')} style={{width: '90%'}} alt='A picture of Lauryn Jefferson sitting criss-cross applesauce in a patch of grass.' sx={{py:5}}/></Grid>
        <Grid item xs={6}>
          <Typography variant='h2' id='about' sx={{py:5}}>About me</Typography>
          <Typography variant='body1' sx={{py:5}}>I am a coder! This is my portfolio website! Feel free to browse my projects below!</Typography></Grid>
      </Grid>
    </Box>
  )
}

export default AboutMeSection