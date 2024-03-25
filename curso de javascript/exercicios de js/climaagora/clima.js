
let apikey = "83893b62391f6e4bd46977c3f09b5c0f"

let apiCountryURL ="https://countryflagsapi.com/png/"

const cityinput = document.getElementById("#city-input");
const searchbtn = document.getElementById("#search");



/*funcoes*/



/*eventos*/

searchbtn.addEventListener("click", (e) =>{
    e.preventDefault();

    const city =  cityinput.value;
    console.log("city")
} )