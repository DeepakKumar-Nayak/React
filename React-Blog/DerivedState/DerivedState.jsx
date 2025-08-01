import { useState } from "react"

export function DerivedState(){

    const [users, setUsers] = useState([])
    const [user, setUser] = useState("")

    function handleUser(){
        setUsers([...users, user])
    }

    return(
        <div className="styling">
            <p>Derived State In React</p>
            <input type="text" placeholder="add new user" onChange={(event)=>setUser(event.target.value)}/><br/>
            <button onClick={handleUser}>Add User</button>

            {users.map((item,index)=>(
                <p key = {index}>{item}</p>
            ))}

            <p>Total Users: {users.length}</p>
            <p>Last UserName: {users[users.length-1]}</p>
            <p>Unique users: {[...new Set(users)].length}</p>

        </div>
    )
}

//  Derived state in react ek important concept hai esse apka performance badhega