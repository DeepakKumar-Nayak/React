export function ExampleUinsgMap(){
    const userData = [
        {
            id:1,
            name: 'deepak',
            email: 'deepak@gmail.com',
            location: 'Odisha'
        },
        {
            id: 2,
            name: 'rahul',
            email: 'rahul@gmail.com',
            location: 'pune'
        }
    ]
    return(
        <div className="styling">
            <h1>Working With Map In React</h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Location</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((item)=>(
                            <tr key = {item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.location}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}