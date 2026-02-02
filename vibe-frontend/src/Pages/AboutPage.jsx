import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
function AboutPage() {
    return(
        <Box sx={{minHeight: "100vh",
                    backgroundColor: "#0b1c2d",
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    justifyContent: 'center',
                    alignItems: 'center'     
        }}>
        <Container maxWidth="md">
            <Typography component="h1" variant="h3" gutterBottom 
                        sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center'
                        }}>
                About VIBE
            </Typography>
            <Typography variant="body1" 
            sx={{ color: 'grey', textAlign: 'center', fontStyle: 'italic' }} >
                "VIBE is my first project that i have built to grow my skills for the market.
                I got this idea from a fullstack developer on instagram @elacodes who built the same project
                Which made me think i do sometimes struggle finding music that matches my mood and i end up not listening to anything.
                So i decided to build this project to help myseld and my friends to find music that matches our mood.
                Its not a big project but im proud of it and i hope you find it useful.This project will be continously updated as i grow my skills."
            </Typography>
        </Container>
        </Box>
    )
} export default AboutPage;