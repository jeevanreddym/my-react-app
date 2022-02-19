const redux = require('redux');


// Initial state.
const initialState = {
    counter: 0,
};


// Reduced.
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'ADD_COUNTER':
            return {
                ...state,
                counter: state.counter + action.payload.num,
            };
        default: {
            // do nothing.
        }
    }
    return state;
}


// Store.
const store = redux.createStore(rootReducer);


// Subscription.
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});



// Dispatch Action.
store.dispatch({
    type: 'INC_COUNTER'
});
store.dispatch({
    type: 'ADD_COUNTER',
    payload: {
        num: 10,
    }
});
store.dispatch({
    type: 'ADD_COUNTER',
    payload: {
        num: 20,
    }
});
//console.log(store.getState());

