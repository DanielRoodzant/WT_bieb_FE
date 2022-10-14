function showUser(data) {
    document.getElementById("firstName").innerHTML = data.firstName;
    document.getElementById("lastName").innerHTML = data.lastName;
    document.getElementById("email").innerHTML = data.email;
    document.getElementById("password").innerHTML = data.password;
    document.getElementById("admin").innerHTML = data.admin;
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

function showLent(data) {
    let lentTableHtml =
        `<tr>
                <th>lentId</th>
                <th>userId</th>
                <th>copyId</th>
                <th>date</th>
             </tr>`;

    // Loop to access all rows 
for (let r of data) {
    lentTableHtml += `<tr> 
            <td>${r.lentId} </td>
            <td>${r.userId}</td>
            <td>${r.lentIdcopy}</td>
            <td>${r.date}</td>
        </tr>`;
}

    // Setting innerHTML as tab variable
    document.getElementById("lents").innerHTML = lentTableHtml;
}

function getLentData() {
    let lentIdInvoer = document.getElementById('userIdGet').value;
    
        fetch("http://localhost:8080/lent/user/"+lentIdInvoer)
            .then(response => response.json())
            .then(a => {
                console.log('response', a);
                showLent(a);
            })
            .catch(error => {
                console.log('error', error);
                // handle the error
            });
    }

