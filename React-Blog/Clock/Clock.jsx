import { useEffect, useState } from "react"

export function Clock({color}){
    const[time, setTime] = useState(0)

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        })
    })

    return(

        <div>
            <h1>Digital Clock In React</h1>
            <h1 style= {{color:color, backgroundColor: "#B0CFDE" ,width: "150px" ,padding: "5px"}}>
                {time}
            </h1>
        </div>
    )
}