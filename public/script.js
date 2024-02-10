document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var numEmployees = document.getElementById('numEmployees').value;
    generateEmployees(numEmployees);
});

function generateEmployees(numEmployees) {
    fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ numEmployees: numEmployees })
    })
    .then(response => response.json())
    .then(data => {
        displayEmployees(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function displayEmployees(employees) {
    var output = document.getElementById('output');
    output.innerHTML = '';
    employees.forEach(employee => {
        var employeeInfo = document.createElement('div');
        employeeInfo.classList.add('employee-info');
        employeeInfo.innerHTML = `
            <p>Name: ${employee.firstName} ${employee.lastName}</p>
            <p>Title: ${employee.title}</p>
            <p>Salary: ${employee.salary}</p>
            <p>Email: ${employee.email}</p>
        `;
        output.appendChild(employeeInfo);
    });
}
