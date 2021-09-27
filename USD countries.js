
const getData2 = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {

        const countries = xhr.response;
        var USDcountries = countries.filter((country) => country.currencies[0].code == "USD")

        var i = 1;
        USDcountries.forEach((country) => {
            console.log(`${i}.` + country.name)
            i++;


        })
    }
}
getData2();
