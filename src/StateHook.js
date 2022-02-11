import React,{useState, useEffect} from 'react'

export default function StateHook() {
  const[count,setCount]=useState(0); 

  useEffect(()=>{
      document.title = `You Clicked ${count} times`},[count]);

  return (
    <div>
        <h1>Hello the current count is : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Click Me</button>
    </div>
  )
}
