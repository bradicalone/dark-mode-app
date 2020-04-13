import React, { useState, useEffect } from 'react';
import ViewAppointments from './ViewAppointments'


const EditAppointments = (props) => {
    const [edit, setValue] = useState(false);


    useEffect(() => {
        props.edit === "edit appointments" ? setValue(true) : setValue(false)
    }, [])

    return (
        <div className="edit-appt">
            <h5>Edit appointments</h5>
            <div className="edit-appointment">
                <ViewAppointments formData={props.formData} edit={edit}/>
            </div>
        </div>
    )
}

export default EditAppointments