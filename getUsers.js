function showUser(data) {
    document.getElementById("firstName").innerHTML = data.firstName;
    document.getElementById("lastName").innerHTML = data.lastName;
    document.getElementById("email").innerHTML = data.email;
    document.getElementById("password").innerHTML = data.password;
    document.getElementById("admin").innerHTML = data.admin;
}

function getUserData() {
let userIdInvoer = document.getElementById('userIdGet').value;

    fetch("http://localhost:8080/user/"+userIdInvoer)
        .then(response => response.json())
        .then(a => {
            console.log('response', a);
            showUser(a);
        })
        .catch(error => {
            console.log('error', error);
            // handle the error
        });
}

function showReservation(data) {
    let reservationTableHtml =
        `<tr>
                <th>Boek</th>
                <th>Auteur</th>
                <th>Datum</th>
             </tr>`;

    // Loop to access all rows 
for (let r of data) {
    reservationTableHtml += `<tr> 
            <td>${r.title} </td>
            <td>${r.author} </td>
            <td>${r.date}</td>
        </tr>`;
}

    // Setting innerHTML as tab variable
    document.getElementById("reservations").innerHTML = reservationTableHtml;
}

function getReservationData() {
    let reservationIdInvoer = document.getElementById('userIdGet').value;
    
        fetch("http://localhost:8080/reservation/user/"+reservationIdInvoer)
            .then(response => response.json())
            .then(a => {
                console.log('response', a);
                showReservation(a);
            })
            .catch(error => {
                console.log('error', error);
                // handle the error
            });
}

function showLent(data) {
    let lentTableHtml =
        `<tr>
                <th>Boek</th>
                <th>Auteur</th>
                <th>Datum</th>
                </tr>`;

    // Loop to access all rows 
for (let r of data) {
    lentTableHtml += `<tr> 
            <td>${r.title} </td>
            <td>${r.author} </td>
            <td>${r.date}</td>
        </tr>`;
}

    // Setting innerHTML as tab variable
    document.getElementById("lents").innerHTML = lentTableHtml;
}

function getLentData() {
    let lentIdInvoer = document.getElementById('userIdGet').value;
    
        fetch("http://localhost:8080/lent/user/"+lentIdInvoer)
            .then(response => response.json())
            .then(a => {
                console.log('response', a);
                showLent(a);
            })
            .catch(error => {
                console.log('error', error);
                // handle the error
            });
}

function showReturned(data) {
    let returnedTableHtml =
        `<tr>
                <th>Boek</th>
                <th>Auteur</th>
                <th>Datum</th>
                </tr>`;

    // Loop to access all rows 
for (let r of data) {
    returnedTableHtml += `<tr> 
            <td>${r.title} </td>
            <td>${r.author} </td>
            <td>${r.date}</td>
        </tr>`;
}

    // Setting innerHTML as tab variable
    document.getElementById("returneds").innerHTML = returnedTableHtml;
}

function getReturnedData() {
    let returnedIdInvoer = document.getElementById('userIdGet').value;
    
        fetch("http://localhost:8080/returned/user/"+returnedIdInvoer)
            .then(response => response.json())
            .then(a => {
                console.log('response', a);
                showReturned(a);
            })
            .catch(error => {
                console.log('error', error);
                // handle the error
            });
    }