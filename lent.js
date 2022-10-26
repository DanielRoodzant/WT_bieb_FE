function registerLent() {
    // Formulier uitlezen
    let lentIdInvoer = document.getElementById('lentIdReg').value;
    let userIdInvoer = document.getElementById('userIdReg').value;
    let copyIdInvoer = document.getElementById('copyIdReg').value;
    let dateInvoer = document.getElementById('dateReg').value;

    let newLent = {
        lentId: lentIdInvoer,
        userId: userIdInvoer,
        copy: copyIdInvoer,
        date: dateInvoer,
    }

    fetch("http://localhost:8080/lent/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newLent)
    })
    .then(response => {
        alert('Lent registered');
    })
    .catch(error => {
        alert('Could not register lent. Please check input.');
    });
}

function deleteLent() {
    // Formulier uitlezen
    let lentIdInvoer = document.getElementById('lentIdDel').value;


    fetch("http://localhost:8080/lent/delete/"+lentIdInvoer, {
        method: 'DELETE'
        
    })
    .then(response => {
        alert('Lent deleted');
    })
    .catch(error => {
        alert('Could not delete lent. Please check input.');
    });
}

function updateLent() {
    // Formulier uitlezen
    let lentIdInvoer = document.getElementById('lentIdUpd').value;
    let userIdInvoer = document.getElementById('userIdUpd').value;
    let copyIdInvoer = document.getElementById('copyIdUpd').value;
    let dateInvoer = document.getElementById('dateUpd').value;

    let newLent = {
        lentId: lentIdInvoer,
        userId: userIdInvoer,
        copy: copyIdInvoer,
        date: dateInvoer,
    }

    fetch("http://localhost:8080/lent/update/"+lentIdInvoer, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newLent)
    })
    .then(response => {
        alert('Lent updated');
    })
    .catch(error => {
        alert('Could not update lent. Please check input.');
    });
}
//lijn 88 checken-->Archived
function show(data) {
    let lentTableHtml =
    `<tr>
            <th>lentId</th>
            <th>userId</th>
            <th>copyId</th>
            <th>date</th>
         </tr>`;

// Loop to access all rows 
for (let r of data) {
    lentTableHtml += `<tr> 
            <td>${r.lentId} </td>
            <td>${r.userId}</td>
            <td>${r.copyId}</td>
            <td>${r.date}</td>
        </tr>`;
}

    // Setting innerHTML as tab variable
    document.getElementById("lents").innerHTML = lentTableHtml;
}

function getapi() {
    fetch("http://localhost:8080/lent")
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