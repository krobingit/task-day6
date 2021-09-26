
const getData3 = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://countriesnow.space/api/v0.1/countries/population");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {

        const countries = xhr.response;

        objectOfCountries = countries["data"];
        var population = objectOfCountries.reduce((total, country) => total + country.populationCounts[20].value, 0)
        console.log("Total Population Of Countries: " + population)

    }
}
getData3();