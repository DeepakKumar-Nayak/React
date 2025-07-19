export function Object(){
    
    const userData = {
        authorName : 'Anil Sidhu',
        courseName : 'React',
        courseDuration : "14hrs"
    }

    return(
        <div>
            <h1>Course Details</h1>
            <p>Author Name: {userData.authorName}</p>
            <p>Course Name:{userData.courseName}</p>
            <p>Course Duration: {userData.courseDuration}</p>
        </div>
    )
}