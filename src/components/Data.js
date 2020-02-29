import React, { useState, useEffect } from 'react';
import CreateAppointment from './CreateAppointment'
import ViewAppointments from './ViewAppointments'
import EditAppointments from './EditAppointments';

const Data = (props) => {
    const [data, setFormValue] = useState({
        appointments: [],
        viewAppointments: false
    });

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
        setFormValue({appointments: data.appointments.concat(content), viewAppointments: true})
        document.getElementsByTagName('form')[0].reset()
    }

    const removeAppointment = (e) => {
        let indexToRemove = e.target.parentElement.parentElement.children[0].innerText
        setFormValue({appointments: data.appointments.filter((item,i) => indexToRemove != i), viewAppointments: true})
    }

    const getLeftStyle = (props) => {
        if (window.innerWidth < 900) {
            return props.navOpen ? 'calc(50% + 170px)' : '50%' 
        }
    }

        return (
            <div style={{left: getLeftStyle(props)}} className="data-wrapper">

                {console.log(props, data)}
                <div class="header">
                    <h1>Appointments</h1>
                </div>
                <div className="data-container">
                    {props.panel === "create appointments" &&
                        <React.Fragment>
                            <CreateAppointment handleSubmit={handleSubmit}/>
                            <ViewAppointments formData={data}/>
                        </React.Fragment>
                    }
                    {props.panel === "view appointments" && <ViewAppointments formData={data}/>}
                    {props.panel === "cancel appointment" && 
                    <ViewAppointments 
                        formData={data}
                        cancel={props.panel}
                        removeAppointment={removeAppointment}
                    />
                    }
                    {props.panel === "edit appointments" && <EditAppointments
                     formData={data}
                     edit={props.panel}
                     />}
                </div>
            </div>
        )

    
}

export default Data