var obj = [{
        person: "name1",
        age: 23,
        company: "Guvi"
    },
    {
        person: "name2",
        age: 25,
        company: "Guvi geeks"
    },
    {
        person: "name3",
        age: 21,
        company: "Guvi geeks network"
    }
];

//normal for loop
console.log("1.normal for loop...");
for (var i = 0; i < obj.length; i++) {
    console.log(obj[i].person);
    console.log(obj[i].age);
    console.log(obj[i].company);
}
//for of loop
console.log("2.for of loop...");
for (let json of obj) {
    console.log(json.person);
    console.log(json.age);
    console.log(json.company);
}
// for in loop
console.log("3.for in loop...");
for (let key in obj) {
    console.log(obj[key].person);
    console.log(obj[key].age);
    console.log(obj[key].company);
}
//forEach loop
console.log("4.forEach loop...");
obj.forEach(function(a) {
    console.log(a.person);
    console.log(a.age);
    console.log(a.company);
});