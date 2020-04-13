import { v4 as uuidv4 } from 'uuid';

//Add appointment generator
export const search = (text = '') => ({
    type: 'SEARCH',
    text
});

// Add appointment generator
export const appointment = ({date, time, location, description} = {}) => ({
    type: 'ADD_APPOINTMENT',
    id: uuidv4(),
    appointment: {
        date,
        time,
        location,
        description
    }
})


export const apptBoolean = (state) => ({
    type:  'VIEW_APPOINTMENTS',
    state
})

// Event target for panel gets passed in and state also gets passed in. 
export const panelClicked = (btn_text, state) => ({
    type:  'PANEL_CLICKED',
    btn_text: btn_text, 
    state
})