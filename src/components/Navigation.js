import { connect } from 'react-redux';
import { panelClicked } from '../actions/appointments'
import React from 'react';
import Data from './Data'

class Navigation extends React.Component {
    state = {
        panel: '',
        navOpen: false
    }

    handleChange = (e) => {
        let targetElem = e.target.innerText.toLowerCase()
        this.props.dispatch(panelClicked(targetElem, this.props.appointments))
        if (window.innerWidth < 900) this.openNav()
    }

    openNav = (e) => {
        e.stopPropagation()
        this.setState(prevState => ({
            navOpen: !prevState.navOpen
        }));
    }

    render() {
        return (
            <div>
                
                <Data panel={this.state.panel} navOpen={this.state.navOpen}/>
                <Nav handleChange={this.handleChange} openNav={this.openNav} navOpen={this.state.navOpen}/>
            </div>
        )
    }
}
const Nav = (props) => (

    <div style={{transform: props.navOpen ? 'translateX(200px)' : 'translateX(0)'}} className="nav-container"
        onClick={(e)=> {props.handleChange(e)}}>
        <i className="fas fa-bars" onClick={(e)=> {props.openNav(e)}}></i>
        <button>Create Appointments</button>
        <button>View Appointments</button>
        <button>Edit Appointments</button>
        <button>Cancel Appointment</button>
    </div>

)
export default connect((state) => {
    return {
        appointments: state.appointments
    }
})(Navigation);