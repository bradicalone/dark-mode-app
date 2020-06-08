// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { apptBoolean, edit, panelClicked } from '../actions/appointments.js'

const Appointments = (props) => {
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
                            console.log(el)
                            return (
                                <tr key={i}>
                                    <td key={i}>{i}</td>
                                    {
                                    (() => {
                                        switch ( props.navClicked.text ) {
                                            case "create appointments":
                                                return <Create el={el}/>
                                            case "edit appointments":
                                                return <Edit dispatch={props.dispatch} el={el} />
                                            case "" :
                                                return <Create el={el}/>
                                            case "cancel appointment":
                                                return <Cancel el={el} />
                                        }
                                    })()}
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
/**
 * Cancel appointment
 * @param {Object} props.el - object
 * @param {string} props.el.date - date
 * @param {string} props.el.time - time
 * @param {string} props.el.location - location
 * @param {string} props.el.descrition - description
 */
const Cancel = (props) => (
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
        <td className="cancel-apnt">
            <button type="button" className="btn btn-info">Cancel</button>
            <i className="fas fa-trash-alt"></i>
        </td>
    </React.Fragment>
)
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
const Edit = (props) => {
    const saveEdit = (e) => {
        let elements = e.target.parentNode.parentNode
        console.log('elements:', elements)
        let editedText = document.getElementsByClassName('edited-text')
        props.dispatch( edit(elements) )
        props.dispatch( panelClicked('', props.el))
    }
    return (
    <React.Fragment>
       {
            Object.keys(props.el).map((value, k) => {
     
                let val = props.el[value]
                return (
                    <td key={k}><textarea data-text={value} className="edited-text" defaultValue={val}></textarea></td>        
                )     
            })
        }
        <td className="edit-apnt"><button type="button" className="btn btn-success" onClick={(e)=>{saveEdit(e)}}>Save</button></td>
    </React.Fragment>
    )
}

export default connect((state) => {
    return {
        appointments: state.appointments,
        navClicked: state.update
    }
})(Appointments);

