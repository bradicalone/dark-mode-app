
const appt_default_state = []
//Pure function reducer
export const apptReducer = (state = appt_default_state  , action) => {
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

const update_appt = {
    update: [],
    remove: [],
    edit: [],
    text: ''
}

export const updateReducer = (state = update_appt, action) => {
    switch (action.type) {
        case "UPDATE":
            return state
        case "EDIT":
            return state
        case "VIEW_APPOINTMENTS":
            //If appointments has a value other than undefined in it
            const isAppointment = Object.keys(state).some( key => state[key] ? true : false );
            return {isAppointment}
        case "PANEL_CLICKED":
            let length = action.state.length ? true : false
            return {text: action.btn_text, boolean: length}
        case "SEARCH":
        //     return state
        default: return state
    }
}