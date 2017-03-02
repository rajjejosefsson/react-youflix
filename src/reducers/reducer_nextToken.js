import { NEXT_TOKEN } from '../actions/index';

export default function (state = null, action) {

    switch (action.type) {
        case NEXT_TOKEN:
            console.log('NEXT TOKEN IS:', action);
            return [action.payload.data.nextPageToken, action.meta.term];
    }

    return state;
}