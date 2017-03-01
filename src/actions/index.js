import axios from 'axios';

const ROOT_URL = 'https://www.googleapis.com/youtube/v3';
const API_KEY = 'AIzaSyCOXw2H-dFMhHBebvfBsESrX8v88rSCaP8';


export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const SELECTED_VIDEO = 'SELECTED_VIDEO';


export function fetchVideos(search_term) {
    const url = `${ROOT_URL}/search?part=snippet&q=${search_term}&key=${API_KEY}`;
    const request = axios.get(url);

    return {
        type: FETCH_VIDEOS,
        payload: request
    }
}


export function selectedVideo(video) {
    console.log("selectedVideo ACtion", video);
    return {
        type: SELECTED_VIDEO,
        payload: video
    }
}

