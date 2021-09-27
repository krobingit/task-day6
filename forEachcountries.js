const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3/all");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {

        const countries = xhr.response;
        console.log(countries)
        var i = 1;
        var namecapitalflag = countries.forEach((country) => {
            console.log(`${i}.` + "[Name]: " + country.name.common, "[Capital]: " + country.capital, "[Flag]: " + country.flag)
            i++;
        })
    }
}
getData();