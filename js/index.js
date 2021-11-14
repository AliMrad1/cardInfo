console.log("js file is excuting");
var nav = document.getElementById('nav'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY >= 80) { // Just an example
        nav.style.backgroundColor = '#ddddff'; // or default color
    } else {
        nav.style.backgroundColor = 'transparent';
    }
});