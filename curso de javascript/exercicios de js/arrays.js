let num =[9,3,2,1]


num.push()
num.sort()
/*
num.length
console.log(`${num}`)
console.log(`o vector tem ${num.length} elementos`)
console.log(`o primeiro valor do vector e ${num[0]}`)*/
let pos = num.indexOf(9)
if (pos == -1){
    console.log(`o valor  nao foi encontrado`)
} else {
    console.log(`o valor esta na posicao ${pos}`)
}
