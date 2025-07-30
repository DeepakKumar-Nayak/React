import { useEffect } from "react"


export function UsingPropsWithUseEffect({count,data}){

    function handleCounter(){
        console.log('handle counter called')
    }

    function HandleData(){
        console.log('data handler')
    }

    useEffect(()=>{
        handleCounter()
    },[])

    useEffect(()=>{
        HandleData()
    },[data])

    return(
        <div>
            <h1>How to handle side effects of props using useEffect</h1>
            <h3>Counter: {count}</h3>
            <h3>Data: {data}</h3>
        </div>
    )
}