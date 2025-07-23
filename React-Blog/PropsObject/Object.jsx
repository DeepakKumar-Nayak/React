import "../styling/style.css"
export function Object({userData : {username, gmail, location}}){
    return(
        <div className="styling">
            <h1>Passing Object as Props</h1>
            <p>Username: {username}</p>
            <p>Gmail: {gmail}</p>
            <p>Location: {location}</p>
        </div>
    )
}

/**
 * this is the class way of access data using .notation 
 * export function Object({userData}){
    return(
        <div className="styling">
            <h1>Passing Object as Props</h1>
            <p>{userData.username}</p>
            <p>{userData.gmail}</p>
            <p>{userData.location}</p>
        </div>
    )
}
    * but let me de structute it where i can access only {username}
 */