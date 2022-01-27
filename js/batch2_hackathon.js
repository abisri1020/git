document.body.innerHTML = `<section class="container"></section>`;
async function allusers() {
    let data = await fetch("https://6172420261ed900017c406fb.mockapi.io/users");
    let users = await data.json()
    let container = document.querySelector(".container")
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        let x = user.name;
        let y = user.url;
        j = i + 1;
        if (user.name == x) {
            container.innerHTML += `

            <h4>${j}) Name:</h4>
                <p> ${user.name}</p>`;
            async function link() {
                let data1 = await fetch(y);
                let users1 = await data1.json();
                // console.log(users1);
                let container1 = document.querySelector(".container")
                container1.innerHTML += `
                <h4>Abilities:</h4>`;
                users1.abilities.forEach((ab) => {
                    container1.innerHTML += `
                        <p>${ab.ability.name}</p>`;
                });
                container1.innerHTML += `
                <h4>moves:</h4>`;
                users1.moves.forEach((mv) => {
                    container1.innerHTML += `
                        <p>${mv.move.name}</p>`;
                });
                container1.innerHTML += `
                <h4>Weight:</h4>
                    <p>${users1.weight}</p>`;
                j++;

            }
            await link();
        } else {
            container.innerHTML += `
                    <p>Invalid name</p>`;
        }
    }
    console.log(users);
}
allusers();


document.body.innerHTML = `<section class="user-container"></section>`;
async function getAllUsers() {
    let data = await fetch("https://617128f9c20f3a001705fb0b.mockapi.io/users");
    let users = await data.json();
    let userContainer = document.querySelector(".user-container");
    users.forEach((user) => {
        let x = user.name;
        if (user.name == x) {
            userContainer.innerHTML += `
            <h3>${user.country[0].country_id}</h3>
            <h3>${user.country[0].probability}</h3>
            <h3>${user.country[1].country_id}</h3>
            <h3>${user.country[1].probability}</h3>
            <br>
            `;
        } else {
            userContainer.innerHTML += `
            <h3>user not found</h3>
            `;
        }
    });
    console.log(users);
}
getAllUsers();

async function foo() {

    let a = document.getElementById("name").value;
    console.log(a);
    let res = await fetch(`https://api.covid19api.com/total/country/${a}`);
    let result = await res.json();
    for (var i in result) {
        console.log(`Confirmed:${result[i].Confirmed} Active:${result[i].Active} Deaths:${result[i].Deaths} Active:${result[i].Active}`)
    }
}

/* <input id="name" type="text" required><br><br>
<!-- <button onClick="foo()">Submit</button> -->
<input type="submit" value="Submit" onclick="foo()"> */