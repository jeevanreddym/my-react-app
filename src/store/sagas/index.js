import {takeEvery, all} from 'redux-saga/effects';
import * as ActionType from "../actions/actionTypes";
import {loadBlogsSaga, deleteBlogSaga} from "./blogs-saga";




/**
 *  Watch all Sagas.
 */
export function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}

function* actionWatcher() {
    yield takeEvery(ActionType.LOAD_BLOGS_USING_SAGA, loadBlogsSaga);
    yield takeEvery(ActionType.DELETE_BLOGS_USING_SAGA, deleteBlogSaga);
}