import { useState } from "react"

export function StateApp(){
    const [userName,setUserName] = useState("deepak")

    function changeUserName(){
        setUserName('deepak_kumar_nayak')
    }
    return(
        <div>
            <h1>State in React</h1>
            <p>{userName}</p>
            <button onClick= {changeUserName}>Click Me</button>
        </div>
    )
}

// here what i am doing i want to change the username when i will click on the button let see the code.. 

// export function StateApp(){
//     let userName = "deepak_kumar"

//     function changeUserName(){
//         userName = "deepak_kumar_nayak"
//         console.log(userName)
//     }
//     return(
//         <div>
//             <h1>State in React</h1>
//             <p>{userName}</p>
//             <button onClick= {changeUserName}>Click Me</button>
//         </div>
//     )
// }

// es tarah change nahi hoga aggar mein console mein check karun toh woh change toh ho raha hai but woh show nahi karega hame web page mein but console mein show karega new value agar mujhe usko change karna hai then i have to do it with the help of state here.

// aur react mein jab tak re-render nahi hoga tab tak value change bhi nahi hoga so yahan re-render toh apne app ho toh raha hai toh value kyun nahi change hua kyun ki hame uske liye state ko use karna padega 

// jaise ham variable mein data store karte hai na thik ussi tarah ham state meinn bhi karenge but es mein thoda allag hai and state bhi mutuable hote hein , state ko use karne ke liye hame usko import karna padega, variable ko import karna nahi padhta but state ko karna padega

// import { useState } from "react"


// final code: 

// export function StateApp(){
//     const [userName,setUserName] = useState("deepak")

//     function changeUserName(){
//         setUserName('deepak_kumar_nayak')
//     }
//     return(
//         <div>
//             <h1>State in React</h1>
//             <p>{userName}</p>
//             <button onClick= {changeUserName}>Click Me</button>
//         </div>
//     )
// }

// yeah jo value apne diya hai deepak woh jake store hoga userName mein.
 