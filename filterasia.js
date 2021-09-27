
const getData1 = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3/all");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {

        const countries = xhr.response;

        var asiacountries = countries.filter((country) => country.region == "Asia")

        var i = 1;
        asiacountries.forEach((country) => {
            console.log(`${i}.` + country.name.common)
            i++;
        })
    }
}
getData1();