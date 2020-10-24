import axios from 'axios';

const initialState = {
    myplan:[],
    
}

const rootReducer=(state = initialState, { type, payload }) => {
//     console.log('payload is',payload);
//     console.log('type is',type);
// if(type=='SUBMIT') {console.log('submit',state.myplan);
// // const requestOptions = {
// //     method: 'POST',
// //     headers: { 'Content-Type': 'application/json' },
// //     body: JSON.stringify({ title: 'React POST Request Example' })
// // };
// // fetch('http://localhost:5000', requestOptions)
// //     .then(()=>{
// //         console.log("done");
// //     })
//     // axios.post('http://localhost:5000', {
//     //   food:"food" // + any other parameters you want to send in the POST request
//     // }).then(response => {
//     //     console.log("done");

//     //   // do something with response, and on response
//     // }).catch(error => {
//     //   // do something when request was unsuccessful
//     // });
//     var querystring = require('querystring');
// //...
// // axios.post('http://localhost:5000/',
// //     querystring.stringify({
// //             myplan:state.myplan
// //     }), {
// //       headers: { 
// //         "Content-Type": "application/x-www-form-urlencoded"
// //       }
// //     }).then(function(response) {
// //         console.log(response);
// //     });
// // const product_id_list = ['pid1234', 'pid1235']

// // const bodyFormData = new FormData();

// // product_id_list.forEach((item) => {
// //     bodyFormData.append('product_id_list[]', item);
// // });

// // axios.post('http://localhost:5000', bodyFormData,{
// //           headers: { 
// //             "Content-Type": "application/x-www-form-urlencoded"
// //           }
// //         })
// (async () => {
//     const rawResponse = await fetch('http://localhost:5000', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ b: state.myplan})
//     });
//     const content = await rawResponse.json();
  
//     console.log(content);
//   })();
    
// }
// else


if(state.myplan[0])
{
    // return Object.assign({}, state, {
    //     init: true,
    //     articles: action.payload,
    // })
    var check = state.myplan.find((o, i) => {
        if (o.id ==payload.id) {
            state.myplan[i].quantity=payload.quantity;
          return true; // stop searching
        }
    });
    if(check)
    {var temp = state.myplan.filter(function (el) {
        return (el.quantity !='0' &&el.quantity!='')
      });
      state.myplan=temp;
      console.log('temp',temp)
    }
    if(!check){
        state.myplan=state.myplan.concat([payload]) 
    }
}
else
    state.myplan=[payload]; 
console.log('final state',state.myplan);

    //  addfood=(id,quantity)=>{
    //     var obj={id,quantity};
    //     var arr=this.state.myplan;
    //     var check=false;
    //     console.log('length',this.state.myplan.length);

    //     console.log('plan',this.state.myplan);
    //     if(arr.length>0)
    //     {
    //         check = arr.find((o, i) => {
    //         if (o.id ==id) {
    //             arr[i].quantity=quantity;
    //             return true; // stop searching
    //         }
    //         });
    //     }
    //     if(!check){
    //         this.setState({myplan:this.state.myplan.concat([obj]) },()=>{
    //         console.log(this.state.myplan);
    //         });}
    //     else{
    //     this.setState({myplan:check },()=>{
    //     console.log(this.state.myplan);
    //     });
    //     }
        
        
    // }
    


    return Object.assign({},state)

}
export default rootReducer;