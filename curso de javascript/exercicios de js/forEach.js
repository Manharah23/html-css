

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