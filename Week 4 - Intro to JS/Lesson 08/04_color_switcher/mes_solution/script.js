// When the #grayButton is clicked, the color scheme of the page should change to more of a "dark mode" feel, with gray backgrounds and white text throughout.
// The #whiteButton should bring things back to the "light mode" color scheme with white backgrounds and dark text
// Try to do this by setting styles (.style)
// Remember to try one step at a time, testing each stage as you go!

// DEFINE:
//  a function that turns on the gray scheme
    function setGrayScheme(){
        let body = document.querySelector("body");
        //set the body background
        body.style.backgroundColor = 'gray';
        //set the text color 
        body.style.color = 'white';
    }
    
//  a function that turns on the white scheme
    function setWhiteScheme(){
        let body = document.querySelector("body");
        //set the body background
        body.style.backgroundColor = 'white';
        //set the text color 
        body.style.color = 'black';
    }

// OBSERVE:
// create objects for two buttons
let grayButton = document.getElementById("grayButton");
let whiteButton = document.getElementById("whiteButton");

// INVOKE:
// trigger functions when you click on grey
// trigger functions when you click on white 
grayButton.addEventListener('click', setGrayScheme);
whiteButton.addEventListener('click', setWhiteScheme);
