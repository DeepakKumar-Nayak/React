import { useState } from "react";
import { AddUser } from "./AddUser";
import { DisplayUser } from "./DisplayUser";

export function LiftingState(){
    const [user, setUser] = useState()
    return(
        <div className="styling">
            <AddUser setUser = {setUser}/>
            <DisplayUser user = {user}/>
        </div>
    )
}