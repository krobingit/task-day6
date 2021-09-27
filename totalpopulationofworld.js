const getData3 = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {

        const countries = xhr.response;
        console.log(countries)


        var totalpopulation = countries.reduce((total, country) => total + country.population, 0)
        console.log("Total-Population-of-World: " + totalpopulation) //output-7349137231
    }
}

getData3();