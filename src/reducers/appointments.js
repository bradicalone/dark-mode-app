
const appt_default_state = []

//Pure function reducer
export const apptReducer = (state = appt_default_state , action) => {
    switch (action.type) {
        case "ADD_APPOINTMENT":
            console.log(action)
            return [
                ...state,action.appointment
            ]
        case "REMOVE":
            return state;
        case "EDIT":
            let newObj = {}
            let children = action.elements.children
            let rowIndex = ~~action.elements.children[0].textContent

            Array.prototype.forEach.call(children,(el) => {
                let target = el.firstChild.className
                
                // get values only from the elements that can have data
                if(target === 'edited-text') {
                    let key =  el.firstChild.dataset.text
                    let val = el.firstChild.value
                    newObj[key] = val
                } 
            })

            state[rowIndex] = {...state[rowIndex], ...newObj} 
            console.log(state)
            return state

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