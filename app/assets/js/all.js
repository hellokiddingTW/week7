import lax from 'lax.js';


window.onload = function() {
  lax.setup() // init

  const updateLax = () => {
    lax.update(window.scrollY)
    window.requestAnimationFrame(updateLax)
  }

  window.requestAnimationFrame(updateLax)
}

console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
});