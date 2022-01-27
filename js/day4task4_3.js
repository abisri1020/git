(function() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType = "json";
    xhr.onload = () => {
        let x = xhr.response;
        console.log(x.map(n => n.name));
        console.log(x.map(r => r.region));
        console.log(x.map(s => s.subregion));
        console.log(x.map(p => p.population));
    };
    xhr.send();
})();