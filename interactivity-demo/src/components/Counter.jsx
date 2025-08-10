
import { useState } from 'react'
export default function Counter(){
    const [couter, setCounter] = useState(0)
    return (<div>
            <h1>React component</h1>
            <h1>{couter}</h1>
         <button onClick={()=>setCounter(couter+1)}>Click</button> 
    </div>);
}

 
