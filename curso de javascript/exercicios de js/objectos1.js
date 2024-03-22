
let amigo = {nome:'frank',
sexo:'Masculino', 
peso:64,
engordar(p=0){
    console.log('ele engordou')
    this.peso +=p
}}
amigo.engordar(5)
console.log(`${amigo.nome} de sexo ${amigo.sexo} agora pesa ${amigo.peso}kg`)