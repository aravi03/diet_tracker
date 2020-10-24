import React, { Component } from 'react'
import Myplan from './myplan';
import './client.css';
import NavbarClient from '../navbar/navbar_client'


export default class browse extends Component {
    constructor(){
        super();
        this.state={myplan:[],dt:''}
    }
    dtChange(event){
        this.setState({dt: event.target.value},()=>{
        console.log('dt is',this.state.dt);
        fetch('/api/viewplan?date='+this.state.dt).then(response =>  response.json())
            .then(resData => {
                this.setState({myplan:resData,fetch_check:true},()=>{
                    console.log(this.state.myplan); 
                     
                })
            })
        });
    }
    render() {
        
        return (
            <div>
                <NavbarClient/>
                <h1>Dashboard</h1>
                <div className="row mx-5 my-5">
                <label for="datetime">Enter Date: </label>&ensp;&ensp;
                <input type="date" id="datetime" name="datetime" onChange={(e) => this.dtChange(e)}/>  
                </div> 

                <div className="row">
                <Myplan myplan={this.state.myplan}/>
                </div>
                <br></br><br></br>
            </div>
        )
    }
}
