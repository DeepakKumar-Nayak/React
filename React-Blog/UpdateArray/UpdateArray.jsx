import { useState } from "react";


export function UpdateArray(){
    const [data, setData] = useState(['jaiswal', 'rahul','sudarshan','gill'])
    const [inputValue, setInputValue] = useState("")

    function addPlayerName(event){
        setInputValue(event.target.value)
    }
    function addName(){
        if(inputValue !== "" && !data.includes(inputValue)){
            setData([...data,inputValue])
            setInputValue("")
        }
    }

    return(
        <div className="styling">
            <h1>Updating Array In React</h1>
            <input type="text" placeholder= "enter playar name" onChange={addPlayerName} value={inputValue}/>
            <button onClick={addName}>Submit</button>
            
            {
                data.map((item,index)=>(
                    <p key={index}>{item}</p>
                ))
            }
            
        </div>
    )
}