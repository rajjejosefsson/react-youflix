import {combineReducers} from 'redux';
import VideoReducer from './reducer_video';
import SelectedVideoReducer from './reducer_selected-video';

const rootReducer = combineReducers({
    videos: VideoReducer,
    video: SelectedVideoReducer
});

export default rootReducer;
