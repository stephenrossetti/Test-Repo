const express = require('express');
const bodyParser = require('body-parser');
const random = require('random-name');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const titles = ['Manager', 'Developer', 'Designer', 'Analyst', 'Engineer'];

// Generate random email
function generateEmail(firstName, lastName) {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
}

// Generate random salary
function generateSalary() {
    return Math.floor(Math.random() * (100000 - 40000) + 40000);
}

// Generate random employees
function generateEmployees(numEmployees) {
    const employees = [];
    for (let i = 0; i < numEmployees; i++) {
        const firstName = random.first();
        const lastName = random.last();
        const title = titles[Math.floor(Math.random() * titles.length)];
        const salary = generateSalary();
        const email = generateEmail(firstName, lastName);
        employees.push({
            firstName,
            lastName,
            title,
            salary,
            email
        });
    }
    return employees;
}

// POST route for generating employees
app.post('/generate', (req, res) => {
    const numEmployees = parseInt(req.body.numEmployees);
    if (isNaN(numEmployees) || numEmployees < 1) {
        res.status(400).json({ error: 'Invalid number of employees' });
    } else {
        const employees = generateEmployees(numEmployees);
        res.json(employees);
    }
});

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static('public'));


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
