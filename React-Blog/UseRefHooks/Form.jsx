import { useRef } from "react";

export function Form(){

    function handleForm(event){
        event.preventDefault();
        const user = document.querySelector("#user").value
        const password = document.querySelector("#password").value

        console.log(user,password)
    }


    const userRef = useRef(null)
    const passRef = useRef(null)

    function handleFormUsingRef(event){
        event.preventDefault()
        const user = userRef.current.value
        const pass = passRef.current.value

        console.log('getting value using useRef', [user,pass])
        

    }

    return(
        <>
        <div className="styling">
            <p>Handling form without using useRef</p>
            <p>This is also an example of uncontrolled component because state is not used here</p>
            <p>And here i am directly using DOM</p>
            <form action="" method="post" onSubmit = {handleForm}>
                <input type="text" placeholder="enter username" id="user"/>
                <br/>
                <input type="text" placeholder="enter password" id="password"/>
                <br/>
                <button>Submit</button>
            </form>
        </div>

        <div className="styling">
            <p>Handling form using useRef</p>
            <form action="" method="post" onSubmit={handleFormUsingRef}>
                <input type="text" ref={userRef} placeholder="enter username" /><br/>
                <input type="text" ref={passRef} placeholder="enter password" /> <br/>
                <button>Submit</button>
            </form>
            
        </div>
        </>

        
    )
}