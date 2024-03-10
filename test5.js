var agora = new Date()
var hora= agora.getHours()
var diasem = agora.getDay()


//console.log(diasem)
 switch(diasem){
    case 0:
        console.log('Domingo')
        break 
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terca-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
         break
        case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('Dia Invalido')
 }
 console.log(`Agora sao exactamente ${hora} horas`)

 if (hora < 12){
     console.log(`Bom dia`)
 
 }
 else if(hora <= 18)
 {
     console.log(`Boa tarde`)
 } 
 else{
     console.log(`Boa noite`)
 }