import { createStore, combineReducers } from 'redux';
import { apptReducer } from '../reducers/appointments';
import { updateReducer } from '../reducers/appointments';

export default () => {
    // When state changes
    const store = createStore(
        combineReducers({
            appointments: apptReducer,
            update: updateReducer
        })
    )
    return store;
}
