import axios from "axios";
export const getMusic = (mood) => {
    return axios.post("/api/mood/", { mood })};