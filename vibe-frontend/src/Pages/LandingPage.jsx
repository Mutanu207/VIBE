import Navbar from "../Component/Navbar";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PrimaryButton from "../Component/PrimaryButton";
import {useNavigate} from "react-router-dom";
function LandingPage(){
    const navigate = useNavigate();
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
                <Typography component="h1" variant="h3" gutterBottom
                            sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center', gutterBottom: true }}>
                    Music that matches your mood</Typography>
                    <Box sx={{ display: "flex", justifyContent: "center",mt:4 }}>
                    <PrimaryButton background="#8239f7ff" color="white" size="large"
                        onClick={ () => navigate("/mood")} >
                        Get Recommendation
                </PrimaryButton>
                </Box>
            </Container>
          </Box>
        </Box>
    )
}
export default LandingPage;