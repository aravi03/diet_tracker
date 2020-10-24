import React, { Component } from 'react';
import {connect} from 'react-redux';
class food extends Component {
    constructor(){
        super();
        this.state={obj:{},quantity:0}
    }
    handleChange(event,item) {
        this.setState({quantity: event.target.value,obj:item},()=>{
            
            var obj=this.state.obj;
            obj['quantity']=this.state.quantity;
            console.log(this.state.quantity);
            this.props.addItem(obj);
            console.log("Props",this.props.myplan);
            // this.props.addfood(this.state.id,this.state.quantity);
        });
        
      }
    render() {
        if(this.props.food)
        return (
            this.props.food.map(item=>{
                // if(movie.Poster!="N/A")
                return(
                    <div class="col-2 mx-2 my-5">
                    <div class="well text-center" id='food_block'>
                        <a href=''>
                      <img  src={item.url} id="poster"/></a>
                      
                      
                      <p className='py-1 mx-5' id='food_name'>{item.calories}cal/100g</p>
                      <p className='py-1 mx-5' id='food_name1'>{item.food}</p>
                      <form>
                      <input className="my-3 mx-5 form-control" type="number" id="qtyinput" name="quantity" placeholder="in grams" onChange={(e) => this.handleChange(e,item)}></input>
                      </form>
                      {/* <a onclick="" class="btn btn-primary" href="#">Movie Details</a> */}
                    </div>
                  </div>
                )
            })
        )
        else
        return(
            <div></div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
     myplan:state
    }
 }
const mapDispatchToProps = (dispatch)=>{
    return{
        addItem: (obj)=>{
            dispatch({type:'ADD_ITEM',payload:obj})
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (food);
