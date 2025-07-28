import { useState } from "react";
import { Input } from "../InputFeild/Input";

export function CheckBoxes(){

    const[skills, setSkills] = useState([])

    function handleSkills(event){
        if(event.target.checked){
            setSkills([...skills, event.target.value])
            {/* aggar mein khali event.target.value use karunga then woh override ho jaega */}  
        }else{
            setSkills(skills.filter((item)=> item!=event.target.value))
        }
    }

    return(
        <div className="styling">
            <h1>Working With CheckBoxes</h1>

            <h1>Select Your Skills</h1>
            <input type="checkbox" id="php" value="php" onChange={handleSkills}/>
            <label htmlFor="php"> PHP</label><br/> 

            <input type="checkbox" id="javascript" value = "javascript" onChange={handleSkills}/>
            <label htmlFor="javascript"> Javascript</label><br/>

            <input type="checkbox" id="python" value="python" onChange={handleSkills}/>
            <label htmlFor="python"> Python</label><br/>

            <input type="checkbox" id="nodejs" value="nodejs" onChange={handleSkills}/>
            <label htmlFor="nodejs"> Nodejs</label><br/>

            {skills.toString()}
            {/* yahan oe toString eslye use kar raha hoon kyun ki jab bhi value apko screen pe dikahi dega 
            woh , separated se hoga for example java,python,c++
            */}

        </div>
    )
}