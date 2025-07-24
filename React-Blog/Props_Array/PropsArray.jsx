import { useState } from "react"

export function PropsArray({name}){
    const [data, setData] = useState([])
    const [show, setShow] = useState(true)

    function showData(){
        setData(name)
        setShow(!show)
    }
    return(
        <div className="styling">
            <h1>Passing Array in Props</h1>
            {!show ? data.map((names)=>(<li>{names}</li>)) :"" }
            <button onClick= {showData}>{show ? "show" : "hide"}</button>
        </div>
    )
}