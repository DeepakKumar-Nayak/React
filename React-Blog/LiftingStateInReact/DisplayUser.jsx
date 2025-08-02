import { useState } from "react";
import { AddUser } from "./AddUser";

export function DisplayUser({user}){
    return(
        <div>
            <p>Display User: {user}</p>
        </div>
    )
}
