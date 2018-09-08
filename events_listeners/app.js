document.addEventListener('DOMContentLoaded', () => {
  console.log('js loaded');

// 1. DOM element that is going to fire the event
const button = document.querySelector('#my-button');

// 2. Add behaviour to the element
button.addEventListener('click', () => {
  console.log("button has been clicked");
})

})
