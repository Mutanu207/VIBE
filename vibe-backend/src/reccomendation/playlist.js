import axios from "axios"
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
 export const searchYoutubeVIdeo = async (song) => {
            const query = `${song.title} ${song.artist}`;
            const url = 'https://www.googleapis.com/youtube/v3/search';
            const response = await axios.get(url, {
                params: {
                    part: 'snippet',
                    q: query,
                    key: YOUTUBE_API_KEY,
                    maxResults: 1,
                    type: 'video'}});
                    const video= response.data.items[0];
                    return {
                        title: song.title,
                        artist: song.artist,
                        videoId: video.id.videoId,
                        thumbnail: video.snippet.thumbnails.high.url,
                        youtubeTitle:video.snippet.title    
                    }}