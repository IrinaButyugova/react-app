import {Types} from '../actions/data';

const INIT_STATE = {
    test: "Hello Redux!"
}

export default function data(state = INIT_STATE, action) {
    switch(action.type) {
        case Types.GET_DATA_SUCCESS: {
            console.log("redux -> ", action.payload.data.test)    
            return {
                test: action.payload.data.test
            }
        }
        default: return state;
    }
}