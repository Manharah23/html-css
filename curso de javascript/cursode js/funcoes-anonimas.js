

const f=function(v1,v2){
    return v1+v2
}
console.log(f(20,20))




const d=function(...valores){
    let res=0
    for(v of valores){
        res+=v
    }
    return res
}
console.log(d(20,80))



const g=new Function("v1","v2","return v1+v2")

console.log(g(20,180))
