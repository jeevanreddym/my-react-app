import * as ActionType from "../actions/actionTypes";
import {updateObject} from "../../utils/ImmutableObjectUtils";



const initialState = {
    blogs: [],
    selBlog: null,
};

const blogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOAD_BLOGS:
            // const newState = Object.assign({}, state); // Gives a new JS object
            /*const newState = {
                ...state,
                blogs: action.blogs,
            };
            return newState;*/

            return updateObject(state, {
                blogs: action.blogs,
            });

        case ActionType.SELECT_BLOG:
            alert(action.selBlog.title);
            return updateObject(state, {
                selBlog: action.selBlog
            });

        case ActionType.DELETE_BLOG:

            /*const updatedBlogs = [...state.blogs];
            updatedBlogs.splice(blogId, 1);*/

            const updatedBlogs = state.blogs.filter(blog => blog.id !== action.blogId); // filter method returns a new arrays.

            return {
                ...state,
                blogs: updatedBlogs,
            };
        default: {}
    }
    return state;
};
export default blogsReducer;
