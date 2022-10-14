function showUser(data) {
    document.getElementById("firstName").innerHTML = data.firstName;
    document.getElementById("lastName").innerHTML = data.lastName;
    document.getElementById("email").innerHTML = data.email;
    document.getElementById("password").innerHTML = data.password;
    document.getElementById("admin").innerHTML = data.admin;

    let userTableHtml =
        `<tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Password</th>
                <th>Admin?</th>
             </tr>`;

    // Fill columns
        userTableHtml += `<tr> 
                <td>${data.userId} </td>
                <td>${data.firstName}</td>
                <td>${data.lastName}</td>
                <td>${data.email}</td>
                <td>${data.password}</td>
                <td>${data.admin}</td>
            </tr>`;

    // Setting innerHTML as tab variable
    document.getElementById("userData").innerHTML = userTableHtml;
}

function getUserData() {
let userIdInvoer = document.getElementById('userIdGet').value;

    fetch("http://localhost:8080/user/"+userIdInvoer)
        .then(response => response.json())
        .then(a => {
            console.log('response', a);
            showUser(a);
        })
        .catch(error => {
            console.log('error', error);
            // handle the error
        });
}