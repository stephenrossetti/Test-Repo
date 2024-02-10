// Arrays of sample names for each part of the name
const firstNameList = [
    'Emma', 'Noah', 'Olivia', 'Liam', 'Ava', 'William', 'Sophia', 'Mason', 'Isabella', 'James',
    'Emily', 'Alexander', 'Charlotte', 'Michael', 'Abigail', 'Benjamin', 'Amelia', 'Ethan', 'Harper', 'Jacob',
    'Madison', 'Daniel', 'Elizabeth', 'Aiden', 'Sofia', 'Logan', 'Ella', 'Matthew', 'Avery', 'Lucas',
    'Mia', 'Jackson', 'Scarlett', 'David', 'Grace', 'Oliver', 'Chloe', 'Joseph', 'Riley', 'Gabriel',
    'Penelope', 'Samuel', 'Lily', 'Carter', 'Hannah', 'Sebastian', 'Aria', 'Henry', 'Aubrey', 'Owen',
    'Addison', 'Wyatt', 'Zoey', 'John', 'Natalie', 'Levi', 'Lillian', 'Isaac', 'Brooklyn', 'Jonathan',
    'Victoria', 'Jack', 'Evelyn', 'Julian', 'Eleanor', 'Leah', 'Dylan', 'Hazel', 'Christopher', 'Ellie',
    'Lincoln', 'Nora', 'Joshua', 'Maya', 'Colton', 'Savannah', 'Ryan', 'Audrey', 'Nicholas', 'Claire',
    'Nathan', 'Anna', 'Adam', 'Stella', 'Jaxon', 'Lucy', 'Jose', 'Paisley', 'Christian', 'Violet',
    'Landon', 'Aurora', 'Ian', 'Sadie', 'Tyler', 'Caroline', 'Eli', 'Madelyn', 'Brayden', 'Lydia'
];
const lastNameList = [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Martinez',
    'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
    'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson',
    'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores', 'Green',
    'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts', 'Gomez',
    'Phillips', 'Evans', 'Turner', 'Diaz', 'Parker', 'Cruz', 'Edwards', 'Collins', 'Reyes', 'Stewart',
    'Morris', 'Morales', 'Murphy', 'Cook', 'Rogers', 'Gutierrez', 'Ortiz', 'Morgan', 'Cooper', 'Peterson',
    'Bailey', 'Reed', 'Kelly', 'Howard', 'Ramos', 'Kim', 'Cox', 'Ward', 'Richardson', 'Watson', 'Brooks',
    'Chavez', 'Wood', 'James', 'Bennett', 'Gray', 'Mendoza', 'Ruiz', 'Hughes', 'Price', 'Alvarez', 'Castillo'
];

// Function to generate a random name
function generateRandomName() {
    const randomFirstNameIndex = Math.floor(Math.random() * firstNameList.length);
    const randomLastNameIndex = Math.floor(Math.random() * lastNameList.length);
    const randomFirstName = firstNameList[randomFirstNameIndex];
    const randomLastName = lastNameList[randomLastNameIndex];
    return `${randomFirstName} ${randomLastName}`;
}

// Example usage
for (let i = 0; i < 10; i++) {
    console.log(generateRandomName());
}