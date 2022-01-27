// A) Get all the countries from Asia continent / region using Filter
// function.
//XML  HTTP REQUEST(xhr) (VIA API)
// Step 01: create a XHR object
var request = new XMLHttpRequest();
//Step 02:initatiate a connection(starting a connections)
//true is used if your api doesnot want to affect the remaining  execution of your code

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
//step 03: sending a connection

request.send();
//step 04: once the data has been received successfully from server we need to extract te data  from JSON 

//some conversion is needed here 
request.onload = function() {
    var data = JSON.parse(request.response);
    var res = data.filter(obj => obj.region == "Asia");
    console.log(res)

}

// output -
//     Array(50)
// 0: { name: "Afghanistan", topLevelDomain: Array(1), alpha2Code: "AF", alpha3Code: "AFG", callingCodes: Array(1), … }
// 1: { name: "Armenia", topLevelDomain: Array(1), alpha2Code: "AM", alpha3Code: "ARM", callingCodes: Array(1), … }
// 2: { name: "Azerbaijan", topLevelDomain: Array(1), alpha2Code: "AZ", alpha3Code: "AZE", callingCodes: Array(1), … }
// 3: { name: "Bahrain", topLevelDomain: Array(1), alpha2Code: "BH", alpha3Code: "BHR", callingCodes: Array(1), … }
// 4: { name: "Bangladesh", topLevelDomain: Array(1), alpha2Code: "BD", alpha3Code: "BGD", callingCodes: Array(1), … }
// 5: { name: "Bhutan", topLevelDomain: Array(1), alpha2Code: "BT", alpha3Code: "BTN", callingCodes: Array(1), … }
// 6: { name: "Brunei Darussalam", topLevelDomain: Array(1), alpha2Code: "BN", alpha3Code: "BRN", callingCodes: Array(1), … }
// 7: { name: "Cambodia", topLevelDomain: Array(1), alpha2Code: "KH", alpha3Code: "KHM", callingCodes: Array(1), … }
// 8: { name: "China", topLevelDomain: Array(1), alpha2Code: "CN", alpha3Code: "CHN", callingCodes: Array(1), … }
// 9: { name: "Georgia", topLevelDomain: Array(1), alpha2Code: "GE", alpha3Code: "GEO", callingCodes: Array(1), … }
// 10: { name: "Hong Kong", topLevelDomain: Array(1), alpha2Code: "HK", alpha3Code: "HKG", callingCodes: Array(1), … }
// 11: { name: "India", topLevelDomain: Array(1), alpha2Code: "IN", alpha3Code: "IND", callingCodes: Array(1), … }
// 12: { name: "Indonesia", topLevelDomain: Array(1), alpha2Code: "ID", alpha3Code: "IDN", callingCodes: Array(1), … }
// 13: { name: "Iran (Islamic Republic of)", topLevelDomain: Array(1), alpha2Code: "IR", alpha3Code: "IRN", callingCodes: Array(1), … }
// 14: { name: "Iraq", topLevelDomain: Array(1), alpha2Code: "IQ", alpha3Code: "IRQ", callingCodes: Array(1), … }
// 15: { name: "Israel", topLevelDomain: Array(1), alpha2Code: "IL", alpha3Code: "ISR", callingCodes: Array(1), … }
// 16: { name: "Japan", topLevelDomain: Array(1), alpha2Code: "JP", alpha3Code: "JPN", callingCodes: Array(1), … }
// 17: { name: "Jordan", topLevelDomain: Array(1), alpha2Code: "JO", alpha3Code: "JOR", callingCodes: Array(1), … }
// 18: { name: "Kazakhstan", topLevelDomain: Array(2), alpha2Code: "KZ", alpha3Code: "KAZ", callingCodes: Array(2), … }
// 19: { name: "Kuwait", topLevelDomain: Array(1), alpha2Code: "KW", alpha3Code: "KWT", callingCodes: Array(1), … }
// 20: { name: "Kyrgyzstan", topLevelDomain: Array(1), alpha2Code: "KG", alpha3Code: "KGZ", callingCodes: Array(1), … }
// 21: { name: "Lao People's Democratic Republic", topLevelDomain: Array(1), alpha2Code: "LA", alpha3Code: "LAO", callingCodes: Array(1), … }
// 22: { name: "Lebanon", topLevelDomain: Array(1), alpha2Code: "LB", alpha3Code: "LBN", callingCodes: Array(1), … }
// 23: { name: "Macao", topLevelDomain: Array(1), alpha2Code: "MO", alpha3Code: "MAC", callingCodes: Array(1), … }
// 24: { name: "Malaysia", topLevelDomain: Array(1), alpha2Code: "MY", alpha3Code: "MYS", callingCodes: Array(1), … }
// 25: { name: "Maldives", topLevelDomain: Array(1), alpha2Code: "MV", alpha3Code: "MDV", callingCodes: Array(1), … }
// 26: { name: "Mongolia", topLevelDomain: Array(1), alpha2Code: "MN", alpha3Code: "MNG", callingCodes: Array(1), … }
// 27: { name: "Myanmar", topLevelDomain: Array(1), alpha2Code: "MM", alpha3Code: "MMR", callingCodes: Array(1), … }
// 28: { name: "Nepal", topLevelDomain: Array(1), alpha2Code: "NP", alpha3Code: "NPL", callingCodes: Array(1), … }
// 29: { name: "Korea (Democratic People's Republic of)", topLevelDomain: Array(1), alpha2Code: "KP", alpha3Code: "PRK", callingCodes: Array(1), … }
// 30: { name: "Oman", topLevelDomain: Array(1), alpha2Code: "OM", alpha3Code: "OMN", callingCodes: Array(1), … }
// 31: { name: "Pakistan", topLevelDomain: Array(1), alpha2Code: "PK", alpha3Code: "PAK", callingCodes: Array(1), … }
// 32: { name: "Palestine, State of", topLevelDomain: Array(1), alpha2Code: "PS", alpha3Code: "PSE", callingCodes: Array(1), … }
// 33: { name: "Philippines", topLevelDomain: Array(1), alpha2Code: "PH", alpha3Code: "PHL", callingCodes: Array(1), … }
// 34: { name: "Qatar", topLevelDomain: Array(1), alpha2Code: "QA", alpha3Code: "QAT", callingCodes: Array(1), … }
// 35: { name: "Saudi Arabia", topLevelDomain: Array(1), alpha2Code: "SA", alpha3Code: "SAU", callingCodes: Array(1), … }
// 36: { name: "Singapore", topLevelDomain: Array(1), alpha2Code: "SG", alpha3Code: "SGP", callingCodes: Array(1), … }
// 37: { name: "Korea (Republic of)", topLevelDomain: Array(1), alpha2Code: "KR", alpha3Code: "KOR", callingCodes: Array(1), … }
// 38: { name: "Sri Lanka", topLevelDomain: Array(1), alpha2Code: "LK", alpha3Code: "LKA", callingCodes: Array(1), … }
// 39: { name: "Syrian Arab Republic", topLevelDomain: Array(1), alpha2Code: "SY", alpha3Code: "SYR", callingCodes: Array(1), … }
// 40: { name: "Taiwan", topLevelDomain: Array(1), alpha2Code: "TW", alpha3Code: "TWN", callingCodes: Array(1), … }
// 41: { name: "Tajikistan", topLevelDomain: Array(1), alpha2Code: "TJ", alpha3Code: "TJK", callingCodes: Array(1), … }
// 42: { name: "Thailand", topLevelDomain: Array(1), alpha2Code: "TH", alpha3Code: "THA", callingCodes: Array(1), … }
// 43: { name: "Timor-Leste", topLevelDomain: Array(1), alpha2Code: "TL", alpha3Code: "TLS", callingCodes: Array(1), … }
// 44: { name: "Turkey", topLevelDomain: Array(1), alpha2Code: "TR", alpha3Code: "TUR", callingCodes: Array(1), … }
// 45: { name: "Turkmenistan", topLevelDomain: Array(1), alpha2Code: "TM", alpha3Code: "TKM", callingCodes: Array(1), … }
// 46: { name: "United Arab Emirates", topLevelDomain: Array(1), alpha2Code: "AE", alpha3Code: "ARE", callingCodes: Array(1), … }
// 47: { name: "Uzbekistan", topLevelDomain: Array(1), alpha2Code: "UZ", alpha3Code: "UZB", callingCodes: Array(1), … }
// 48: { name: "Viet Nam", topLevelDomain: Array(1), alpha2Code: "VN", alpha3Code: "VNM", callingCodes: Array(1), … }
// 49: { name: "Yemen", topLevelDomain: Array(1), alpha2Code: "YE", alpha3Code: "YEM", callingCodes: Array(1), … }
// length: 50






