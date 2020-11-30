import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom'


export default class Home extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top" id="navbar">
            
            <a id="navbar_title" className="navbar-brand" href=''>NOURISHER</a>  
            <br/>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mr-5 ">
                    
                    
                    <li className="nav-item mx-2">
                        <Link className='nav-link' to='/client/dashboard'>Client</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to='/trainer/makeplan' className='nav-link'>Trainer</Link>
                    </li>
                   
                </ul>
            </div>
            
        </nav>
        <br></br><br></br><br></br>

            <div className=''>
                <h1>About</h1><br></br><br></br>
                <div className='row mx-5'><h3>Trainer</h3><br></br><br></br><br></br></div>
                <div className='row mx-5'><h6 className='mx-3'>Build Plan-</h6> Trainers can create diet plans for their clients at any date and time in this section</div>
                <div className='row mx-5'><h6 className='mx-3'>Progress- </h6> Trainers can view the progress of their clients and can check the status of any prescribed plan</div>
                <br></br><br></br>
                <div className='row mx-5'><h3>Client</h3><br></br><br></br><br></br></div>
                <div className='row mx-5'><h6 className='mx-3'>Dashboard-</h6> Clients can view the plans which are prescribed by the trainers for any day and can accept or reject the prescribed plan</div>
                <div className='row mx-5'><h6 className='mx-3'>Custom Plan- </h6> Clients can create their own customized plan in this section and which will also be updated to the trainer</div>
            </div>  
            <br></br><br></br>


            </div>
        )
    }
}
