import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { appointment } from '../actions/appointments'
import Form from './Form';
import ViewAppointments from './ViewAppointments';
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
            // return props.navOpen ? 'calc(50% + 170px)' : '50%' 
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
                    
                    {
                            (()=> {
                                let text = showPanel().panel
                                console.log('text:', text)
                                let length = showPanel().length
                                switch(text) {
                                    case '':
                                        return <ViewAppointments />
                                    case 'view appointments':
                                        console.log('next')
                                        let showViewAppointments = length ? <ViewAppointments />: <span>First add appointment</span>
                                        return showViewAppointments 
                                    case 'edit appointments':
                                        let showEditAppointments = length ? 
                                            <EditAppointments
                                                edit={props.panel}
                                            />  : <span>First add appointment</span>
                                        return showEditAppointments
                                    case 'cancel appointment':
                                        let showCancelAppointments = length ?
                                            <ViewAppointments 
                                                formData={data}
                                                cancel={props.panel}
                                                removeAppointment={removeAppointment}
                                            /> : <span>First add appointment</span>
                                    return showCancelAppointments
                                    
                                }
                            })()
                        }
                </div>
                <div className="form-wrapper">
                    
                    
                    <div className="data-container">
                    <Form handleSubmit={handleSubmit}/>
                        
                    </div>
                    {/* <Form handleSubmit={handleSubmit}/>
                        {
                            (()=> {
                                let text = showPanel().panel
                                let length = showPanel().length
                                switch(text) {
                                    case 'view appointments':
                                        let showViewAppointments = length ? <ViewAppointments formData={data}/>: <span>First add appointment</span>
                                        return showViewAppointments 
                                    case 'edit appointments':
                                        let showEditAppointments = length ? 
                                            <EditAppointments
                                                formData={data}
                                                edit={props.panel}
                                            />  : <span>First add appointment</span>
                                        return showEditAppointments
                                    case 'cancel appointment':
                                        let showCancelAppointments = length ?
                                            <ViewAppointments 
                                                formData={data}
                                                cancel={props.panel}
                                                removeAppointment={removeAppointment}
                                            /> : <span>First add appointment</span>
                                        return showCancelAppointments
                                    
                                }
                            })()
                        }
                    </div> */}
                </div>
            </div>
        )

    
}
export default connect((state) => {
    return {
        appointments: state.appointments,
        navClicked: state.update
    }
})(Data);
