// // // // let gb = () => {
// // // //     const xhr = new XMLHttpRequest();
// // // //     xhr.open("GET", "https://60c98aa8772a760017203b57.mockapi.io/blogs");
// // // //     xhr.responseType = "json";
// // // //     xhr.onload = () => {
// // // //         console.log(xhr.response);
// // // //         const blogs = xhr.response;
// // // //         for (x of blogs) {
// // // //             // console.log(x.heading);
// // // //             // if (x.id >= 8) {
// // // //             //     console.log(x.id);
// // // //             // }

// // // //         }
// // // //     };
// // // //     xhr.send();
// // // // };
// // // // gb();


// // // class car {
// // //     constructor(n, w, d, e) {
// // //         this.name = n;
// // //         this.wheel = w;
// // //         this.door = d;
// // //         this.engine = e;
// // //     }
// // // }
// // // const ferrari = new car("ferrari", 4, 2, "v12");
// // // console.log(ferrari)
// // // const venue = new car("venue", 4, 4, "v3");
// // // console.log(venue)
// // // const bmw_x6 = new car("bmw_x6", 4, 2, "v6");
// // // console.log(bmw_x6)
// // // const Toyato_landcruiser = new car("Toyato_landcruiser", 4, 5, "v8");
// // // console.log(Toyato_landcruiser)
// // // console.log(typeof ferrari, typeof car);
// // (function() {
// //     let xhr = new XMLHttpRequest();
// //     xhr.open("GET", "https://60c98aa8772a760017203b57.mockapi.io/blogs");
// //     xhr.responseType = "json";
// //     xhr.onload = () => {
// //         console.log(xhr.response);
// //         let x = xhr.response;
// //         for (y of x) {
// //             if ((y.id >= 5) && (y.id <= 8))
// //                 console.log(y.heading);
// //         }
// //     };
// //     xhr.send();
// // })();
// // let marks = [1, 2, 3, 4, 5];
// // console.log(marks.reduce((c, s) => c + s, 5));
// const scores = [{
//         marks: 32,
//         name: "Yvette Merritt",
//     },
//     {
//         marks: 57,
//         name: "Lillian Ellis",
//     },
//     {
//         marks: 22,
//         name: "Mccall Carter",
//     },
//     {
//         marks: 21,
//         name: "Pate Collier",
//     },
//     {
//         marks: 91,
//         name: "Debra Beard",
//     },
//     {
//         marks: 75,
//         name: "Nettie Hancock",
//     },
//     {
//         marks: 20,
//         name: "Hatfield Hodge",
//     },
// ];

// // task1
// // console.log(scores.map(names => names.name));
// // task 2
// // console.log(scores.filter(names => names.marks >= 40));
// // task 3
// // console.log(scores.filter(names => names.marks < 40).map(names => names.name));
// // task 4
// // console.log(((scores.reduce((value, sum) => value + sum.marks, 0)) / scores.length).toFixed(2));
// // task 5
// // console.log(scores.filter(n => n.marks === Math.max(...scores.map(names => names.marks))).map(n => n.name));
// // task 5
// console.log((scores.reduce((val, acc) => {
//         if (val.marks < acc.marks) {
//             return acc
//         } else {
//             return val
//         }
//     })).name)
//     // task 5
// console.log((scores.reduce((val, acc) => val.marks < acc.marks ? acc : val)).name)

// // let a = [10, 20, 30, 40, 50];

// // let b = a.map(value => value * 2);
// // console.log(b);
// // console.log(a.map(t => t * 2));
// // console.log(a.map(x => x > 15));
// // 10>15->false
// // 20
// // console.log(a.filter(x => (x > 15) && (x < 48)));
// // console.log(a.reduce((val, sum) => sum + val));
// // sum  val sum+val
// // 10   20  30
// // 30   30  60
// // 60   40  100
// // 100  50 

var url = "https://617128f9c20f3a001705fb0b.mockapi.io/users";

function get() {
    fetch(url).then((resp) => resp.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
}
get();

function create() {
    let data = {
        name: "Jhon doe",
        email: "abc@gmail.com"
    }
    fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json;charset=UTF-8",
            }
        }).then((resp) => resp.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
}
// create();
function update() {
    let data = {
        name: "SaJb",
        email: "sajb1020@gmail.com"
    }
    fetch(url + "/6", {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json;charset=UTF-8",
            }
        }).then((resp) => resp.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
}
// update();
function deletedata() {
    fetch(url + "/3", {
            method: "DELETE",
        }).then((resp) => resp.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
}
deletedata();