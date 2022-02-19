import {delay, put} from 'redux-saga/effects';
import * as Actions from "../actions/actions";
import axios from "axios";


/**
 *  Redux Saga Generators.
 *  Asynchronous operations using Redux Sagas.
 */

export function* helloSaga() {
    console.log('Hello Sagas!');
}

export function* loadBlogsSaga(action) {
    const response = yield axios.get('https://jsonplaceholder.typicode.com/todos');
    try {
        yield console.log(response);
        yield put(Actions.onLoadBlogs(response.data));
    } catch (error) {
        yield console.log(error);
        yield put(Actions.onLoadBlogs([]));
    }
}

export function* deleteBlogSaga(action) {
    yield delay(2000);
    yield put(Actions.deleteBlogAction(action.blogId));
}

