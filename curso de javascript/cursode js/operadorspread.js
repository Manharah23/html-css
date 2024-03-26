
let n1 = [30,40,10,50,70,90,35]
let n2 = [34,45,16,57,78,99,31]
let n3 = [n1,n2]

console.log("n1: " + n1)
console.log("n2: " + n2)
console.log("n3: " + n3)
console.log("o tipo de n3: " + typeof(n3))


const jogador1 = {nome:"franko",energia:1500,vidas:3,magia:240}
const jogador2 = {nome:"frankta",energia:1500,vidas:2,velocidade:100}
const jogador3 = {...jogador1,...jogador2}

console.log(jogador3)


const soma =(v1,v2,v3)=>{
    return v1+v2+v3
}
let valores = [13,22,27,55]

console.log(soma(...valores))


/*agora para html*/

const objs1 = document.getElementsByTagName("div")
const objs2 =[...jogador1document.getElementsByTagName("div")]


objs2.forEach(Element =>{
   element.innerHTML ="curso"
});
console.log(objs1)
console.log(objs2)