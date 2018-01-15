import * as tingle from 'tingle.js';
import './styles/styles.css';
import modalProps from './components/modal.js';

const date = new Date();
const yearOfBirth = 1994;

document
    .getElementById('year')
    .innerText = date.getFullYear();

let age = date.getFullYear() - yearOfBirth;

// decrease the age if september hasn't happened yet
if (date.getMonth() < 9) {
    age = age - 1;
}

// put the age on the page
document
    .getElementById('age')
    .innerText = age;

const elementSelectors = ['myreads', 'readables', 'contactbook', 'crud'];

const myReads = document.getElementById(elementSelectors[0]);
const readables = document.getElementById(elementSelectors[1]);
const contactBook = document.getElementById(elementSelectors[2]);
const crud = document.getElementById(elementSelectors[3]);

const myReadsModal = new tingle.modal(modalProps);
const readablesModal = new tingle.modal(modalProps);
const contactBookModal = new tingle.modal(modalProps);
const crudModal = new tingle.modal(modalProps);

const buttons = [myReads, readables, contactBook, crud];
const modals = [myReadsModal, readablesModal, contactBookModal, crudModal];

const myReadsContent = `<h2>My Reads <a target="_blank" href="https://github.com/martinmckenna/udacity-my-reads">(GitHub)</a></h2><p>My Reads is a library app that allows you to move books between bookshelves (Read, currently reading, and want to read). Users can switch books between shelves by clicking on the book and selecting which shelf they would like to move it to. Users may also search for new books to add to either shelf.</p><p>This project was developed as a coursework assignment for Udacity, built with React and Typescript</p>`;

const readablesContent = `<h2>Readables <a target="_blank" href="https://github.com/martinmckenna/readables">(GitHub)</a></h2><p>Readables is a Reddit clone that allows for basic social networking features, such as adding, deleting, and editing posts. Each post is assigned to a category and can be viewed in their own specific category view.</p><p>This project was developed as a coursework assignment for Udacity, built with React, Redux, and Typescript</p>`;

const contactBookContent = `<h2>Contact Book <a target="_blank" href="https://github.com/martinmckenna/Contact-Book-App">(GitHub)</a></h2><p>Contact Book is an online contact book - pretty simple. App supports adding, deleting, and editing contacts. Users can also search through entered contacts.</p><p>This project was built with React, Meteor.js, and MongoDB</p>`;

const crudContent = `<h2>CRUD <a target="_blank" href="https://github.com/martinmckenna/crud">(GitHub)</a></h2><p>CRUD app is just a create, update, destroy app. Users may also search entries - pretty straightforward. Mainly built because I wanted to see how hard PHP/MySQL was.</p><p>This project was developed with PHP and MySQL</p>`;

const contentArray = [myReadsContent, readablesContent, contactBookContent, crudContent];

modals.forEach((currentVal, index, array) => {
    console.log(currentVal);
    currentVal.setContent(contentArray[index]);
    buttons[index].addEventListener('click', () => {
        currentVal.open();
    })
});