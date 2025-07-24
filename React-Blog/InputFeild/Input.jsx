import { useState } from "react"
import "../styling/style.css"
export function Input(){

    const [value, setValue] = useState()

    return(
        <div className="styling">
            <h1>Input Field</h1>
            <input type="text" placeholder = "Enter Your Data Here" onChange = {(event)=>(setValue(event.target.value))}/>
            <br/>
            {value}<br/>
            <button>Clear</button>
        </div>
    )
}