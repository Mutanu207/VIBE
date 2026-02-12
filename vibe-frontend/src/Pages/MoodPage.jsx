import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {motion} from "framer-motion";
import {useState} from "react";
import PrimaryButton from "../Component/PrimaryButton";
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
                 <motion.div
            initial={{y:80, opacity: 0}}
            animate={{y:0, opacity:1}}
            transition={{duration: 0.5, ease: "easeOut"}}
            >
                <Typography component="h1" variant="h3" gutterBottom
                            sx={{
                                color: 'white',
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}>
                    Hello There
                </Typography>
                </motion.div>
                <motion.div
            initial={{y:80, opacity: 0}}
            animate={{y:0, opacity:1}}
            transition={{duration: 0.9, ease: "easeOut"}}
            >
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
                            },
                            borderRadius:"10px"},
                          "& .MuiInputBase-input": {
                          color: "#fff",
                          "&::placeholder": { color: "#fff" }
                        },
                        "& .MuiInputLabel-root": {
                          color: "rgba(255,255,255,0.7)"
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#b388ff"
                        }}} /> 
                        </motion.div>
                        <motion.div
                            initial={{y:80, opacity: 0}}
                            animate={{y:0, opacity:1}}
                            transition={{duration: 0.13, ease: "easeOut"}} >
                        <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>                                        
                        <PrimaryButton background="#8239f7ff" 
                                        color="white" 
                                        size="large">
                            Fetch Music
                        </PrimaryButton>
                        </Box>
                        </motion.div>
            </Container>
        </Box>

    )
}
export default MoodPage;