//wait for the DOM elements to load before executing
document.addEventListener('DOMContentLoaded', function(event) {

    // Create a function that runs whenever the submit button is clicked
    document.querySelector('#submit-btn').addEventListener('click', function(e){

        //prevent the submit button from refreshing the page
        e.preventDefault();
    
        //Create a variable called moodvalue and get the value of the #mood input
        let moodEntry = document.querySelector("#mood").value;
        
        //Correct for capitalization
        moodEntry = moodEntry.toLowerCase().trim();

        // if the user inputs excited / ecstatic / fantastic change the CSS class to 'excited'
        if(["excited", "ecstatic", "fantastic"].includes(moodEntry)) {
            document.querySelector(".moodring > div").setAttribute("class", "excited");
            console.log("excited");
        } 
        // if the user inputs happy/good/great change the CSS class to 'happy'
        else if(["happy", "good", "great"].includes(moodEntry)) {
            document.querySelector(".moodring > div").setAttribute("class", "happy");
            console.log("happy");
        }
        // if the user inputs bad/angry change the CSS class to 'bad'
        else if(["bad", "angry"].includes(moodEntry)) {
            document.querySelector(".moodring > div").setAttribute("class", "bad");
            console.log("bad");
        }
    });
});