function registerBookLabel() {
    // Formulier uitlezen
    let nameInvoer = document.getElementById('nameReg').value;

    let newBookLabel = {
        name: nameInvoer
    }

    fetch("http://localhost:8080/bookLabel/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBookLabel)
    })
    .then(response => {
        alert('Book label registered');
    })
    .catch(error => {
        alert('Could not register book label. Please check input.');
    });
}

function deleteBookLabel() {
    // Formulier uitlezen
    let bookLabelIdInvoer = document.getElementById('bookLabelIdDel').value;


    fetch("http://localhost:8080/bookLabel/delete/"+bookLabelIdInvoer, {
        method: 'DELETE'
        
    })
    .then(response => {
        alert('Book label deleted');
    })
    .catch(error => {
        alert('Could not delete book label. Please check input.');
    });
}

function updateBookLabel() {
    // Formulier uitlezen
    let bookLabelIdInvoer = document.getElementById('bookLabelIdUpd').value;
    let nameInvoer = document.getElementById('nameUpd').value;

    let newBookLabel = {
        name: nameInvoer
    }

    fetch("http://localhost:8080/bookLabel/update/"+bookLabelIdInvoer, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBookLabel)
    })
    .then(response => {
        alert('Book label updated');
    })
    .catch(error => {
        alert('Could not update book label. Please check input.');
    });
}

function show(data) {
    let bookLabelTableHtml =
        `<tr>
                <th>ID</th>
                <th>Name</th>
             </tr>`;

    // Loop to access all rows 
    for (let r of data) {
        bookLabelTableHtml += `<tr> 
                <td>${r.bookLabelId} </td>
                <td>${r.name}</td>
            </tr>`;
    }

    // Setting innerHTML as tab variable
    document.getElementById("bookLabels").innerHTML = bookLabelTableHtml;
}

function getapi() {
    fetch("http://localhost:8080/bookLabel")
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
