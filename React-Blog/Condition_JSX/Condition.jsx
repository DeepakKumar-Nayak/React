export function Condition(){

    function operation(a,b,op){
        if(op === "+"){
            return a+b
        }else if(op === "*"){
            return a*b
        }else{
            return "this operation cant be performed"
        }
    }

    return(
        <div>
            <p>{operation(10,20,"=")}</p>
        </div>
    )
}