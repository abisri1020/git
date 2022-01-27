var obj = {
    Name: "Sri Abirami",
    DOB: "20-02-1999",
    Age: "22",
    Qualification: "B.E ECE",
    College: "KLNCE",
    Location: "Tamil Nadu"
};

// console.log(obj);
for (let data in obj) {
    console.log(data + ": " + obj[data]);
}