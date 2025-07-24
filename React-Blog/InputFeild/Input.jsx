import { useState } from "react"
import "../styling/style.css"
export function Input(){

    const [value, setValue] = useState()

    return(
        <div className="styling">
            <h1>Input Field</h1>
            <input type="text" value = {value} placeholder = "Enter Your Data Here" onChange = {(event)=>(setValue(event.target.value))}/>
            <p>{value}</p>
            <button onClick={()=>(setValue(""))}>Clear</button>
        </div>
    )
}