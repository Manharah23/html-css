

/*
for(let i = 0; i < 10; i++){
    console.log(i)
}

const usuariaos =['Matriks','Manuel','Franck','Deolinda']
for(let i = 0; i < usuariaos.length; i++){
    console.log(usuariaos[i])

}


//for of

const users =['Magure','Manhara','Matriks','Manuel','Franck','Deolinda']

for(let name of users){
    console.log(name)
}



//for in


const user = {

    name:'Magure',
    age: 49,
    street: "nabaixa"
}
for (let key in user){

console.log(`${key} : ${user[key]}`)

}





const user2 = {

    name:'Manhara',
    age: 39,
    street: "Malatas"
}
for (let key in user){

console.log(`${key} : ${user2[key]}`)

}*/


const users =[
    { name:'Magure', age: 49, contacto:'(258) 8435645464'},
    { name:'Manhara', age: 39, contacto:'(258) 8335126464'},
    { name:'Matriks', age: 34, contacto:'(258) 8532345564'},
    { name:'Manuel', age: 29, contacto:'(258) 8635645464'},
    { name:'Franck', age: 13, contacto:'(258) 82356458746|'},
    { name:'Deolinda', age: 17, contacto:'(258) 8935645197'},
]

users.forEach(function(item, index, array){
    if(item.age < 18){
        console.log(`O clinte ${item.name}, posicao ${index} e menor de idade`)
    }
})