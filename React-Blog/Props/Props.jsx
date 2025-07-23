import "../styling/style.css"
export function Props({username,gmail,coursename }){
    return(
        <div className="styling">
            <h1>Props: </h1>
            <h2>User Component: <br/></h2>
                <p>Username: {username}</p>
                <p>Gmail: {gmail}</p>
                <p>Course Name:{coursename}</p>

        </div>
    )
}

/**
 * yahan pe Props({yahan value destructure ho raha hai}) otherwise we can simply do like:
 * Props{data}
 * 
 * {data.name}
 * {data.gmail}
 * 
 * ham name kuch bhi likh sakhte hein data ke jagah mein likh sakhta hoon props. 
 * aur aggar ham destructure karange toh aram se access kar sakhte hai without using . notation like : 
 * {username}
 * 
 * name should be same here apne jo props mein bheja hai name wohi rahega. 
 * aur apne galat name dala jaise ki age jo exist hi nahi karta toh hame milega undefined.
 * 
 */