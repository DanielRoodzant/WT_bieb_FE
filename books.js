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
                <th>Archived</th>
             </tr>`;

    // Loop to access all rows 
    for (let r of data) {
        bookTableHtml += `<tr> 
                <td>${r.bookId} </td>
                <td>${r.title}</td>
                <td>${r.author}</td>
                <td>${r.isbn}</td>
                <td>${r.archived}</td>
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

function archiveBooks() {
    let changeUserIdInvoer = document.getElementById('bookIdArch').value;
    //let archivedInvoer = document.getElementById('archiveBook').checked;

   // let changeUserInfo = {
  //      archived: archivedInvoer
   // }

    fetch("http://localhost:8080/book/archive/"+changeUserIdInvoer, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }//,
        //body: JSON.stringify(changeUserInfo)
    })
    .then(response => {
        alert('Book archived');
    })
    .catch(error => {
        alert('Could not archive book. Please check input.');
    });
}

function booksearch() {
    // Zoek veld uitlezen
    let zoektermWaarde = document.getElementById('searchbooktitle').value;

    let dto = {
        zoekterm: zoektermWaarde,
    }

    fetch("http://localhost:8080/book/search", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dto)
    })
    .then(response => response.json())
    .then(books => {
        show(books);
    })
    .catch(error => {
        alert('Coudl not search books.');
    });
}