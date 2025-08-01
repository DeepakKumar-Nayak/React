export function User({displayName,name}){
    return(
        <div className="styling">
            <p>Passing function in props</p>
            <button onClick={()=> displayName(name)}>DisplayName</button>
        </div>
    )
}


// aggar mujhe directly pass karna hai parameter ko toh woh bhi mein kar sakhta hoon instead of calling like this: 
// onClick={()=>displayName('deepak')}

// i can also do something like passing it where i have called the User like 

// <User displayName = {displayName} name="deepak"/> and mein directly us name ko arrow function mein access bhi kar sakhta hoon like: 
// <button onClick = {()=> displayName(name)}><button>