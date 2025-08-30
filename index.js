const items = document.querySelectorAll('.services .transition');
const elems = document.querySelectorAll('.bienfits');
const products = document.querySelectorAll('.products .p');
const abouts = document.querySelectorAll('.about');

const observer = new IntersectionObserver ((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('inview');
        }
    });
} , { threshold: 0.5 } );

items.forEach(item =>
    observer.observe(item));
elems.forEach(elem =>
    observer.observe(elem));
products.forEach(product =>
    observer.observe(product));
abouts.forEach(about =>
    observer.observe(about));