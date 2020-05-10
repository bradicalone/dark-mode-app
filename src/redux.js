import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';
// import { ProgressPlugin } from 'webpack';


const Info = (props) => (
    <div>
        <h1>hey</h1>
        <p>this is a {props.info}</p>
    </div>
)

const HigherOrderFunc = (props) => (
    <div>
        {props.info}
    </div>
) 
// ReactDOM.render(<HigherOrderFunc info={"there is the details"} />, document.getElementById('app'));



const search = (text = '') => ({
    type: 'SEARCH',
    text
});

// Add appointment generator
const appointment = ({date, time, location, description} = {}) => ({
    type: 'ADD_APPOINTMENT',
    id: uuidv4(),
    appointment: {
        date,
        time,
        location,
        description
    }
})


const update_appt = {
    update: [],
    remove: [],
    edit: [],
    boolean: false,
    text: ''
}

const apptBoolean = (state) => ({
   type:  'VIEW_APPOINTMENTS',
    state
})

const appt_default_state = []
//Pure function reducer
const apptReducer = (state = appt_default_state  , action) => {
    switch (action.type) {
        case "ADD_APPOINTMENT":
            return [
                ...state,action.appointment
            ]
        case "REMOVE":
            return state;
        default: return state
    }
}
const updateReducer = (state = update_appt, action) => {
        switch (action.type) {
            case "UPDATE":
                return state
            case "EDIT":
                return state
            case "VIEW_APPOINTMENTS":
                console.log(state)
                //If appointments has a value other than undefined in it
                const isAppointment = Object.keys(state).some( key => state[key] ? true : false );
                return {isAppointment}
            // case "SEARCH":
            //     return state
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

const appt = store.dispatch(appointment({date: '3-10-2020'}))
const isAppointment = store.dispatch(apptBoolean(appt))
store.dispatch(search('rent'))

console.log(store.getState())
console.log(store.getState())

const unsubscribe = store.subscribe(()=> {
    
})

// store.subscribe(()=> {
//     console.log(store.getState())
// })

