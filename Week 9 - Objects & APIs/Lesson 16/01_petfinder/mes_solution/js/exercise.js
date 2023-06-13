function selectPet(petType){

    console.log(petType);

    // Get the specific pet data set
    const thisPetData = petData[petType];
    console.log(thisPetData);

    // Set the title
    document.querySelector(".petDisplayName").innerText = thisPetData.displayName;



    // Empty the specification data

    let petSpecs = "";

    // Add the space required, size, weight
    petSpecs += `<dt>Size</dt>
    <dd>${thisPetData.size}</dd>
    <dt>Space Required</dt>
    <dd>${thisPetData.spaceRequired}</dd>
    <dt>Weight</dt>
    <dd>${thisPetData.weight}</dd>`
 
    // Add logic to add the trainability and lap size images
    petSpecs += `<dt>Trainable</dt>`
    if(thisPetData.trainability){
        petSpecs+=`<dd><img src="img/200px-Gnome-emblem-default.svg.png" alt="Trainable" class="checkmark"></img></dd>`;
    }
    else {
        petSpecs+=`<dd><img src="img/200px-Gnome-emblem-unreadable.svg.png" class="checkmark" alt="Not Trainable"></img></dd>`;
    };

    petSpecs += `<dt>Fits on Lap</dt>`
    if(thisPetData.fitsOnLap){
        petSpecs+=`<dd><img src="img/200px-Gnome-emblem-default.svg.png" alt="Fits on Lap" class="checkmark"></img></dd>`;
    }
    else {
        petSpecs+=`<dd><img src="img/200px-Gnome-emblem-unreadable.svg.png" class="checkmark" alt="Does not Fit on Lap"></img></dd>`;
    };

    // Add the foods (may require loop)
    petSpecs +=`<dt>Foods</dt><dd><ul>`;
    for(let i=0; i<thisPetData.foods.length; i++){
        petSpecs+=`<li>${thisPetData.foods[i]}</li>`
    }
    petSpecs +=`</ul></dd>`;

    document.querySelector(".petsDataSpecs").innerHTML = petSpecs;
   

    // Update the images
    // Set the big image to the first image in images
        // Set the src
        document.querySelector('.photoLarge').setAttribute('src', thisPetData.images[0]['img']);

        // Set the alt 
        document.querySelector('.photoLarge').setAttribute('alt', thisPetData.images[0]['alt']);

    // Create the Gallery
        let thumbSet = '';
        //For each image 
        for(let i=0; i<thisPetData.images.length; i++){
            // Create the HTML (a + img)
            thumbSet += `<a href="${thisPetData.images[i]['img']}"><img class="photoThumb" alt="${thisPetData.images[i]['alt']}" src="${thisPetData.images[i]['thumb']}"/></a>`;
        }

        document.querySelector('.thumbHaus').innerHTML = thumbSet;


        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)

        // Select the thumbnails
        let thumbElements = document.querySelectorAll('.thumbHaus a');

        // Loop through the thumbnails 
        for(let i=0; i<thumbElements.length;i++){
            // Add click event 
            thumbElements[i].addEventListener('click', function(e){
                // Stop the link from executing
                e.preventDefault();

                // Update the big image src
                document.querySelector('.photoLarge').setAttribute('src', this.getAttribute('href'));

                // Update the big image alt
                document.querySelector('.photoLarge').setAttribute('alt', this.querySelector('img').getAttribute('alt'));

            });
        }
    // Empty the Ideal For
    document.querySelector(".idealFor").innerHTML="";

    // Insert the ideal for
    for(let i=0; i<thisPetData.idealOwner.length;i++){
        let newEle = document.createElement('li');
        newEle.innerText = thisPetData.idealOwner[i];
        document.querySelector('.idealFor').append(newEle);
    }

    // Empty the Adoption Groups
    document.querySelector(".adoptionGroups").innerHTML="";

    // Add the Adoption Groups
    for(let i=0; i<thisPetData.adoption.length;i++){
        let newEle = document.createElement('li');
        newEle.innerHTML = `<a href="${thisPetData.adoption[i]['url']}">${thisPetData.adoption[i]['name']}</a>`;
        document.querySelector('.adoptionGroups').append(newEle);
    }
}// end selectPet



document.addEventListener('DOMContentLoaded', function(event) {

    // Initial value
    selectPet( document.querySelector("#petType").value);

    //Update whenever a new value is picked
    document.querySelector("#petType").addEventListener('change',function(){
        var petType = this.value;
        selectPet(petType);
    });
});





