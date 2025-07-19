export function VariableWithJSX(){
    const name = "deepak_kumar"
    let coursename = "React "
    let authorname = "Anil Sidhu"

    function welcomeMessage(){
        return 'hello, students'
    }

   let data = {
    studentOne_name : 'rakesh'
   }
    return(
        <>
            <h1>Accessing Variable With JSX</h1>
            <p> Name: {name}</p>
            <p>{coursename + authorname}</p>
            <p>{welcomeMessage()}</p>
            <p>Students Info: {data.studentOne_name}</p>
            
        </>
    )
}