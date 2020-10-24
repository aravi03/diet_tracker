import React, { Component } from 'react'
import PlanDisplay from './planDisplay';

export default class myplan extends Component {
    onAccept(event,id){
        event.preventDefault()
        console.log('clicked',id);
        fetch('/api/acceptplan?id='+id).then(()=>{
            console.log('done');
            return true;
        })
    }
    onReject(event,id){
        event.preventDefault()
        console.log('clicked',id);
        fetch('/api/rejectplan?id='+id).then(()=>{
            console.log('done');
            return true;
        })
    }
    render() {
        if(this.props.myplan)
        return (
            this.props.myplan.map(item=>{

                


                var response=item.status;
                
                if(response=='pending')
               {var b=
                <div className='row'>
                <a id='txt-green' href='/' className="mx-2 py-1 txt-green" onClick={(e) => this.onAccept(e,item._id)}><i class="fa fa-check" id='inc-size'></i></a>
                <a id='txt-red' href='/' className="py-1 txt-red" onClick={(e) => this.onReject(e,item._id)}><i class="fa fa-times" id='inc-size'></i></a>
                </div>
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
