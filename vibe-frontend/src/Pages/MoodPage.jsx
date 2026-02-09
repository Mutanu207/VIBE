import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {useState} from "react";
function MoodPage(){
    const [mood, setMood] = useState("");
    return(
        <Box sx={{ backgroundColor: "#0b1c2d",
            minHeight: "100vh",
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
                    Hello There
                </Typography>
                <TextField
                    fullWidth
                    label="Mood"
                    placeholder="I miss my Grandma"
                    variant="outlined"
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "white",
                            },
                            "&:hover fieldset": {
                                borderColor: "#b388ff",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#b388ff",
                            },}}} />

            </Container>
        </Box>

    )
}
export default MoodPage;