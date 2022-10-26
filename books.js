function userAuth(){
    fetch("http://localhost:8080/book/status", {
        method: 'GET'
    })
    .then(response => {
        alert('Logged in succesfully.');
    })
    .catch(error => {
        alert('Incorrect credentials, please try again.');
    });
}

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
        alert('Boek is geregistreerd.');
    })
    .catch(error => {
        alert('Het boek kan niet worden geregistreerd. Controleer de invoer.');
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
        alert('Boek is geüpdated.');
    })
    .catch(error => {
        alert('Het boek kan niet worden geüpdated. Controleer de invoer.');
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
        alert('Boek gearchiveerd');
    })
    .catch(error => {
        alert('Het boek kon niet worden geärchiveerd. Controleer de invoer.');
    });
}

    //boeken zoeken
    function booksearch() {

        let zoektermWaarde= document.getElementById('searchbooktitle').value;
        
        let dto ={
            zoekterm: zoektermWaarde,
        }
    

    fetch("http://localhost:8080/book/search" ,{
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
        alert('Het boek dat je zoekt kan niet worden gevonden.');
    });


    }
