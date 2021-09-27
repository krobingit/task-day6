
const getData1 = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3/all");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {

        const countries = xhr.response;

        var asiacountries = countries.filter((country) => country.region == "Asia")

        console.log(asiacountries.map(obj => obj.name.common).join("\n"))
    }
}
getData1();