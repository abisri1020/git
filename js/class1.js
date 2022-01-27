var request = new XMLHttpRequest();

request.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true);

request.send();

request.onload = function() {

    var data = JSON.parse(request.response);

    for (var i in data) {
        // console.log(`${ele.name}-${ele.latlng[0]},${ele.latlng[1]}`);
        try {
            var n = data[i].name,
                latlan = data[i].latlng;
            if (latlan.length === 0) throw new Error("longitude not found");
            wd(n, ...latlan);
        } catch (e) {
            console.log("invalid coordinates" + n + " " + e.message);
        }

    }

    function wd(name, lat, lon) {
        var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3eac82035c254fddacc14904d4a093f8`;
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.send();
        request.onload = function() {
            var data = JSON.parse(request.response);
            console.log(`${name}-${data.main.temp}`);
        }
    }

}