// B) Get all the countries with a population of less than 2 lakhs using Filter
// function

//XML  HTTP REQUEST(xhr) (VIA API)
// Step 01: create a XHR object
var request = new XMLHttpRequest();
//Step 02:initatiate a connection(starting a connections)
//true is used if your api doesnot want to affect the remaining  execution of your code

request.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true);
//step 03: sending a connection

request.send();
//step 04: once the data has been received successfully from server we need to extract te data  from JSON 

//some conversion is needed here 
request.onload = function() {
    var data = JSON.parse(request.response);
    var res = data.filter(obj => obj.population < 200000);
    console.log(res)

}


// output -
//     Array(63)
// 0: { name: "Åland Islands", topLevelDomain: Array(1), alpha2Code: "AX", alpha3Code: "ALA", callingCodes: Array(1), … }
// 1: { name: "American Samoa", topLevelDomain: Array(1), alpha2Code: "AS", alpha3Code: "ASM", callingCodes: Array(1), … }
// 2: { name: "Andorra", topLevelDomain: Array(1), alpha2Code: "AD", alpha3Code: "AND", callingCodes: Array(1), … }
// 3: { name: "Anguilla", topLevelDomain: Array(1), alpha2Code: "AI", alpha3Code: "AIA", callingCodes: Array(1), … }
// 4: { name: "Antarctica", topLevelDomain: Array(1), alpha2Code: "AQ", alpha3Code: "ATA", callingCodes: Array(1), … }
// 5: { name: "Antigua and Barbuda", topLevelDomain: Array(1), alpha2Code: "AG", alpha3Code: "ATG", callingCodes: Array(1), … }
// 6: { name: "Aruba", topLevelDomain: Array(1), alpha2Code: "AW", alpha3Code: "ABW", callingCodes: Array(1), … }
// 7: { name: "Bermuda", topLevelDomain: Array(1), alpha2Code: "BM", alpha3Code: "BMU", callingCodes: Array(1), … }
// 8: { name: "Bonaire, Sint Eustatius and Saba", topLevelDomain: Array(2), alpha2Code: "BQ", alpha3Code: "BES", callingCodes: Array(1), … }
// 9: { name: "Bouvet Island", topLevelDomain: Array(1), alpha2Code: "BV", alpha3Code: "BVT", callingCodes: Array(1), … }
// 10: { name: "British Indian Ocean Territory", topLevelDomain: Array(1), alpha2Code: "IO", alpha3Code: "IOT", callingCodes: Array(1), … }
// 11: { name: "United States Minor Outlying Islands", topLevelDomain: Array(1), alpha2Code: "UM", alpha3Code: "UMI", callingCodes: Array(1), … }
// 12: { name: "Virgin Islands (British)", topLevelDomain: Array(1), alpha2Code: "VG", alpha3Code: "VGB", callingCodes: Array(1), … }
// 13: { name: "Virgin Islands (U.S.)", topLevelDomain: Array(1), alpha2Code: "VI", alpha3Code: "VIR", callingCodes: Array(1), … }
// 14: { name: "Cayman Islands", topLevelDomain: Array(1), alpha2Code: "KY", alpha3Code: "CYM", callingCodes: Array(1), … }
// 15: { name: "Christmas Island", topLevelDomain: Array(1), alpha2Code: "CX", alpha3Code: "CXR", callingCodes: Array(1), … }
// 16: { name: "Cocos (Keeling) Islands", topLevelDomain: Array(1), alpha2Code: "CC", alpha3Code: "CCK", callingCodes: Array(1), … }
// 17: { name: "Cook Islands", topLevelDomain: Array(1), alpha2Code: "CK", alpha3Code: "COK", callingCodes: Array(1), … }
// 18: { name: "Curaçao", topLevelDomain: Array(1), alpha2Code: "CW", alpha3Code: "CUW", callingCodes: Array(1), … }
// 19: { name: "Dominica", topLevelDomain: Array(1), alpha2Code: "DM", alpha3Code: "DMA", callingCodes: Array(1), … }
// 20: { name: "Falkland Islands (Malvinas)", topLevelDomain: Array(1), alpha2Code: "FK", alpha3Code: "FLK", callingCodes: Array(1), … }
// 21: { name: "Faroe Islands", topLevelDomain: Array(1), alpha2Code: "FO", alpha3Code: "FRO", callingCodes: Array(1), … }
// 22: { name: "French Southern Territories", topLevelDomain: Array(1), alpha2Code: "TF", alpha3Code: "ATF", callingCodes: Array(1), … }
// 23: { name: "Gibraltar", topLevelDomain: Array(1), alpha2Code: "GI", alpha3Code: "GIB", callingCodes: Array(1), … }
// 24: { name: "Greenland", topLevelDomain: Array(1), alpha2Code: "GL", alpha3Code: "GRL", callingCodes: Array(1), … }
// 25: { name: "Grenada", topLevelDomain: Array(1), alpha2Code: "GD", alpha3Code: "GRD", callingCodes: Array(1), … }
// 26: { name: "Guam", topLevelDomain: Array(1), alpha2Code: "GU", alpha3Code: "GUM", callingCodes: Array(1), … }
// 27: { name: "Guernsey", topLevelDomain: Array(1), alpha2Code: "GG", alpha3Code: "GGY", callingCodes: Array(1), … }
// 28: { name: "Heard Island and McDonald Islands", topLevelDomain: Array(2), alpha2Code: "HM", alpha3Code: "HMD", callingCodes: Array(1), … }
// 29: { name: "Holy See", topLevelDomain: Array(1), alpha2Code: "VA", alpha3Code: "VAT", callingCodes: Array(1), … }
// 30: { name: "Isle of Man", topLevelDomain: Array(1), alpha2Code: "IM", alpha3Code: "IMN", callingCodes: Array(1), … }
// 31: { name: "Jersey", topLevelDomain: Array(1), alpha2Code: "JE", alpha3Code: "JEY", callingCodes: Array(1), … }
// 32: { name: "Kiribati", topLevelDomain: Array(1), alpha2Code: "KI", alpha3Code: "KIR", callingCodes: Array(1), … }
// 33: { name: "Liechtenstein", topLevelDomain: Array(1), alpha2Code: "LI", alpha3Code: "LIE", callingCodes: Array(1), … }
// 34: { name: "Marshall Islands", topLevelDomain: Array(1), alpha2Code: "MH", alpha3Code: "MHL", callingCodes: Array(1), … }
// 35: { name: "Micronesia (Federated States of)", topLevelDomain: Array(1), alpha2Code: "FM", alpha3Code: "FSM", callingCodes: Array(1), … }
// 36: { name: "Monaco", topLevelDomain: Array(1), alpha2Code: "MC", alpha3Code: "MCO", callingCodes: Array(1), … }
// 37: { name: "Montserrat", topLevelDomain: Array(1), alpha2Code: "MS", alpha3Code: "MSR", callingCodes: Array(1), … }
// 38: { name: "Nauru", topLevelDomain: Array(1), alpha2Code: "NR", alpha3Code: "NRU", callingCodes: Array(1), … }
// 39: { name: "Niue", topLevelDomain: Array(1), alpha2Code: "NU", alpha3Code: "NIU", callingCodes: Array(1), … }
// 40: { name: "Norfolk Island", topLevelDomain: Array(1), alpha2Code: "NF", alpha3Code: "NFK", callingCodes: Array(1), … }
// 41: { name: "Northern Mariana Islands", topLevelDomain: Array(1), alpha2Code: "MP", alpha3Code: "MNP", callingCodes: Array(1), … }
// 42: { name: "Palau", topLevelDomain: Array(1), alpha2Code: "PW", alpha3Code: "PLW", callingCodes: Array(1), … }
// 43: { name: "Pitcairn", topLevelDomain: Array(1), alpha2Code: "PN", alpha3Code: "PCN", callingCodes: Array(1), … }
// 44: { name: "Saint Barthélemy", topLevelDomain: Array(1), alpha2Code: "BL", alpha3Code: "BLM", callingCodes: Array(1), … }
// 45: { name: "Saint Helena, Ascension and Tristan da Cunha", topLevelDomain: Array(1), alpha2Code: "SH", alpha3Code: "SHN", callingCodes: Array(1), … }
// 46: { name: "Saint Kitts and Nevis", topLevelDomain: Array(1), alpha2Code: "KN", alpha3Code: "KNA", callingCodes: Array(1), … }
// 47: { name: "Saint Lucia", topLevelDomain: Array(1), alpha2Code: "LC", alpha3Code: "LCA", callingCodes: Array(1), … }
// 48: { name: "Saint Martin (French part)", topLevelDomain: Array(3), alpha2Code: "MF", alpha3Code: "MAF", callingCodes: Array(1), … }
// 49: { name: "Saint Pierre and Miquelon", topLevelDomain: Array(1), alpha2Code: "PM", alpha3Code: "SPM", callingCodes: Array(1), … }
// 50: { name: "Saint Vincent and the Grenadines", topLevelDomain: Array(1), alpha2Code: "VC", alpha3Code: "VCT", callingCodes: Array(1), … }
// 51: { name: "Samoa", topLevelDomain: Array(1), alpha2Code: "WS", alpha3Code: "WSM", callingCodes: Array(1), … }
// 52: { name: "San Marino", topLevelDomain: Array(1), alpha2Code: "SM", alpha3Code: "SMR", callingCodes: Array(1), … }
// 53: { name: "Sao Tome and Principe", topLevelDomain: Array(1), alpha2Code: "ST", alpha3Code: "STP", callingCodes: Array(1), … }
// 54: { name: "Seychelles", topLevelDomain: Array(1), alpha2Code: "SC", alpha3Code: "SYC", callingCodes: Array(1), … }
// 55: { name: "Sint Maarten (Dutch part)", topLevelDomain: Array(1), alpha2Code: "SX", alpha3Code: "SXM", callingCodes: Array(1), … }
// 56: { name: "South Georgia and the South Sandwich Islands", topLevelDomain: Array(1), alpha2Code: "GS", alpha3Code: "SGS", callingCodes: Array(1), … }
// 57: { name: "Svalbard and Jan Mayen", topLevelDomain: Array(1), alpha2Code: "SJ", alpha3Code: "SJM", callingCodes: Array(1), … }
// 58: { name: "Tokelau", topLevelDomain: Array(1), alpha2Code: "TK", alpha3Code: "TKL", callingCodes: Array(1), … }
// 59: { name: "Tonga", topLevelDomain: Array(1), alpha2Code: "TO", alpha3Code: "TON", callingCodes: Array(1), … }
// 60: { name: "Turks and Caicos Islands", topLevelDomain: Array(1), alpha2Code: "TC", alpha3Code: "TCA", callingCodes: Array(1), … }
// 61: { name: "Tuvalu", topLevelDomain: Array(1), alpha2Code: "TV", alpha3Code: "TUV", callingCodes: Array(1), … }
// 62: { name: "Wallis and Futuna", topLevelDomain: Array(1), alpha2Code: "WF", alpha3Code: "WLF", callingCodes: Array(1), … }
// length: 63







