const date = new Date();
const yearOfBirth = 1994

document
    .getElementById('year')
    .innerText = date.getFullYear();

let age = date.getFullYear() - yearOfBirth;

if (date.getMonth() < 9) {
    age = age - 1;
}

document.getElementById('age').innerText = age;