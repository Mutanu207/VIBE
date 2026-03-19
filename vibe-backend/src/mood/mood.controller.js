import { fetchEmotions } from "../ai/emotion.service.js";
import { fetchPlaylist } from "../reccomendation/reccomedation.service.js";
import { searchYoutubeVIdeo } from "../reccomendation/playlist.service.js";
 export const getMood = async (req,res) => {
    const {mood} = req.body; //input from user//
    try {
        const emotion = await fetchEmotions(mood);
        const reccomendations = await fetchPlaylist(emotion);//from here we will get the songs//
       const playlist = await searchYoutubeVIdeo(reccomendations)
       console.log(playlist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}