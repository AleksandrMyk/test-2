'use strict';
import data from './data.js';

const info = document.querySelectorAll('#userInfo');
const added = document.querySelector('#added');
const age = document.querySelector('#age');
const status = document.querySelector('#status');
const work = document.querySelector('#work');
const educ = document.querySelector('#educ');
const user = document.querySelector('#user');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const box1 = document.querySelector('.section-box-one');
const box2 = document.querySelector('.section-box-two');
// const close = document.querySelector('#close');

// close.addEventListener('click', closeBox());

// function closeBox() {
//   box1.classList.add('section-box-one');
//   box2.classList.add('hiden');
// }

info.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    showBox();
    insertData(event);
  });
});

function showBox() {
  box1.classList.remove('section-box-one');
  box2.classList.remove('hiden');
}

function insertData(event) {
  const idToFind = event.target.dataset.id;
  const dataToFind = data.find(i => i.id === idToFind);

  added.textContent = Object.values(dataToFind.added).join('');
  age.textContent = Object.values(dataToFind.age).join('');
  status.textContent = Object.values(dataToFind.status).join('');
  work.textContent = Object.values(dataToFind.work).join('');
  educ.textContent = Object.values(dataToFind.educ).join('');
  phone.textContent = Object.values(dataToFind.phone).join('');
  email.textContent = Object.values(dataToFind.email).join('');
  user.textContent = Object.values(event.target.dataset.name).join('');

}
