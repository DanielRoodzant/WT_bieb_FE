function registerUser() {
    // Formulier uitlezen
    let firstNameInvoer = document.getElementById('firstName').value;
    let lastNameInvoer = document.getElementById('lastName').value;
    let emailInvoer = document.getElementById('email').value;
    let passwordInvoer = document.getElementById('password').value;
    let adminInvoer = document.getElementById('admin').checked;


    let newUser = {
        firstName: firstNameInvoer,
        lastName: lastNameInvoer,
        email: emailInvoer,
        password: passwordInvoer,
        admin: adminInvoer
    }

    fetch("http://localhost:8080/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => {
        alert('User registered');
    })
    .catch(error => {
        alert('Could not register user. Please check input.');
    });
}

function deleteUser() {
    // Formulier uitlezen
    let userIdInvoer = document.getElementById('userId').value;


    fetch("http://localhost:8080/delete/"+userIdInvoer, {
        method: 'DELETE'
        
    })
    .then(response => {
        alert('User deleted');
    })
    .catch(error => {
        alert('Could not delete user. Please check input.');
    });
}