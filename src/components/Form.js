
import React, { useState, useEffect } from 'react';


const Form = (props) => {

    return (
        <div className="appt">
            <h5>Fill out the form to schedule an appointment.</h5>
            <div className="create-appointment">
                <form className="form-horizontal">
                    <div className="form-group form-group-sm">
                        <label className="col-sm-2 control-label" htmlFor="formGroupInputSmall">Date</label>
                        <div className="col-sm-10">
                        <input className="form-control" type="text" id="date" placeholder="Date for appointment"/>
                        </div>
                    </div>
                    <div className="form-group form-group-sm">
                        <label className="col-sm-2 control-label" htmlFor="formGroupInputSmall">Time</label>
                        <div className="col-sm-10">
                        <input className="form-control" type="text" id="time" placeholder="Time for appointment"/>
                        </div>
                    </div>
                    <div className="form-group form-group-sm">
                        <label className="col-sm-2 control-label" htmlFor="formGroupInputSmall">Location</label>
                        <div className="col-sm-10">
                        <input className="form-control" type="text" id="location" placeholder="Location for appointment"/>
                        </div>
                    </div>
                    <div className="form-group form-group-sm">
                        <label className="col-sm-2 control-label" htmlFor="formGroupInputSmall">Description</label>
                        <div className="col-sm-10">
                        <input className="form-control" type="text" id="description" placeholder="Quick description of appointment"/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e)=> {props.handleSubmit(e)}}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Form