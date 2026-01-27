import Navbar from "../Component/Navbar";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
function LandingPage(){
    return(
        <Box sx={{ minHeight: "100vh",
                   backgroundColor: "#0b1c2d",
                   display: 'flex',
                   flexDirection: 'column'}}>
            <Box  sx={{ my: 6,  flexGrow: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                display: 'flex' }}>
            <Container maxWidth="md">
                <Typography component="h1" variant="h3"
                            sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center', gutterBottom: true }}>
                    Music that matches your mood</Typography>
            </Container>
            </Box>
        </Box>
    )
}
export default LandingPage;