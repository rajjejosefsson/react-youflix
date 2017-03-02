import {combineReducers} from 'redux';
import VideoReducer from './reducer_video';
import SelectedVideoReducer from './reducer_selected-video';
import NextPageTokenReducer from './reducer_nextToken';

const rootReducer = combineReducers({
    videos: VideoReducer,
    video: SelectedVideoReducer,
    nextPageToken: NextPageTokenReducer
});

export default rootReducer;
