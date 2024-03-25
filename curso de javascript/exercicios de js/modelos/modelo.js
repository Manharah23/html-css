
function carregar(){
var msg = window.document.getElementById('msg')
var igm = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

var min = data.getMinutes()
msg.innerHTML =`Agora sao ${hora}h${min}minutos!`
msg.innerHTML +=``

if(hora >= 0 && hora < 12){
   
    igm.src ='bomdia.jpeg'
} else if(hora >= 12 && hora < 18){
    igm.src ='boatarde.jpg'
}else{
    igm.src ='boanoite.jpg'
}
}


