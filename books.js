function registerBook() {
    // Formulier uitlezen
    let titleInvoer = document.getElementById('title').value;
    let authorInvoer = document.getElementById('author').value;
    let isbnInvoer = document.getElementById('isbn').value;

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
        alert('Could not register Book. Please check input.');
    });
}

