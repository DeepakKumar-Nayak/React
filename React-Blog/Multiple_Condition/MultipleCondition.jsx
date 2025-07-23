import { useState } from "react"
import "./Multiple.css"

export function MultipleCondition(){
    const [count,setCount] = useState(0)
    

    return(
        <div className ="multiple">
            <h3>How to use Multiple Condition in React</h3>
            {count}<br/>
            <button onClick = {()=> setCount(count+1)}>Click Here</button>

            {
                count === 0? <h1>0 For Login</h1>
                :count === 1? <h1>1 For Profile</h1>
                :count === 2? <h1>3 For Admin</h1>
                : <h1>Logout</h1>
            }
        </div>
    )
}