import produce from "immer";
import * as ActionType from "../actions/actionTypes";


const initialState = {
    counter: 0,
};
const usersReducer = (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case ActionType.INC_COUNTER:
                draft.counter = state.counter + 1;
                break;
            case ActionType.ADD_COUNTER:
                draft.counter = state.counter + action.payload.num;
                break;
            case ActionType.LOAD_USERS:
                draft.persons = action.persons;
                break;
            default: {}
        }
    });
};
export default usersReducer;