import axios from 'axios';

const ROOT_URL = 'https://www.googleapis.com/youtube/v3';
const API_KEY = 'AIzaSyCOXw2H-dFMhHBebvfBsESrX8v88rSCaP8';


export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const SELECTED_VIDEO = 'SELECTED_VIDEO';
export const NEXT_TOKEN = 'NEXT_TOKEN';
export const SEARCH_TERM = 'SEARCH_TERM';


export function getVideos(request) {
    return {
        type: FETCH_VIDEOS,
        payload: request
    }
}





function nextToken(token, term) {

    return {
        type: NEXT_TOKEN,
        payload: token,
        meta: { term }
    }
}


function searchTerm(term) {
    return {
        type: SEARCH_TERM,
        payload: term
    }
}




function nexetPageToken(token) {
    console.log(token);
}


export function fetchVideos(search_term, pageToken = '') {

    const url = `${ROOT_URL}/search?part=snippet&q=${search_term}&pageToken=${pageToken}&maxResults=20&safeSearch=strict&key=${API_KEY}`;
    console.log(url);
    const request = axios.get(url);


    return function (dispatch) {
        return dispatch(getVideos(request))
            .then(() => dispatch(nextToken(request, search_term)));
    };
}


export function selectedVideo(video) {
    console.log("selectedVideo Action", video);
    return {
        type: SELECTED_VIDEO,
        payload: video
    }
}





