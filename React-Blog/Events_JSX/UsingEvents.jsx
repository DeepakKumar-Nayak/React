export function UsingEvents(){

    function UsingEventsListener(){
        console.log('hello, i am Deepak')
    }

    function EventsUisngArrow(msg){
        console.log(msg)
    }

    return(
        <div>
            {/* so here i am not passing any parameter so i can  call function like this {UsingEventsListener} */}
            <button onClick={UsingEventsListener}>Click Me</button> <br/>

            {/** But if i want to pass parameter then i wont be callling the function 
             * like i have called it above we have to use arrow function there for example */}

             <button onClick={()=>EventsUisngArrow('hello, Guys How are you')}>Events Using Arrow</button>
        </div>
    )
}

