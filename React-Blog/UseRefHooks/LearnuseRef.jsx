import { useRef } from "react"


export function LearnuseRef(){

    const pTag = useRef(null)
    function handlePTag(){
        pTag.current.style.color = "green"
    }

    return(
        <div className="styling">
            <h3>useRef Hooks</h3>
            <p ref={pTag}>Lets Learn how to use useRef Hooks</p>

            <button onClick= {handlePTag}>Change P-Tag Color</button>
        </div>
    )
}