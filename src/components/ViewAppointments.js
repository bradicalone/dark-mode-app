import React, { useState, useEffect } from 'react';

const ViewAppointments = (props) => {
    const [edit, setEdit] = useState(false);
    const [newData,  editData]  = useState({
        appointments: [],
        viewAppointments: false
    });

    // *******************      DIDN'T QUITE FINISH EDITAPPOINTMENTS  *******************
    const editAppointments = () => {
        let text = document.getElementsByClassName('edited-text')
        let content = {}
        Array.prototype.forEach.call(text, (el, i) => {
            let val = el.value
            let key = el.id
            content[key] = val
        })
        editData({appointments: newData.appointments.concat(text)})
    }


    return (
        <div className="view-appt">
            {props.formData.viewAppointments ?
            
            <div className="view-appointment">
            <h5>View Your Appointment</h5>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Date</td>
                        <td>Time</td>
                        <td>Location</td>
                        <td>Description</td>
                        {props.cancel && <td>Cancel Appt</td>}
                        {props.edit && <td>Edit underneath</td>}
                    </tr>
                </thead>
                <tbody>
                {
                    props.formData.appointments.map((el, i) => {
                        let row = i;
                        return (
                            <tr>
                                <td>{i}</td>
                                {
                                    Object.keys(el).map((value, k) => {
                                        let val = props.formData.appointments[row][value]
                                        return (
                                            <React.Fragment>
                                                {!props.edit && <td key={k}>{val}</td>}
                                                {props.edit && <td><textarea key={k} className="edited-text">{val}</textarea></td>}
                                                {k === 4 && <td className="remove-apnt">X</td>}  
                                            </React.Fragment>                 
                                        )     
                                    })
                                }
                                {props.cancel && <td className="remove-apnt"><button type="button" className="btn btn-danger" 
                                onClick={(e)=>{props.removeAppointment(e)}}>Remove</button></td>}  

                                {props.edit && <td className="edit-apnt"><button type="button" className="btn btn-success" 
                                onClick={edit}>Edit</button></td>}  
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
        : <span>First add appointment</span>}
        </div>
    )
}

export default ViewAppointments