import { fetchEmotions } from "../ai/emotion.service";
import { fetchPlaylist } from "../reccomendation/reccomedation.service";
import { searchYoutubeVIdeo } from "../reccomendation/playlist";
 export const getMood = async (req,res) => {
    const {mood} = req.body; //input from user//
    try {
        const emotions = await fetchEmotions(mood);
        const reccomendations = await fetchPlaylist(emotions);//from here we will get the songs//
       const playlist = await searchYoutubeVIdeo(reccomendations)
       console.log(playlist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}