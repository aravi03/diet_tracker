import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom'
export default class navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top" id="navbar">
            
            <a id="navbar_title" className="navbar-brand" href=''>TREAD</a>  
            <br/>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mr-5 ">
                    
                    <li className="nav-item mx-2 active">
                        <a class="nav-link active">Welcome Client</a>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to='/client/dashboard' className='nav-link'>Dashboard</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className='nav-link' to='/client/makeplan'>Custom Plan</Link>
                    </li>
                    
                    <li className="nav-item mx-2">
                        <Link to='/' className='nav-link'>
                        <i class="fa fa-home" id='home-size'></i>
                        </Link>
                    </li>
                    
                    
                    {/* <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
    <div class="dropdown-menu" aria-labelledby="dropdown01">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</li> */}


                </ul>
            </div>
            
        </nav> 
        
        )
    }
}
