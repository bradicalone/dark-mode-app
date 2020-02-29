import React from 'react';
import Data from './Data'

export default class Navigation extends React.Component {
    state = {
        panel: '',
        navOpen: false
    }

    handleChange = (e) => {
        console.log(e.target.innerText)
        let targetElem = e.target.innerText.toLowerCase()
        this.setState({panel: targetElem})
        this.openNav()
    }

    openNav = () => {
        if (window.innerWidth >= 900) return

        this.setState(prevState => ({
            navOpen: !prevState.navOpen
          }));
    }

    render() {
        return (
            <div>
                <div  style={{transform: this.state.navOpen ? 'translateX(200px)' : 'translateX(0)'}} className="nav-container"
                onClick={(e)=> {this.handleChange(e)}}>
                    <i className="fas fa-bars" onClick={(e)=>{this.openNav(e)}}></i>
                        <button>Create Appointments</button>
                        <button>View Appointments</button>
                        <button>Edit Appointments</button>
                        <button>Cancel Appointment</button>
                </div>
                {console.log(this.state.panel)}
                <Data panel={this.state.panel} navOpen={this.state.navOpen}/>
            </div>
        )
    }
}