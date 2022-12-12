import { useSelector,useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const counter = useSelector((state)=>state.counter)

  const inc = ()=>{
    dispatch({type : "INCREMENT" })
  }
  const dec = ()=>{
    dispatch({type:"DECREMENT"})
  }
  const add = ()=>{
    dispatch({type:"ADD",payload:10})
  }

  return (
    <div>
      <h1>Counter using Redux</h1>
      <h2>{counter}</h2>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={add}>Add by 10</button>
  
    </div>
  );
}

export default App;
