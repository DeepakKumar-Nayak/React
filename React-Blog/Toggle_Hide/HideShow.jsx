import { useState } from "react"
import "./toggle.css"

export function HideShow(){
    const [display, setDisplay] = useState(true)
    function showandHideData(){
        setDisplay(!display)
        
    }
    return(
        <div className = "toggle">
            <h1>Hide and Show Data On Click</h1><br/>
            {display ? <h3>Deepak Kumar</h3> : ""}<br/>
            <button onClick = {showandHideData}>{display ? "hide" : "show"}</button>
        </div>
    )
} 