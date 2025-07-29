import { StudentInfo } from "./StudentInfo";

export function CollegeData({collegeData}){
    return(
        <div>
            {
                collegeData.map((info) => (
                    <div key = {info.city}>
                        <h3>College Name: {info.college_name}</h3>
                        <ul>
                            <li>City: {info.city}</li>
                            <li>Website Name: {info.website}</li>
                        </ul>
                        
                        <StudentInfo data = {info.students}/>
                    </div>
                 ))
            }
        </div>
    )
}