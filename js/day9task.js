function day9() { // function declaration
    let xhr = new XMLHttpRequest(); // creating a XMLHttp request
    xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"); //getting response from the given url
    xhr.responseType = "json"; // the type of response is in the form of json
    xhr.onload = () => { //we give the operations to be perfromed
        let x = xhr.response; //we give the respone to the variable x
        // countries in asia
        console.log(x.filter(n => n.region == 'Asia').map(m => m.name)); //printing the name of the countries in asia using filter function and mapping the names using map function
        // countries with population less than 2 lakhs
        console.log(x.filter(n => n.population < 200000).map(m => m.name)); //printing countries with population less than 2 lakhs using the filter function and mapping the names using map function
        // name, capital, flag using forEach function
        x.forEach(function(a) { //foreach loop
            console.log(a.name);
            console.log(a.capital);
            console.log(a.flag);
        });
        //  total population of countries
        console.log(x.reduce((acc, crr) => { //reduce fuction for adding the total acc is pevious accumulated value and crr is the current value
                return acc + crr.population // returning the total population value
            }, 0)) //setting acc to 0
            // country which uses US Dollars as currency
        console.log(x.filter(obj => { //to filter the countries which uses USD
            for (i = 0; i < obj.currencies.length; i++) { //looping through currencies using for loop 
                if (obj.currencies[i].code == "USD") { // checking the currencies code to USD one by one
                    return true; // if USD return true
                }
            }
        }).map(e => e.name)); //map the names of the countries
    };
    xhr.send(); //the xhr response is send
}
day9(); //function calling