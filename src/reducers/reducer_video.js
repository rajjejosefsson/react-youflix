import { FETCH_VIDEOS } from '../actions/index';

export default function (state = null, action) {

    switch (action.type) {
        case FETCH_VIDEOS:
            console.log("STATEEEE",state);
            return action.payload.data.items;
    }
    return state;
}


/*


 import { FETCH_VIDEOS } from '../actions/index';

 export default function (state = [], action) {

 switch (action.type) {
 case FETCH_VIDEOS:
 console.log("STATEEEE",state);
 return [...state, ...action.payload.data.items];
 }
 return state;
 }


* */