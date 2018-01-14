import * as tingle from 'tingle.js';
import './styles.css';
import modalProps from './components/modal.js';

const date = new Date();
const yearOfBirth = 1994;

document
    .getElementById('year')
    .innerText = date.getFullYear();

let age = date.getFullYear() - yearOfBirth;

if (date.getMonth() < 9) {
    age = age - 1;
}

document
    .getElementById('age')
    .innerText = age;

const elementSelectors = ['myreads', 'readables', 'contactbook', 'dictionarydx', 'crud'];

const myReads = document.getElementById(elementSelectors[0]);
const readables = document.getElementById(elementSelectors[1]);
const contactBook = document.getElementById(elementSelectors[2]);
const dictionary = document.getElementById(elementSelectors[3]);
const crud = document.getElementById(elementSelectors[4]);

let myReadsModal,
    readablesModal,
    contactBookModal,
    dictionaryModal,
    crudModal;
myReadsModal = readablesModal = contactBookModal = dictionaryModal = crudModal = new tingle.modal(modalProps);

const buttons = [myReads, readables, contactBook, dictionary, crud];
const modals = [myReadsModal, readablesModal, contactBookModal, dictionaryModal, crudModal];

modals.forEach((currentVal, index, array) => {
    currentVal.setContent(`<h2>Hello World</h2><p>This project was the o This project was the one This project was the one This project was the one This project was the one This project was the one This project was the one v This project was the one v v This project was the one ne ThiThis project was the one This project was the one This project was the one This project was the one This project was the one This project was the one This project was the one This project was the one This project was the one This project was the one v v This project was the one v This project was the one This project was the one This project was the ones project was the one This project was the one This prThis project was the one This project was the one This project was the one This project was the one This project was the one This project was the oneoject was the one</p>`);
    buttons[index].addEventListener('click', () => {
        currentVal.open();
    })
});