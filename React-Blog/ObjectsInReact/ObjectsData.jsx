import { useState } from "react"
import "..//styling/style.css"  


export function ObjectsUpdate(){

    const [value, setValue] = useState()

    const[data, setData] = useState({
        name:'deepak',
        address: {
            city:'Cuttack',
            location: 'Cda Sector 9',
            state:'Cuttack',
            pin: 752063

        }
    })

    function updateData(event){
        if(value === "name"){
            data.name = event.target.value
            setData({...data})
        }else if(value === "city"){
            data.address.city = event.target.value
            setData({...data})
        }else if(value === "location"){
            data.address.location = event.target.value
        }else if(value === "state"){
            data.address.state = event.target.value
        }else{
            data.address.pin = event.target.value
        }
        
    }
    //setData({...data,address:{...data.address, city}})

    function getValue(event){
        setValue(event.target.value)
    }
    
    
    return(
        <div className="styling">
            <p className="heading">Update Objects</p>
           Update Data:  <input type="text" placeholder ="enter here to update" onChange = {updateData}/><br/>
           Value You Want To Update:  <input type="text" placeholder = "enter value you want to update"  onChange = {getValue}/>
            <p>Name: {data.name}</p>
            <p>City : {data.address.city}</p>
            <p>Location : {data.address.location}</p>
            <p>State: {data.address.state}</p>
            <p>Pin : {data.address.pin}</p>
            
            {value}
        </div>
    )
}