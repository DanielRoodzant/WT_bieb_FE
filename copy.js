function registerCopy() {
    // Formulier uitlezen
    let bookIdInvoer = document.getElementById('bookIdReg').value;
    let copyNrInvoer = document.getElementById('copyNrReg').value;
    //let Invoer = document.getElementById('isbnReg').value;

    let newCopy = {
        bookId: bookIdInvoer,
        copyNr: copyNrInvoer
    }

    fetch("http://localhost:8080/copy/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCopy)
    })
    .then(response => {
        alert('Copy registered');
    })
    .catch(error => {
        alert('Could not register copy. Please check input.');
    });
}

function deleteCopy() {
    // Formulier uitlezen
    let copyIdInvoer = document.getElementById('copyIdDel').value;


    fetch("http://localhost:8080/copy/delete/"+copyIdInvoer, {
        method: 'DELETE'
        
    })
    .then(response => {
        alert('Copy deleted');
    })
    .catch(error => {
        alert('Could not delete Copy. Please check input.');
    });
}

function show(data) {
    let copyTableHtml =
        `<tr>
                <th>Id</th>
                <th>book id</th>
                <th>copy Nr</th>
             </tr>`;

    // Loop to access all rows 
    for (let r of data) {
        copyTableHtml += `<tr> 
                <td>${r.copyId} </td>
                <td>${r.bookId}</td>
                <td>${r.copyNr}</td>
            </tr>`;
    }

    // Setting innerHTML as tab variable
    document.getElementById("copy").innerHTML = copyTableHtml;
}

function getapi() {
    fetch("http://localhost:8080/copy")
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
