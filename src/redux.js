import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

//Add appointment generator
const appointment = (appointment = []) => ({
    type: 'ADD_APPOINTMENT',
    id: uuidv4(),
    appointment
})

const search = (text = '') => ({
    type: 'SEARCH',
    text
});

const appt_data = {
    appointment: []
}
const update_appt = {
    update: [],
    remove: [],
    edit: [],
    boolean: false,
    search: ''
}

const appointments = []

const updateReducer = (state = update_appt, action) => {
    console.log(state.action)
    switch (action.type) {
        case "UPDATE":
            return state.appointment.concat(action.add)
        case "REMOVE":
            return state
        case "EDIT":
            return state
        case "APPT_BOOLEAN":
            return state
        case "SEARCH":
            return state
        default: return state
    }
}

//Pure function reducer
const apptReducer = (state = appt_data , action) => {
    switch (action.type) {
        case "ADD_APPOINTMENT":
            return state.appointment.concat(action.appointment)
        case "VIEW_APPOINTMENTS":
            return state
        default: return state
    }
}

// When state changes
const store = createStore(
    combineReducers({
        appointments: apptReducer,
        update: updateReducer
    })
)

store.dispatch(appointment(['start today']))
store.dispatch(search('rent'))



const unsubscribe = store.subscribe(()=> {
    console.log(store.getState())
})

