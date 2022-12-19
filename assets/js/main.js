// menu burger

let menu = document.querySelector('.burg');
let burger = document.getElementById('burger');
let first = document.querySelector('.firstS');
let ancre = document.querySelectorAll('ul li a')

burger.addEventListener('click', event => {
    // first.classList.toggle('test');
    menu.classList.toggle('full');
    
})

for (const lien of ancre) {
    lien.addEventListener('click', event => {
        menu.classList.remove('full');
        // first.classList.remove('test');
    })
}

// Carousel

let carou = document.querySelector('.pics');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let index = 0;

right.addEventListener('click', event => {
    event.preventDefault();
    index++;
    if (index > 4)
    {
        index = index - index;
        }
    carou.style.transform = `translate(-${index * 1280}px)`;
})

left.addEventListener('click', event => {
    event.preventDefault();
    index--;
    if (index < 0) {
        index = index + 5;
    }
    carou.style.transform = `translate(-${index * 1280}px)`;
})

// algorithme d'automatisation du Carousel

setInterval(function () {
    carou.style.transform = `translate(-${index * 1280}px)`;
    index++;
    if (index > 4) {
        index = index - index;
    }
}, 5000);