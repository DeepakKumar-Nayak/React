export function TodoJsx(){
    return(
        <div className="todo">
            <h1>Hello, Students</h1>
            <img 
                src="https://png.pngtree.com/png-clipart/20250116/original/pngtree-cheerful-3d-boy-in-school-uniform-png-image_20062336.png"

                className = "my-image"
                alt = "image"
            />

            <ul>
                <li>Basic Understanding of Component</li>
                <li>How to export and import multiple functions</li>
                <li>How to write in a JSX </li>
            </ul>

            <button onClick= {function callMe(){alert('hello')}}>Click Me</button>
        </div>
    )
}

export default TodoJsx;