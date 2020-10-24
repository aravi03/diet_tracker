import React, { Component } from 'react'

export default class planDisplay extends Component {
    // componentDidUpdate()
    // {
    //     console.log('proprs',this.props);
    // }
    render() {
        var total=0;
        var b=
          this.props.list.map(item=>{
            total+=item.quantity*item.calories/100;
              var a= <div className='mx-3'>
              {/* <h5>{item.food}({item.quantity}g) - {item.quantity*item.calories/100} Calories</h5>  */}
              <div class="well text-center pt-3" id='plan_block'>
              <a href=''>
                      <img  src={item.url} id="plan-poster"/></a>
                      <p className='py-1 mx-5' id='plan_name'>{item.quantity}g</p>
                      <p className='py-1 mx-5' id='plan_name1'>{item.food}</p>
                      </div>
            </div>
                return(a)
            })
            
        if(this.props.list)
        return (<div className=''><div id='selected_plan' className='row'>{b}</div><div id='total_progress' className='row'><h5 className='mx-5 my-3'>Total- {total.toFixed(2)} calories</h5></div></div>)
        else
        return(<div></div>)
    }
}
