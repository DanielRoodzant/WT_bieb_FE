function registerUser() {
    // Formulier uitlezen
    let firstNameInvoer = document.getElementById('firstNameReg').value;
    let lastNameInvoer = document.getElementById('lastNameReg').value;
    let emailInvoer = document.getElementById('emailReg').value;
    let passwordInvoer = document.getElementById('passwordReg').value;
    let adminInvoer = document.getElementById('adminReg').checked;

    let newUser = {
        firstName: firstNameInvoer,
        lastName: lastNameInvoer,
        email: emailInvoer,
        password: passwordInvoer,
        admin: adminInvoer
    }

    fetch("http://localhost:8080/user/register", {
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
    let userIdInvoer = document.getElementById('userIdDel').value;

    fetch("http://localhost:8080/user/delete/"+userIdInvoer, {
        method: 'DELETE'
        
    })
    .then(response => {
        alert('User deleted');
    })
    .catch(error => {
        alert('Could not delete user. Please check input.');
    });
}

function changeUser() {
    // Formulier uitlezen
    let changeUserIdInvoer = document.getElementById('userIdCha').value;
    let firstNameInvoer = document.getElementById('firstNameCha').value;
    let lastNameInvoer = document.getElementById('lastNameCha').value;
    let emailInvoer = document.getElementById('emailCha').value;
    let passwordInvoer = document.getElementById('passwordCha').value;

    let changeUserInfo = {
        firstName: firstNameInvoer,
        lastName: lastNameInvoer,
        email: emailInvoer,
        password: passwordInvoer,
    }

    fetch("http://localhost:8080/user/update/"+changeUserIdInvoer, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(changeUserInfo)
    })
    .then(response => {
        alert('User changed');
    })
    .catch(error => {
        alert('Could not change user. Please check input.');
    });
}

function show(data) {
    let userTableHtml =
        `<tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Password</th>
                <th>Admin?</th>
             </tr>`;

    // Loop to access all rows 
    for (let r of data) {
        userTableHtml += `<tr> 
                <td>${r.userId} </td>
                <td>${r.firstName}</td>
                <td>${r.lastName}</td>
                <td>${r.email}</td>
                <td>${r.password}</td>
                <td>${r.admin}</td>
            </tr>`;
    }

    // Setting innerHTML as tab variable
    document.getElementById("users").innerHTML = userTableHtml;
}

function getapi() {
    fetch("http://localhost:8080/user")
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

function anonymizeUser() {
    let changeUserIdInvoer = document.getElementById('userIdDel').value;

    let changeUserInfo = {
        firstName: "Deleted",
        lastName: "User",
        email: "None",
        password: "None",
    }

    fetch("http://localhost:8080/user/update/"+changeUserIdInvoer, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(changeUserInfo)
    })
    .then(response => {
        alert('User deleted');
    })
    .catch(error => {
        alert('Could not delete user. Please check input.');
    });
}