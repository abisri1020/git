var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };
var result;
if (obj1.length == obj2.length) {
    for (key in obj1) {
        if (obj1[key] == obj2[key]) {
            result = "both json are equal";
        } else {
            result = "both json are not equal";
            break;
        }
    }
}
console.log(result);