import Groq from 'groq-sdk';
const groq= new Groq
    ({apiKey:process.env.GROQ_API_KEY})
export const fetchPlaylist = async (emotions) => {
    // Logic to fetch playlists based on emotions
const messages = [
    {
        role:"system",
        content: `You are a music-recommendation assistant. Your job: return exactly 10 real, verifiable songs that match the user's emotion. 
                    Here is the emotion input: "${emotions}".
        MUST follow these rules exactly:

        1. OUTPUT: Return ONLY a JSON array (no explanation, no markdown, nothing else). The array must contain exactly 10 objects: [{ "title": "Song Title", "artist": "Artist Name" }].

        2. VERIFICATION: Prefer songs that are widely available and verifiable (popular playlists, major streaming services). Do not invent songs. If you cannot confidently verify a song exists, exclude it.

        3. UNIQUENESS: All 10 entries must be unique (unique title+artist). If the request includes \`previous_results\` (an array of songs), exclude those songs.

        4. DIVERSITY: Aim for variety: include at least 6 different artists, span multiple eras/decades when possible, and include multiple genres that fit the emotion.

        5. RELEVANCE: Each chosen song must strongly match the emotion. Avoid generic repeats across different emotion inputs.

        6. ORDERING: Randomize the order so repeated calls produce different lists for the same emotion.

        7. FAILURE MODE: If you cannot produce 10 verifiable songs, return an empty JSON array [] and a message "Unable to fetch recommended songs.".

        8. STRICT FORMAT: Do not add any extra fields, comments, or text. Only the array is allowed. `
        
    }]
    try {
        const response= await groq.chat.completions.create({
            model:"llama-3.1-8b-instant",
            messages:messages,
            temperature:0.6
        })
        const content = response.choices[0].message.content.trim();
        const songs = JSON.parse(content);
        console.log(songs)
        return songs;
    }
    catch (error) {
        console.error("Error fetching playlists:", error);
        throw error;}}