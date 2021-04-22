'use strict';

const id = document.querySelector('.id');
const pw = document.querySelector('.pw');
const btn = document.querySelector('.btn');
const label = document.querySelector('.label');

function timeOut() {
    label.classList.remove('warning');
}

btn.addEventListener('click', () => {
    if(id.value == '') {
        id.nextElementSibling.classList.add('warning');
        setInterval(timeOut, 1500);
    } else if(pw.value == '') {
        pw.nextElementSibling.classList.add('warning');
        setinterval(timeOut, 1500);
    }
})