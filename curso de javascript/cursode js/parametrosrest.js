

function soma(...valores){
    let tam=valores.length
    let res=0
    for(let i=0;i<tam;i++){
        res+=valores[i]
    }
    return res
}

console.log(soma1(20,30,4))
function soma1(...valores){
    let tam=valores.length
    let res=0
    for(let v of valores){
        res+=v
    }
    return res
}

console.log(soma1(20,30,4))