import { CollegeData } from "./CollegeData"

export function Student() {
    const collegeData = [
        {
            college_name: "Delhi Institute of Technology",
            city: "New Delhi",
            website: "www.dit.ac.in",
            students: [
                {
                    name: "Aman Kumar",
                    email: "aman.kumar@dit.ac.in"
                },
                {
                    name: "Sneha Gupta",
                    email: "sneha.gupta@dit.ac.in"
                }
            ]
        },
        {
            college_name: "Mumbai Engineering College",
            city: "Mumbai",
            website: "www.mec.edu.in",
            students: [
                {
                    name: "Rohit Sharma",
                    email: "rohit.sharma@mec.edu.in"
                },
                {
                    name: "Priya Desai",
                    email: "priya.desai@mec.edu.in"
                }
            ]
        },
        {
            college_name: "Bangalore University",
            city: "Bangalore",
            website: "www.bangaloreuniversity.edu",
            students: [
                {
                    name: "Karthik Rao",
                    email: "karthik.rao@bu.edu.in"
                },
                {
                    name: "Latha Nair",
                    email: "latha.nair@bu.edu.in"
                }
            ]
        },
        {
            college_name: "Chennai Institute of Science",
            city: "Chennai",
            website: "www.cis.ac.in",
            students: [
                {
                    name: "Varun Iyer",
                    email: "varun.iyer@cis.ac.in"
                },
                {
                    name: "Anjali Menon",
                    email: "anjali.menon@cis.ac.in"
                }
            ]
        },
        {
            college_name: "Pune College of Arts & Science",
            city: "Pune",
            website: "www.pcas.edu.in",
            students: [
                {
                    name: "Aditya Kulkarni",
                    email: "aditya.kulkarni@pcas.edu.in"
                },
                {
                    name: "Snehal Patil",
                    email: "snehal.patil@pcas.edu.in"
                }
            ]
        }
    ]
    return (
        <div className="styling">
            <h1>Working With Nested Loops</h1>
            <CollegeData collegeData={collegeData}/>
        </div>
    )
}