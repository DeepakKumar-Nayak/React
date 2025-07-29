export function StudentInfo({data}){
    return(
        <div className="design">
            {
                data.map((info)=>(
                    <ul>
                        <li>Name: {info.name}</li>
                        <li>Email: {info.email}</li>
                    </ul>
                ))
            }
        </div>
    )
}