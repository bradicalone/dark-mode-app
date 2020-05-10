import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { appointment, edit } from '../actions/appointments'
import Form from './Form';
import Appointments from './Appointments';
import EditAppointments from './EditAppointments';

const Data = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        let content = {}
        let elem = document.getElementsByTagName('input')

        Array.prototype.forEach.call(elem, (el, i) => {
            console.log(el.value, i, el.id)
            let val = el.value
            let key = el.id
            content[key] = val
        })

        props.dispatch(appointment(content))
        document.getElementsByTagName('form')[0].reset()
    }

    const removeAppointment = (e) => {
        let indexToRemove = e.target.parentElement.parentElement.children[0].innerText
        setFormValue({appointments: data.appointments.filter((item,i) => indexToRemove != i), viewAppointments: true})
    }

    const getLeftStyle = (props) => {
        if (window.innerWidth < 900) {
            return props.navOpen ? '170px' : '0' 
        }
    }
    const showPanel = () => {
        let text = props.navClicked.text
        let length = props.appointments.length
        return {panel: text, length}
    }
    
    return (
        <div style={{left: getLeftStyle(props)}} className="appointment-container">
            <div className="data-wrapper">
                <div className="header">
                    <h1>Appointments</h1>
                </div>
                <Appointments />
            </div>
            <div className="form-wrapper">
                <div className="data-container">
                    <Form handleSubmit={handleSubmit}/>
                </div>
            </div>
        </div>
    )
}

export default connect((state) => {
    return {
        appointments: state.appointments,
        navClicked: state.update,
    }
})(Data);
