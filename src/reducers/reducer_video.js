import { FETCH_VIDEOS } from '../actions/index';

export default function (state = null, action) {

    switch (action.type) {
        case FETCH_VIDEOS:
            return action.payload.data.items;  // this will return a NEW array with the old state
    }


    return state;
}