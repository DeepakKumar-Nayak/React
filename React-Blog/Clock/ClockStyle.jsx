import { useState } from "react";
import { Clock } from "./Clock";

export function ClockStyle(){
    const [color, setColor] = useState("green")

    function changeColor(event){
        setColor(event.target.value)
        console.log(event.target.value)
    }

    return(
        <div className="styling">
            <select defaultValue={"green"} onChange={changeColor}>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="red">Red</option>
                <option value="white">White</option>
                <option value="black">Black</option>
            </select>
            <Clock color= {color}/>
        </div>
    )
}