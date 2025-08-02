import { useState } from "react"

export function AddUser({setUser}){
    

    return(
        <div>
            <h1>Add User</h1>
            <input type="text" placeholder="Enter user name" onChange = {(event)=> setUser(event.target.value)}/>
        </div>
    )
}