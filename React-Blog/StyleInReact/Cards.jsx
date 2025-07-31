import { useState } from "react"

export function Cards() {


    const [textColor, settextColor] = useState('black')
    const [lead, leadColor] = useState('#660AF2')
    const [grid, setGrid] = useState('true')


    const [styling, setStyling] = useState({
        width: "300px",
        border: "3px solid green",
        padding: "20px",
        margin: "10px"
    })

    function changeTheme(bgcolor) {
        setStyling({ ...styling, backgroundColor: bgcolor })
    }

    function changeTextColor(txtClr) {
        settextColor(txtClr)
    }

    function toggle(){
        setGrid(!grid)
    }
    return (
        <div style= {{display: grid?'block':'flex'}}>
            <button onClick= {toggle}>Toggle</button>
            <div style={styling}>
                <img style={{ width: "250px" }} src="https://img.freepik.com/premium-vector/picture-boy-with-shirt-that-says-name_1230457-35628.jpg?semt=ais_items_boosted&w=740" alt="kid-image" />

                <p style={{ color: textColor }}>Name: Rahul Sharma</p>
                <p style={{ color: textColor }}>ID: RahulFulstack90</p>
                <p style={{ color: textColor }}>Position: Fullstack Developer</p>
                <p style={{ color: lead }}>Team Lead</p>

                <button onClick={() => changeTheme("#F5F5DC")}>Theme</button>
                <button onClick={() => changeTextColor("#055416")}>Color</button>
            </div>

            <div style={styling}>
                <img style={{ width: "250px" }} src="https://img.freepik.com/premium-vector/picture-boy-with-shirt-that-says-name_1230457-35628.jpg?semt=ais_items_boosted&w=740" alt="kid-image" />

                <p style={{ color: textColor }}>Name: Rahul Sharma</p>
                <p style={{ color: textColor }}>ID: RahulFulstack90</p>
                <p style={{ color: textColor }}>Position: Fullstack Developer</p>
                <p style={{ color: lead }}>Team Lead</p>

                <button onClick={() => changeTheme("#F5F5DC")}>Theme</button>
                <button onClick={() => changeTextColor("#055416")}>Color</button>
                
            </div>
        </div>
    )
}