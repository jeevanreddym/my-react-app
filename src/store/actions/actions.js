import * as ActionType from "./actionTypes";
import axios from "axios";

import usersResp from "../../container/Users/Users.json";



/**
 *  Action Creators, 2 types: Synchronour(Pure actions) & Asynchronous.
 */

export const onLoadBlogs = (blogs) => {
    return  {
        type: ActionType.LOAD_BLOGS,
        blogs: blogs
    };
};

export const selectBlog = (blog) => {
    return {
        type: ActionType.SELECT_BLOG,
        selBlog: blog,
    }
};

export const deleteBlogAction = (blogId) => {
    return  {
        type: ActionType.DELETE_BLOG,
        blogId: blogId,
    }
};



/**
 *  Redux-Saga Actions.
 */
export const loadBlogsUsingSaga = () => {
    return  {
        type: ActionType.LOAD_BLOGS_USING_SAGA,
    }
};

export const deleteBlogsUsingSaga = (blogId) => {
    return  {
        type: ActionType.DELETE_BLOGS_USING_SAGA,
        blogId: blogId,
    }
};

export const fetchBlogUsingSaga = (blogId) => ({
    type: ActionType.DELETE_BLOGS_USING_SAGA,
    blogId: blogId,
});

export const incrementCounter = () => {
    return {
        type: ActionType.INC_COUNTER,
    }
};
export const addCounter = (num) => {
    return {
        type: ActionType.ADD_COUNTER,
        payload: {
            num: num,
        }
    }
};



/**
 *  Redux Thunk. Async operation using redux thunk.
 */
export const deleteBlog = (blogId) => { // returns the updated state object after a timeout.
    return dispatch => {
        setTimeout(() => {
            dispatch(deleteBlogAction(blogId));
        }, 2000);
    }
};
/*export const deleteBlog = (blogId) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldBlog = getState().blogsRdcr.selBlog;
            console.log(oldBlog);
            dispatch(deleteBlogActions(blogId));
        }, 2000);
    }
};*/

export const fetchBlogAsync = (blogId) => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + blogId)
            .then(response => {
                alert(JSON.stringify(response.data, null, 2));
                dispatch(selectBlog(response.data));
            })
            .catch(error => {
                alert(JSON.stringify(error, null, 2));
                dispatch(selectBlog({}));
            });
    }
};

export const loadBlogsUsingThunk = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                dispatch(onLoadBlogs(response.data));
            })
            .catch(error => {
                dispatch(onLoadBlogs([]));
            });
    }
};

const myDelay = (ms) => new Promise(res => setTimeout(res, ms));

export const loadUsers = () => {
    return dispatch => {
        dispatch(onUsersLoad(usersResp.persons));
    }
};

export const onUsersLoad = (persons) => {
    return  {
        type: ActionType.LOAD_USERS,
        persons: persons
    }
};