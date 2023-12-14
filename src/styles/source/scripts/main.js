let k = document.getElementById('k');
let o = document.getElementById('o');
let block = document.getElementById('city-switcher');

let btn = document.getElementById('city-switcher-border');
let p = document.getElementById('p');

block.addEventListener('mouseenter',  () => {
    p.classList.add('active');
});
block.addEventListener('mouseleave',  () => {
    p.classList.remove('active');
});

o.addEventListener('click',  () => {
    // switch values of k and o
    let temp = k.innerHTML;
    k.innerHTML = o.innerHTML;
    o.innerHTML = temp;

    //p.classList.remove('active');
});

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('nav-content').classList.add('fixed-top');
            document.getElementById('logo-nav').style.display = 'flex';

        } else {
            document.getElementById('logo-nav').style.display = 'none';
            document.getElementById('nav-content').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        } 
    });
  }); 
  