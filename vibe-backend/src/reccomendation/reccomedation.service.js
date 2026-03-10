import Groq from 'groq-sdk';
const groq= new Groq({apiKey:process.env.GROQ_API_KEY})
export const fetchPlaylist = async (emotions) => {
    // Logic to fetch playlists based on emotions
const messages = [
    {
        role:"system",
        content: `Give me 10 song recommendations for someone feeling "${emotions}".
                   Make sure the songs you generate do match the emotion, do a search to be sure.
                   You can go through saved playlist across the internet to find songs that match the emotion, but make sure to only give me songs that are actually in those playlists, 
                   do not just generate songs that you think match the emotion.
                   Make sure to give me songs that are real, do not generate songs that dont exists.
                  Return ONLY a valid JSON array, no explanation, no markdown, nothing else.
                  Format: [{ "title": "Someone Like You", "artist": "Adele" }]`
                
    }]
    try {
        const response= await groq.chat.completions.create({
            model:"llama3-8b-3192",
            messages:messages,
            temprature:0.1
        })
        const songs = JSON.parse(response.choices[0].message.content);
        return songs;
    }
    catch (error) {
        console.error("Error fetching playlists:", error);
        throw error;

        }
    }