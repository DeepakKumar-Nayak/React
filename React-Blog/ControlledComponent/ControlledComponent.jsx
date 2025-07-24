import { useState } from "react"
import "../styling/style.css"
export function ControlledComponent() {

    const [name, setName]  = useState("")
    const [email, setEmail] = useState("")

    function clearData(){
        setEmail("")
        setName("")
    }

    return (
        <div className="styling">
            <h1>Controlled Component</h1>
            <form action="" method="get" className = "form-styling">
                <input type="text" value = {name} placeholder="enter your name" onChange= {(event)=>setName(event.target.value)}/><br/>
                <input type="text" value = {email} placeholder="enter your email" onChange= {(event)=>setEmail(event.target.value)} /><br/>
                <button onClick = {clearData}>Submit</button><br/>

                name: {name} <br/>
                email: {email}<br/>
            </form>
        </div>
    )
}