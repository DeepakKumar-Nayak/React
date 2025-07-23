import "../Multiple_Condition/Multiple.css"
export function Props({username,gmail,coursename }){
    return(
        <div className="multiple">
            <h1>Props: </h1>
            <h2>User Component: <br/></h2>
                <p>{username}</p>
                <p>{gmail}</p>
                <p>{coursename}</p>

        </div>
    )
}