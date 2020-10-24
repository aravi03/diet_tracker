
import React, { Component } from 'react'
import {connect} from 'react-redux';
 class myplan extends Component {
    constructor(){
        super();
        this.state={list:[]}
    }
    componentDidUpdate(previousProps, previousState) {
        // we access props with this.props
        // and state with this.state
        if (previousProps !== this.props) {
        this.setState({list:this.props.myplan.myplan},()=>{
            console.log('updated');
        
        })}
        
        // prevState contains state before update
        // prevProps contains props before update
      }

    handleChange(event) {
        // this.setState({value: event.target.value},()=>{
        //     console.log(this.state.value);
        //     fetch('http://localhost:3000/search?name='+ this.state.value).then(response =>  response.json())
        //     .then(resData => {
        //         this.setState({food:resData,fetch_check:true},()=>{
        //             console.log(this.state.food); 
        //             console.log('props',this.props.myplan); 
        //         })
               
        //     })
        // });
        if(this.props.myplan.myplan)
        this.props.myplan.myplan.map((item)=>{
        console.log('props from myplan',item.url); 
            })
      }
    render() {
        var total=0;
            var b=this.state.list.map((item)=>{
                total+=item.quantity*item.calories/100;
                var a=<div className='mx-3'>
                         <h5>{item.food}({item.quantity}g) - {item.quantity*item.calories/100} Calories</h5> 
                           {/* <img id='myplan_poster' src={item.url}/> */}
                       </div>

               return(a)
                    });
                
        if(this.state.list)
        return(<div className='row'><div id='total' className='col'><h5 className='mx-2'>TOTAL= {total.toFixed(2)}calories</h5></div><div id='selected_plan' className='row'>{b}</div></div>)
        else
        return(<div> </div>)
    }
}
const mapStateToProps = (state) =>{
    return{
     myplan:state
    }
 }
export default connect(mapStateToProps)(myplan)