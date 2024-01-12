import {combineReducers} from 'redux';
import DataReducer from './data';
import PostsReducer from './posts';

export default combineReducers({
    data: DataReducer,
    posts: PostsReducer
})