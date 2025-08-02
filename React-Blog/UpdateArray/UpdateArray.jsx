import { useState } from "react";


export function UpdateArray(){
    const [array, SetupdateArray] = useState(['jaiswal, rahul','sudarshan','gill'])

    function addPlayerName(event){
        SetupdateArray([...array, event.target.value])
    }

    return(
        <div className="styling">
            <h1>Updating Array In React</h1>
            <input type="text" placeholder= "enter playar name" onChange= {addPlayerName}/>
        </div>
    )
}