// c) Print the following details name, capital, flag using forEach
// function.


//XML  HTTP REQUEST(xhr) (VIA API)
// Step 01: create a XHR object
var request = new XMLHttpRequest();
//Step 02:initatiate a connection(starting a connections)
//true is used if your api doesnot want to affect the remaining  execution of your code

request.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true);
//step 03: sending a connection

request.send();
//step 04: once the data has been received successfully from server we need to extract te data  from JSON 

//some conversion is needed here 
request.onload = function() {
    var data = JSON.parse(request.response);
    var res = data.forEach(element => {

        console.log(`NAME-${element.name}`)
        console.log(`CAPITAL-${element.capital}`)
        console.log(`FLAG-${element.flag}`)
    });


}


// D) Print the total population of countries using reduce
// function
//XML  HTTP REQUEST(xhr) (VIA API)
// Step 01: create a XHR object
var request = new XMLHttpRequest();
//Step 02:initatiate a connection(starting a connections)
//true is used if your api doesnot want to affect the remaining  execution of your code

request.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true);
//step 03: sending a connection

request.send();
//step 04: once the data has been received successfully from server we need to extract te data  from JSON 

//some conversion is needed here 
request.onload = function() {
    var data = JSON.parse(request.response);
    var res = data.reduce((acc, crr) => {
        return acc + crr.population
    }, 0)
    console.log(res)

}


