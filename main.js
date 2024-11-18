function Solve(content){
    result.value += content
}

function Clear(){
    result.value = ""
}

function Output(){
    result.value=eval(result.value)
}

function Back(){
    result.value=result.value.slice(0,-1)
}