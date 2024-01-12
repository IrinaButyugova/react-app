export const Types = {
    GET_DATA_REQUEST: 'get_data_request',
    GET_DATA_SUCCESS: 'get_data_success',
    GET_POSTS_REQUEST: 'get_posts_request',
    GET_POSTS_SUCCESS: 'get_posts_success',
    CREATE_POST_REQUEST: 'create_post_request',
}

export const getDataRequest = () => ({
    type: Types.GET_DATA_REQUEST
})

export const getDataSuccess = ({data}) => ({
    type: Types.GET_DATA_SUCCESS,
    payload: { data }
})

export const getPostsRequest = () => ({
    type: Types.GET_POSTS_REQUEST
})

export const getPostsSuccess = ({posts}) => ({
    type: Types.GET_POSTS_SUCCESS,
    payload: { posts }
})

export const createPostRequest = ({post}) => ({
    type: Types.CREATE_POST_REQUEST,
    payload: {post}
})