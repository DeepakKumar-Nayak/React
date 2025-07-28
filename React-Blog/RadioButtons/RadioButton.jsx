import { useState } from "react";


export function RadioButton(){

    const [gender, setGender] = useState("male")
    const [city, setState] = useState('Delhi')

    function selectionGender(event){
        setGender(event.target.value)
        // yahan thoda allag hoga checkbox se kyun ki checkbox mein apko
        // multiple selections allowed hai par esmein thoda allag hoga
        // es mein aap koi ek hi select kar sakhte ho thats why meine 
        // bas setGender(event.target.value) liya hai 

        // one more thin sab mein name="gender" likhna mat bhulna kyun ki 
        // esse aap multiple selections se individual karne mein heko milega.
    }

    function selectCity(event){
        setState(event.target.value)
    }

    return(
        <div className="styling">
            <h1>Working With Radion Button</h1>
            <input type="radio" name ="gender" id = "male" value = {"male"} onChange={selectionGender} checked = {gender == "male"}/>
            <label htmlFor="male"> Male</label> <br/>

            <input type="radio" name ="gender" id="female" value={"female"} onChange={selectionGender}/>
            <label htmlFor="female"> Female</label><br/>

            <input type="radio" name ="gender" id="other" value={"other"} onChange={selectionGender}/>
            <label htmlFor="other"> Other</label><br/>

            <h4>Selected Gender: {gender}</h4>
            <br/> <br/>

            <p>Select City:</p>
            <select defaultValue= {"bhopal"} onChange={selectCity}>
                <option value="odisha">Odisha</option>
                <option value="bhopal">Bhopal</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="banglore">Banglore</option>
            </select>

            <h3>Selected City: {city}</h3>
        </div>
    )
}