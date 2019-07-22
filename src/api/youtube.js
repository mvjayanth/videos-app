import axios from 'axios';
const KEY = "AIzaSyCMV_l-et3pqLm12KAYoJgGGJ5I_OhQLIQ";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: 'snippet',
        maxResults: 6,
        key: KEY 
    }
})

