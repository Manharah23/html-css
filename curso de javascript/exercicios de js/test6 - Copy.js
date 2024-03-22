/*cidadania()
function cidadania(){
    const pais ='russia'
    console.log(pais)
} 

function terra(nome){

    console.log(nome)
}
terra("russia1")

function soma(n1,n2){
    const resultado = n1 + n2

    console.log(resultado)
}
soma(23,44)*/

function divida(renda,despesas){
    if (renda > despesas){
        return 'boa educacao financeira'
    } else {
        return 'isso e muito perigoso '
    }
}

const franck = divida(150000,40000)
const doo = divida(10000,14000)

console.log(franck)
console.log(doo)


/*arrow function*/ 

function manga(){}
const frutas = ()=> {
    console.log('frankod')
}
frutas()