// OUTPUT - 7349137231

// E) Print the country which uses US Dollars as currency.
// Step 01: create a XHR object
var request = new XMLHttpRequest();
//Step 02:initatiate a connection(starting a connections)
//true is used if your api doesnot want to affect the remaining  execution of your code

request.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true);
//step 03: sending a connection

request.send();
//step 04: once the data has been received successfully from server we need to extract te data  from JSON 

//some conversion is needed here 
request.onload = function() {
        var data = JSON.parse(request.response);
        var res = data.filter(obj => {

            for (i = 0; i < obj.currencies.length; i++) {
                if (obj.currencies[i].code == "USD") {
                    return true;
                }
            }
        });
        output = res.map(ele => {
            return ele.name
        })
        console.log(output)

    }
    // output -

//     0: "American Samoa"
// 1: "Bonaire, Sint Eustatius and Saba"
// 2: "British Indian Ocean Territory"
// 3: "United States Minor Outlying Islands"
// 4: "Virgin Islands (British)"
// 5: "Virgin Islands (U.S.)"
// 6: "Cambodia"
// 7: "Ecuador"
// 8: "El Salvador"
// 9: "Guam"
// 10: "Marshall Islands"
// 11: "Micronesia (Federated States of)"
// 12: "Northern Mariana Islands"
// 13: "Palau"
// 14: "Panama"
// 15: "Puerto Rico"
// 16: "Timor-Leste"
// 17: "Turks and Caicos Islands"
// 18: "United States of America"
// 19: "Zimbabwe"