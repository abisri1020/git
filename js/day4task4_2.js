(function() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType = "json";
    xhr.onload = () => {
        let x = xhr.response;
        console.log(x.map(p => p.flag));
        for (let f of x) {

            let im = document.createElement('img');
            im.src = f.flags;
            document.body.append(im);

        }
    };
    xhr.send();
})();