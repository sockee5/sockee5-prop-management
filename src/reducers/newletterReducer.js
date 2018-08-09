import {
    SET_NEWSLETTERS
} from '../actions/types';

const INITIAL_STATE = {
    authenticated: false,
    newsletters: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_NEWSLETTERS:
            const newsletters = action.payload;
            return {
                ...state,
                newsletters: action.payload
            }
        default: return state;
    }
}