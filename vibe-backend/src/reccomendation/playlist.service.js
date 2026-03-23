import axios from "axios";

export const searchItunesTrack = async (songs) => {
  if (!Array.isArray(songs)) {
    throw new TypeError("Expected an array of song objects: [{ title, artist }, ...]");
  }

  // limit to 10 just in case
  const input = songs.slice(0, 10);

  const results = await Promise.all(
    input.map(async (song) => {
      try {
        const response = await axios.get("https://itunes.apple.com/search", {
          params: {
            term: `${song.title || ""} ${song.artist || ""}`.trim(),
            media: "music",
            limit: 1,
          },
        });

        const item = Array.isArray(response.data?.results) ? response.data.results[0] : null;

        if (!item) {
          return {
            title: song.title || "Unknown Title",
            artist: song.artist || "Unknown Artist",
            thumbnail: null,
            previewUrl: null,
            trackUrl: null,
            source: "itunes",
          };
        }

        return {
          title: item.trackName || song.title || "Unknown Title",
          artist: item.artistName || song.artist || "Unknown Artist",
          thumbnail: (item.artworkUrl100 || "").replace("100x100", "600x600"),
          previewUrl: item.previewUrl || null,
          trackUrl: item.trackViewUrl || null,
          source: "itunes",
          raw: item, // optional: full API result for debugging
        };
      } catch (err) {
        console.error("iTunes search error for", song, err?.message || err);
        return {
          title: song.title || "Unknown Title",
          artist: song.artist || "Unknown Artist",
          thumbnail: null,
          previewUrl: null,
          trackUrl: null,
          source: "itunes",
          error: err?.message || String(err),
        };
      }
    })
  );

  return results; // array of up to 10 objects with title, artist, thumbnail, previewUrl, trackUrl
};