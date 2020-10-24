import React, { Component } from 'react'
import {connect} from 'react-redux';
import Food from './food'
import Myplan from './myplan'
import rootReducer from '../reducers/rootReducer'
import Navbar from './navbar/navbar_trainer'
import {withRouter} from 'react-router-dom'
class search extends Component {
    constructor(){
        super();
        this.state={food:[],value:'',dt:''}
    }
    onClick(event)
    {   
        // console.log('props',this.props.history.push('/about'))
        // this.props.history.push('/progress')
        (async () => {
            const rawResponse = await fetch('/api/createplan', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ myplan:this.props.myplan.myplan,datetime:this.state.dt})
            });
            // console.log(this.props.myplan);
           
          })();

        return true;

    }
    dtChange(event){
        this.setState({dt: event.target.value},()=>{
        console.log(this.state.dt);
        });
    }
    handleChange(event) {
        this.setState({value: event.target.value},()=>{
            console.log(this.state.value);
            console.log(window.location.href);
            fetch('/api/search?name='+ this.state.value).then(response =>  response.json())
            .then(resData => {
                this.setState({food:resData,fetch_check:true},()=>{
                    console.log(this.state.food); 
                    console.log('props',this.props.myplan); 
                })
               
            })
        });
        
      }
      render() {
       
        return (
            <div>
                <Navbar/>
                <h1>Build Plan</h1>
                <br></br><br></br>
        
                


                    <div className="row my-5">
                    <div className='col'>
                    <label for="datetime">Enter Date and Time: </label>&ensp;&ensp;
                    <input type="datetime-local" id="datetime" name="datetime" onChange={(e) => this.dtChange(e)}/>  
                    </div>
                    <div className='col'>
                    <input className="form-control" type="text" id="search_movies" name="search_movies" placeholder="Search for Food...." onChange={(e) => this.handleChange(e)}></input>
                    </div>
                    
                    </div>

                    

                    
                    
              
            
            <br/><br/>
        <div className='row'>
        <Food food={this.state.food}/>
        </div>


        <div className='row mx-3' id='selected_plan'>
                 <Myplan/>
                </div><br></br><br></br><br></br>
                <div className='col'>
                    <a id='submit-btn' href='#/trainer/progress' class="btn btn-block" onClick={(e) => this.onClick(e)}>Submit</a>
                    </div>
                    <br></br><br></br><br></br>

        </div>
        )
        
    }
}

const mapStateToProps = (state) =>{
    return{
     myplan:state
    }
 }

export default withRouter(connect(mapStateToProps)(search));