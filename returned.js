function registerReturned() {
    // Formulier uitlezen
    let returnedIdInvoer = document.getElementById('returnedIdReg').value;
    let userIdInvoer = document.getElementById('userIdReg').value;
    let bookIdInvoer = document.getElementById('bookIdReg').value;
    let copyInvoer = document.getElementById('copyReg').value;
    let dateInvoer = document.getElementById('dateReg').value;

    let newReturned = {
        returnedId: returnedIdInvoer,
        userId: userIdInvoer,
        bookId: bookIdInvoer,
        copy: copyInvoer,
        date: dateInvoer,
    }

    fetch("http://localhost:8080/returned/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newReturned)
    })
    .then(response => {
        alert('Returned registered');
    })
    .catch(error => {
        alert('Could not register returned. Please check input.');
    });
}

function deleteReturned() {
    // Formulier uitlezen
    let returnedIdInvoer = document.getElementById('returnedIdDel').value;


    fetch("http://localhost:8080/returned/delete/"+returnedIdInvoer, {
        method: 'DELETE'
        
    })
    .then(response => {
        alert('Returned deleted');
    })
    .catch(error => {
        alert('Could not delete returned. Please check input.');
    });
}

function updateReturned() {
    // Formulier uitlezen
    let returnedIdInvoer = document.getElementById('returnedIdUpd').value;
    let userIdInvoer = document.getElementById('userIdUpd').value;
    let bookIdInvoer = document.getElementById('bookIdUpd').value;
    let copyInvoer = document.getElementById('copyUpd').value;
    let dateInvoer = document.getElementById('dateUpd').value;

    let newReturned = {
        returnedId: returnedIdInvoer,
        userId: userIdInvoer,
        bookId: bookIdInvoer,
        copy: copyInvoer,
        date: dateInvoer,
    }

    fetch("http://localhost:8080/returned/update/"+returnedIdInvoer, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newReturned)
    })
    .then(response => {
        alert('Returned updated');
    })
    .catch(error => {
        alert('Could not update returned. Please check input.');
    });
}
//lijn 88 checken-->Archived
function show(data) {
    let returnedTableHtml =
        `<tr>
                <th>returnedId</th>
                <th>userId</th>
                <th>bookId</th>
                <th>copy</th>
                <th>date</th>
                <th>Archived</th>
             </tr>`;

    // Loop to access all rows 
    for (let r of data) {
        returnedTableHtml += `<tr> 
                <td>${r.returnedId} </td>
                <td>${r.userId}</td>
                <td>${r.bookId}</td>
                <td>${r.copy}</td>
                <td>${r.date}</td>
                <td>${r.archived}</td>
            </tr>`;
    }

    // Setting innerHTML as tab variable
    document.getElementById("returneds").innerHTML = returnedTableHtml;
}

function getapi() {
    fetch("http://localhost:8080/returned")
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

function archiveReturneds() {
    let changeUserIdInvoer = document.getElementById('returnedIdArch').value;
    //let archivedInvoer = document.getElementById('archiveReturned').checked;

   // let changeUserInfo = {
  //      archived: archivedInvoer
   // }

    fetch("http://localhost:8080/returned/archive/"+changeUserIdInvoer, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }//,
        //body: JSON.stringify(changeUserInfo)
    })
    .then(response => {
        alert('Returned archived');
    })
    .catch(error => {
        alert('Could not archive returned. Please check input.');
    });
}