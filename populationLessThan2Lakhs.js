const getData3 = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {

        const countries = xhr.response;
        console.log(countries)


        var populationLessThan2Lakhs = countries.filter((country) => country.population < 200000)
        console.log(populationLessThan2Lakhs)
        var i = 1;
        populationLessThan2Lakhs.forEach((country) => {
            console.log(`${i}.` + country.name + " --" + country.population)
            i++;

        })
    }
}
getData3();