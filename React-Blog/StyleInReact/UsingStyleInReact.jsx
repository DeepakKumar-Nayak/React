import { useState } from "react"

export function UisngStyleInReact(){

    const [cardStyle, setCardStyle] = useState({
        width: "300px",
        border: "1px solid black",
        padding: "10px",
        margin: "10px"

    })

    function changeStyle(){
        setCardStyle({
            border: "5px solid green",
            width: "300px",
            padding: "10px",
            margin: "10px"
        })
    }
    const [textColor, settextColor] = useState("black")
    const [profession, setProfession] = useState("black")
    function changeDesign(textColor,bgColor,profession){
        setCardStyle({...cardStyle, backgroundColor:bgColor})
        settextColor(textColor)
        setProfession(profession)
    }

    return(
        <div style= {cardStyle}>
            
            <img  style= {{width:"280px"}}src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg" alt="profile-image" />
            <h3 style= {{color:textColor}}>Deepak</h3>
            <p style= {{color:profession}}>Software Developer</p>

            <button onClick={changeStyle}>Change Style</button>
            <button onClick = {()=> changeDesign('white','#808080','white')}>Change Design</button>
        </div>
    )
}