export function PropsArray({name}){
    return(
        <div className="styling">
            <h1>Passing Arry in Props</h1>
            <h3>Players Name</h3>
            {name.map((names)=>(
                <li>{names}</li>
            ))}
        </div>
    )
}