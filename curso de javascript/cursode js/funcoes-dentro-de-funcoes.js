



const soma =(...valores)=>{
    const somar=val=>{
        let res=0
        for(v of val)
        res+=v
    return res
    }
    return somar(valores)
}
console.log(soma(30,30,40))

valor=[300,300,400]
console.log(soma(...valor))