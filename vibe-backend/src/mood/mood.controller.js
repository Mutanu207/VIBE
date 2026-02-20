import { fetchEmotions } from "../ai/emotion.service";
const getMood = async (req,res) => {
    const {mood} = req.body;
    try {
        const emotions = await fetchEmotions(mood);
        const reccomendations = await fetchPlaylists(emotions);
       
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}