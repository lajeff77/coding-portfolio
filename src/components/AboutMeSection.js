import { Box, Typography, Grid} from '@mui/material'

const AboutMeSection = () => {
  return (
    <Box sx={{px: 10, py: 10, background: "#9CA3DB"}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}><img src={require('../assets/lauryn.jpg')} style={{width: '90%'}} alt='A picture of Lauryn Jefferson, wearing a neutral toned outfit, sitting criss-cross applesauce in a patch of grass.' sx={{py:5}}/></Grid>
        <Grid item xs={6}>
          <Typography variant='h2' id='about' sx={{py:3}}>About me</Typography>
          <Typography variant='body1' sx={{}}>
            When I was in middle school I first started coding. I had a Nintendo 3DS with an app on it called Petit Computer. The app had an adaptation of the BASIC programming language called "SmileBASIC". After browsing the poorly localized in-game documentation for the language, I became frustrated and looked to the internet. 
            In my journey to learn more about SmileBASIC, I started learning about all kinds of other programming languages on the Internet, like C, C++, Java, Python, HTML, CSS, and Javascript. Thus I became infatuated with coding.<br/>
            In my second year of high school, my school began to offer a computer science course. In the days leading up to taking the class, I was so excited that I had dreams about taking the course. I finally learned coding in a formal setting, and everything began to click. I went on to complete my first solo project called Shoot Em' Up the summer after graduating high school. <br/>
            Studying Computer Science in college was a no-brainer during application time. I attended San Diego State University. I served as a TA for the data structures course and tutored my peers in Computer Science courses at the EOP tutoring center on campus.
            I graduated from San Diego State with a Bachelors of Science in Computer Science in May of 2021.<br/>
            During my studies I interned at the Carnegie Mellon Human Computer Interaction Institute, and Intuit (the maker of TurboTax). 
            Since graduating, I continued to work full time as a fullstack software engineer with Intuit.
          </Typography>
          </Grid>
      </Grid>
    </Box>
  )
}

export default AboutMeSection