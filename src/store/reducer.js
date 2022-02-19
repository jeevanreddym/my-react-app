/**
 *  Single reducer is split into multiple reducers.
 */
import * as ActionType from "./actions/actionTypes";


const initialState = {
    counter: 0,
    blogs: [],
    selBlog: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.INC_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            };
        case ActionType.ADD_COUNTER:
            return {
                ...state,
                counter: state.counter + action.payload.num,
            };
        case ActionType.LOAD_BLOGS:
            // const newState = Object.assign({}, state); // Gives a new JS object
            const newState = {
                ...state,
                blogs: action.blogs,
            };
            return newState;
        case ActionType.SELECT_BLOG:
            alert(action.selBlog.title);
            return {
                ...state,
                selBlog: action.selBlog
            };
        case ActionType.DELETE_BLOG:

            /*const updatedBlogs = [...state.blogs];
            updatedBlogs.splice(blogId, 1);*/

            const updatedBlogs = state.blogs.filter(blog => blog.id !== action.blogId); // filter method returns a new arrays.

            return {
                ...state,
                blogs: updatedBlogs,
            };
    }
    return state;
};
export default reducer;