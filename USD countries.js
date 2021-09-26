
const getData2 = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://countriesnow.space/api/v0.1/countries/currency");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {

        const countries = xhr.response;

        objectOfCountries = countries["data"];
        var USDcountries = objectOfCountries.filter((country) => country.currency == "USD")
        console.log("Countries which use US Dollars are: " + (USDcountries.map(obj => obj.name)))


    }
}
getData2();