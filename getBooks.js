function showUser(data) {
    document.getElementById("title").innerHTML = data.title;
    document.getElementById("author").innerHTML = data.author;
    document.getElementById("isbn").innerHTML = data.isbn;
    document.getElementById("archived").innerHTML = data.archived;
}

function getBookData() {
let bookIdInvoer = document.getElementById('bookIdGet').value;

    fetch("http://localhost:8080/book/"+bookIdInvoer)
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
                <th>Voornaam</th>
                <th>Achternaam</th>
                <th>Datum</th>
             </tr>`;

    // Loop to access all rows 
for (let r of data) {
    reservationTableHtml += `<tr> 
            <td>${r.firstName} </td>
            <td>${r.lastName} </td>
            <td>${r.date}</td>
        </tr>`;
}

    // Setting innerHTML as tab variable
    document.getElementById("reservations").innerHTML = reservationTableHtml;
}

function getReservationData() {
    let reservationIdInvoer = document.getElementById('bookIdGet').value;
    
        fetch("http://localhost:8080/reservation/book/"+reservationIdInvoer)
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
                <th>Voornaam</th>
                <th>Achternaam</th>
                <th>Datum</th>
                </tr>`;

    // Loop to access all rows 
for (let r of data) {
    lentTableHtml += `<tr> 
            <td>${r.firstName} </td>
            <td>${r.lastName} </td>
            <td>${r.date}</td>
        </tr>`;
}

    // Setting innerHTML as tab variable
    document.getElementById("lents").innerHTML = lentTableHtml;
}

function getLentData() {
    let lentIdInvoer = document.getElementById('bookIdGet').value;
    
        fetch("http://localhost:8080/lent/book/"+lentIdInvoer)
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
                <th>Voornaam</th>
                <th>Achternaam</th>
                <th>Datum</th>
                </tr>`;

    // Loop to access all rows 
for (let r of data) {
    returnedTableHtml += `<tr> 
            <td>${r.firstName} </td>
            <td>${r.lastName} </td>
            <td>${r.date}</td>
        </tr>`;
}

    // Setting innerHTML as tab variable
    document.getElementById("returns").innerHTML = returnedTableHtml;
}

function getReturnedData() {
    let returnedIdInvoer = document.getElementById('bookIdGet').value;
    
        fetch("http://localhost:8080/returned/book/"+returnedIdInvoer)
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

