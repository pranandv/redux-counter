import {createStore} from 'redux'

const reducerfn =(state = {counter : 0 },action)=>{
    if(action.type==="INCREMENT"){  
        return {counter: state.counter+1}
    }
    else if(action.type==="DECREMENT"){
        return {counter:state.counter-1}
    }
    else if(action.type ==="ADD"){
        return {counter:state.counter+action.payload}
    }
    else{
    return state
    }
}
const store = createStore(reducerfn)
export default store