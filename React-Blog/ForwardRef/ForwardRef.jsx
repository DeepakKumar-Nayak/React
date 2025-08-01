import { useRef } from "react"

export function ForwardRef(){

    const inputRef = useRef(null)
    function UpdateInputFeild(){
        inputRef.current.value="deepak"
    }

    return(
        <div className="styling">
            <h1>Forward Ref In React</h1>
            <input type="text" ref={inputRef}/><br/>
            <button onClick= {UpdateInputFeild}>Input Ref</button>
        </div>
    )
}