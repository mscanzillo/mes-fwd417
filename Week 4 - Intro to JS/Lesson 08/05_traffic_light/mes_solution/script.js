// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...

// Function to turn all lights off
function turnOffLights() {
    // Turn off all the lights
    document.getElementById("stopLight").classList.remove("glow");
    document.getElementById("slowLight").classList.remove("glow");
    document.getElementById("goLight").classList.remove("glow");
}

// Function to turn stop on
function stopLight() {
   // turn off lights
    turnOffLights
    // Turn on one of the lights
    document.getElementById("stopLight").classList.toggle("glow");
}

// Function to turn slow on
function slowLight() {
    // turn off lights
     turnOffLights()
     // Turn on one of the lights
     document.getElementById("slowLight").classList.toggle("glow");
 }

// Function to turn go on
 function goLight() {
    // turn off lights
     turnOffLights()
     // Turn on one of the lights
     document.getElementById("goLight").classList.toggle("glow");
 }


let stopButton = document.getElementById("stopButton");
let slowButton = document.getElementById("slowButton");
let goButton = document.getElementById("goButton");

stopButton.addEventListener('click', stopLight);
slowButton.addEventListener('click', slowLight);
goButton.addEventListener('click', goLight);
