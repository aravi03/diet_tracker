import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom'


export default class Home extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top" id="navbar">
            
            <a id="navbar_title" className="navbar-brand" href=''>TREAD</a>  
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
            </div>
        )
    }
}
