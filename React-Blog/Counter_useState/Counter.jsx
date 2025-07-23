import { useState } from "react";

export function Counter(){
    let [counter, setCounter] = useState(0)

    function increaseCount(){
        setCounter(counter+1)
        console.log(counter)
    }

    function decreaseCount(){
        if(counter === 0){
            return
        }else{
            setCounter(counter-1)
        }
    }

    return(
        <div className="Counter">
            Counter : {counter}
            <button onClick = {increaseCount}>Increase Count</button>
            <button onClick = {decreaseCount}>Decrease Count</button>
        </div>
    )
}