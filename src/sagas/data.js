import { takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/data';
import * as api from '../api/data';

function* fetchData() {
    try {
        const { data } = yield call(api.getData);
        yield put(actions.getDataSuccess( { data } ))
    }catch(e) {
        console.log(e);
    }
}

function* watchFetchData() {
    yield takeEvery(actions.Types.GET_DATA_REQUEST, fetchData);
}

function* fetchPosts() {
    try {
        const posts = yield call(api.getPosts);
        console.log(posts);
        yield put(actions.getPostsSuccess( {posts: posts.data} ))
    }catch(e) {
        console.log(e);
    }
}

function* watchFetchPosts() {
    yield takeEvery(actions.Types.GET_POSTS_REQUEST, fetchPosts);
}

function* createPost(action) {
    try {
        yield call(api.createPost, {post: action.payload.post});
        const posts = yield call(api.getPosts);
        yield put(actions.getPostsSuccess( {posts: posts.data} ))
    }catch(e) {
        console.log(e);
    }
}

function* watchCreatePost() {
    yield takeEvery(actions.Types.CREATE_POST_REQUEST, createPost);
}

const DataSagas = [
    fork(watchFetchData),
    fork(watchFetchPosts),
    fork(watchCreatePost)
];
export default DataSagas;