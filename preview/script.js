'use strict';

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('dsfs');
// };

const  delElement = (event) => {
    console.log(event.currentTarget);
    //event.target.remove();
    // btn.removeEventListener('mouseenter', delElement);
};

// btn.addEventListener('click', delElement);
// overlay.addEventListener('click', delElement);

btns.forEach(btn => {
    btn.addEventListener('click', delElement, {'once': true});
});

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
});