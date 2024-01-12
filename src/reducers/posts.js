import {Types} from '../actions/data';

const INIT_STATE = {
  data: [],
}

export default function posts(state = INIT_STATE, action) {
  switch(action.type) {
    case Types.GET_POSTS_SUCCESS: {
      console.log("redux -> ", action.payload)
      return {
        data: action.payload.posts,
      }
    }
    default: {
      return state;
    }
  }
}