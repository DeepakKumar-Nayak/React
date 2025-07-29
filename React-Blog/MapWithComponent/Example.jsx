export function Example({data}){
    return(
        <div className="styling">
            <h1>User Info About Employees</h1>
            <p>{data.name}</p>
            <p>{data.email}</p>
            <p>{data.dob}</p>
            <p>{data.designation}</p>
            <p>{data.location}</p>
        </div>
    )
}