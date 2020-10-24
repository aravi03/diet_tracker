import React, { Component } from 'react'
import PlanDisplay from './planDisplay';

export default class myplan extends Component {
    onAccept(event,id){
        event.preventDefault()
        console.log('clicked',id);
        fetch('http://localhost:5000/acceptplan?id='+id).then(()=>{
            console.log('done');
        })
    }
    onReject(event,id){
        event.preventDefault()
        console.log('clicked',id);
        fetch('http://localhost:5000/rejectplan?id='+id).then(()=>{
            console.log('done');
        })
    }
    render() {
        if(this.props.myplan)
        return (
            this.props.myplan.map(item=>{

                var response=item.status;
                if(response=='pending')
                {
                   var b=<div className='txt-black'>{response}....</div>

                }
                else {
                    if(response=='accept')
                    b=<div className='txt-green'>{response}ed</div>
                    else if(response=='update')
                    b=<div className='txt-black'>{response}ed</div>
                    else
                    b=<div className='txt-red'>{response}ed</div>
 
                 }
                var innerHTML=
                <div>
                <div className='row mt-5'>
                <h3 className='mx-5' id='progress-time'>{item.time}</h3>
                <h5> {b}</h5>
                </div>
                <div className='row px-5'>
                <PlanDisplay list={item.items}/>
                </div>
                </div>;

                return(innerHTML)
            })
        )
        else
        return(
            <div></div>
        )
    }
}
