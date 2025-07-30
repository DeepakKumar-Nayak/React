import { useState } from "react";
import { UsingPropsWithUseEffect } from "./PropsWithUseEffect";

export function CounterFunction(){

    const [counter, setCounter] = useState(0)
    const [data, setData] = useState(0)
    

    return(
        <div className="styling">
            <UsingPropsWithUseEffect count= {counter} data = {data}/>
            <button onClick={()=>setCounter(counter+1)}>Counter</button>
            <button onClick={()=> setData(data+1)}>Data</button>
        </div>
    )
}