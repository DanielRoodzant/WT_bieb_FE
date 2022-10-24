function registerReservation() {
    // Formulier uitlezen
    let userIdInvoer = document.getElementById('userIdReg').value;
    let bookIdInvoer = document.getElementById('bookIdReg').value;
    //let Invoer = document.getElementById('isbnReg').value;

    let newReservation = {
        userId: userIdInvoer,
        bookId: bookIdInvoer
    }

    fetch("http://localhost:8080/reservation/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newReservation)
    })
    .then(response => {
        alert('Reservation registered');
    })
    .catch(error => {
        alert('Could not register reservation. Please check input.');
    });
}

function deleteReservation() {
    // Formulier uitlezen
    let ReservationIdInvoer = document.getElementById('resIdDel').value;


    fetch("http://localhost:8080/reservation/delete/"+ReservationIdInvoer, {
        method: 'DELETE'
        
    })
    .then(response => {
        alert('Reservation deleted');
    })
    .catch(error => {
        alert('Could not delete reservation. Please check input.');
    });
}

function show(data) {
    let reservationTableHtml =
        `<tr>
                <th>Id</th>
                <th>user id</th>
                <th>book id</th>
                <th>date</th>
             </tr>`;

    // Loop to access all rows 
    for (let r of data) {
        reservationTableHtml += `<tr> 
                <td>${r.reservationId} </td>
                <td>${r.userId}</td>
                <td>${r.bookId}</td>
                <td>${r.date}</td>
            </tr>`;
    }

    // Setting innerHTML as tab variable
    document.getElementById("reservation").innerHTML = reservationTableHtml;
}

function getapi() {
    fetch("http://localhost:8080/reservation")
        .then(response => response.json())
        .then(a => {
            console.log('response', a);
            show(a);
        })
        .catch(error => {
            console.log('error', error);
            // handle the error
        });
}

getapi();
