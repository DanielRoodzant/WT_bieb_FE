function registerBook() {
    // Formulier uitlezen
    let titleInvoer = document.getElementById('titleReg').value;
    let authorInvoer = document.getElementById('authorReg').value;
    let isbnInvoer = document.getElementById('isbnReg').value;

    let newBook = {
        title: titleInvoer,
        author: authorInvoer,
        isbn: isbnInvoer
    }

    fetch("http://localhost:8080/book/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBook)
    })
    .then(response => {
        alert('Book registered');
    })
    .catch(error => {
        alert('Could not register book. Please check input.');
    });
}

function deleteBook() {
    // Formulier uitlezen
    let bookIdInvoer = document.getElementById('bookIdDel').value;


    fetch("http://localhost:8080/book/delete/"+bookIdInvoer, {
        method: 'DELETE'
        
    })
    .then(response => {
        alert('Book deleted');
    })
    .catch(error => {
        alert('Could not delete book. Please check input.');
    });
}

function updateBook() {
    // Formulier uitlezen
    let bookIdInvoer = document.getElementById('bookIdUpd').value;
    let titleInvoer = document.getElementById('titleUpd').value;
    let authorInvoer = document.getElementById('authorUpd').value;
    let isbnInvoer = document.getElementById('isbnUpd').value;

    let newBook = {
        title: titleInvoer,
        author: authorInvoer,
        isbn: isbnInvoer
    }

    fetch("http://localhost:8080/book/update/"+bookIdInvoer, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBook)
    })
    .then(response => {
        alert('Book updated');
    })
    .catch(error => {
        alert('Could not update book. Please check input.');
    });
}

function show(data) {
    let bookTableHtml =
        `<tr>
                <th>ID</th>
                <th>Titel</th>
                <th>Auteur</th>
                <th>ISBN</th>
             </tr>`;

    // Loop to access all rows 
    for (let r of data) {
        bookTableHtml += `<tr> 
                <td>${r.bookId} </td>
                <td>${r.title}</td>
                <td>${r.author}</td>
                <td>${r.isbn}</td>
            </tr>`;
    }

    // Setting innerHTML as tab variable
    document.getElementById("books").innerHTML = bookTableHtml;
}

function getapi() {
    fetch("http://localhost:8080/book")
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