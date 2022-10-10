function registerLent() {
    // Formulier uitlezen
    let lentIdInvoer = document.getElementById('lentIdReg').value;
    let userIdInvoer = document.getElementById('userIdReg').value;
    let bookIdInvoer = document.getElementById('bookIdReg').value;
    let copyInvoer = document.getElementById('copyReg').value;
    let dateInvoer = document.getElementById('dateReg').value;

    let newLent = {
        lentId: lentIdInvoer,
        userId: userIdInvoer,
        bookId: bookIdInvoer,
        copy: copyInvoer,
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
    let bookIdInvoer = document.getElementById('bookIdUpd').value;
    let copyInvoer = document.getElementById('copyUpd').value;
    let dateInvoer = document.getElementById('dateUpd').value;

    let newLent = {
        lentId: lentIdInvoer,
        userId: userIdInvoer,
        bookId: bookIdInvoer,
        copy: copyInvoer,
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
                <th>bookId</th>
                <th>copy</th>
                <th>date</th>
                <th>Archived</th>
             </tr>`;

    // Loop to access all rows 
    for (let r of data) {
        lentTableHtml += `<tr> 
                <td>${r.lentId} </td>
                <td>${r.userId}</td>
                <td>${r.bookId}</td>
                <td>${r.copy}</td>
                <td>${r.date}</td>
                <td>${r.archived}</td>
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

function archiveLents() {
    let changeUserIdInvoer = document.getElementById('lentIdArch').value;
    //let archivedInvoer = document.getElementById('archiveLent').checked;

   // let changeUserInfo = {
  //      archived: archivedInvoer
   // }

    fetch("http://localhost:8080/lent/archive/"+changeUserIdInvoer, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }//,
        //body: JSON.stringify(changeUserInfo)
    })
    .then(response => {
        alert('Lent archived');
    })
    .catch(error => {
        alert('Could not archive lent. Please check input.');
    });
}