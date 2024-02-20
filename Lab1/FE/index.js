function fetchEmployees() {
  fetch('http://localhost:3000/api/v1/employee')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('dataTable')
      tableBody.innerHTML = ''
      const list = data.data
      list.forEach(item => {
        const row = document.createElement('tr')
        const idCell = document.createElement('td')
        idCell.textContent = item.id
        row.appendChild(idCell)

        const nameCell = document.createElement('td')
        nameCell.textContent = item.name
        row.appendChild(nameCell)

        const deleteCell = document.createElement('td')
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'deleteBtn');

        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell)

        tableBody.appendChild(row)

        deleteButton.id = item.id;
        deleteButton.addEventListener('click', deleteEmployee);
      })
    })
    .catch(error => console.error(error))
}

// TODO

var form = document.getElementById('employeeForm');
form.addEventListener('submit', createEmployee);



// TODO
function createEmployee(e) {
  // get data from input field
  // send data to BE
  // call fetchEmployees
  e.preventDefault();
  var DeleteButtons = document.getElementsByClassName('deleteBtn');
  let url = 'http://localhost:3000/api/v1/employee';
  let data = { id: document.getElementById('id').value, name: document.getElementById('name').value };

  for (var i = 0; i < DeleteButtons.length; i++) {
    if (DeleteButtons[i].id == data.id) {
      alert("ID already exists");
      return;
    }
  }
  console.log("click");

  console.log("data", data);
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(fetchEmployees).catch(error => console.error(error));

}

// TODO
function deleteEmployee(e) {
  // get id
  // send id to BE
  // call fetchEmployees
  console.log(e);
  const id = e.target.id;
  fetch(`http://localhost:3000/api/v1/employee/${id}`, {
    method: 'DELETE',
  }).then(fetchEmployees).catch(error => console.error(error));

  console.log(e.target.id);

  e.preventDefault();

  console.log("delete");

}

fetchEmployees()
