const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3/all");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {

        const countries = xhr.response;
        var namecapitalflag = countries.forEach((country) => {
            console.log("[Name]: " + country.name.common, "[Capital]: " + country.capital, "[Flag]: " + country.flag)
        })
    }
}
getData();