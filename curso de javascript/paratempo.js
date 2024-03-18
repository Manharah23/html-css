
const key = "eeb927dfb6ef31d167bce354ae714727"

async function verificarcidade(local){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=${key}`)
}

function cliquenobutao() {
    const local = document.querySelector(".input-cidade").value

    verificarcidade(local)
}