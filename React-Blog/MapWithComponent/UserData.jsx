import { Example } from "./Example"

export function UserData(){
    const userInfo = [
        {
            name: "Amit Singh",
            email: "amit.singh@example.com",
            dob: "1990-05-12",
            designation: "Software Engineer",
            location: "New Delhi, India"
          },
          {
            name: "Priya Sharma",
            email: "priya.sharma@example.com",
            dob: "1988-11-20",
            designation: "Product Manager",
            location: "Mumbai, India"
          },
          {
            name: "Rahul Gupta",
            email: "rahul.gupta@example.com",
            dob: "1992-03-08",
            designation: "UX Designer",
            location: "Bangalore, India"
          },
          {
            name: "Simran Kaur",
            email: "simran.kaur@example.com",
            dob: "1985-07-16",
            designation: "HR Specialist",
            location: "Chandigarh, India"
          },
          {
            name: "Vikram Patel",
            email: "vikram.patel@example.com",
            dob: "1993-12-04",
            designation: "Data Analyst",
            location: "Kolkata, India"
          }
    ]
    return(
        <div>
            {
                userInfo.map((users)=>(
                    <div key = {users.name}>
                        <Example data = {users}/>
                    </div>
                ))
            }
        </div>
    )
}