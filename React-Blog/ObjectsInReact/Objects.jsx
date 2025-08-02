import { useState } from "react"


export function UpdateName(){
    const[name, setName] = useState('anil sidhu')
    return(
        <div className="styling">
            <p className="heading">Update name</p>
            <p>I am just updating name here just to get to know that<br/>
             how updating name is easy in react but the case is not same with objects <br/>
             look at other example where i am updating objects</p>
            <p>{name}</p>

            <button onClick= {()=>setName('deepak')}>Update Name</button>

        </div>
    )
}