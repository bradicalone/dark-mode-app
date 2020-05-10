import { createStore, combineReducers } from 'redux';
import { apptReducer, updateReducer } from '../reducers/appointments';


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
