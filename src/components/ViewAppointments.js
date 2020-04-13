import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { apptBoolean } from '../actions/appointments.js'

const ViewAppointments = (props) => {
    const [edit, setEdit] = useState(false);
    const [newData,  editData]  = useState({
        appointments: [],
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
            <div className="view-appointment">
                <h5>Your Appointments</h5>
                <table className="table table-striped">
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
                        props.appointments.map((el, i) => {
                            let row = i;
                            console.log(props)
                            return (
                                <tr key={i}>
                                    <td key={i}>{i}</td>
                                    {
                                    (() => {
                                        
                                        
                                        switch ( props.navClicked.text ) {
                                            case "edit appointments":
                                                return <Edit el={el} />
                                            case "":
                                                return <Create el={el} edit={editAppointments}/>
                                        }
                                        
                                        // Object.keys(el).map((value, k) => {
                                        //     let val = props.formData.appointments[row][value]
                                        //     return (
                                        //         <React.Fragment key={k}>
                                                   
                                        //             {!props.edit && <td>{val}</td>}
                                        //             {props.edit && <td><textarea className="edited-text">{val}</textarea></td>}
                                        //             {k === 4 && <td className="remove-apnt">X</td>}  
                                        //         </React.Fragment>                 
                                        //     )     
                                        // })
                                    })()}
                                    {props.cancel && <td className="remove-apnt"><button type="button" className="btn btn-danger" 
                                    onClick={(e)=>{props.removeAppointment(e)}}>Remove</button></td>}  
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const Create = (props) => (
    <React.Fragment>
    {
            Object.keys(props.el).map((value, k) => {
                console.log(value)
                let val = props.el[value]
                return (
                    <td key={k}>{val}</td>         
                )     
            })
        }
    </React.Fragment>
)
const Edit = (props) => (
    <React.Fragment>
       {
            Object.keys(props.el).map((value, k) => {
                console.log(value)
                let val = props.el[value]
                return (
                    <td key={k}><textarea className="edited-text" defaultValue={val} onChange={props.edit}></textarea></td>        
                )     
            })
        }
        <td className="edit-apnt"><button type="button" className="btn btn-success">Edit</button></td>
    </React.Fragment>
)

export default connect((state) => {
    return {
        appointments: state.appointments,
        navClicked: state.update
    }
})(ViewAppointments);

