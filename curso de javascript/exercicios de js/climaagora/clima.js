
let apikey = "83893b62391f6e4bd46977c3f09b5c0f"

let apiCountryURL ="https://countryflagsapi.com/png/"

let cityinput = document.querySelector("#city-input")
let searchBtn = document.querySelector("#search")


/*funcoes*/
let mostrarclimadacidade = (city) => {
    console.log(city)}
/*eventos*/

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let city = cityinput.value;

    console.log("city")
});
