function selectPet(petType){

    console.log(petType);

    // Get the specific pet data set
    const thisPetData = petData[petType];
    console.log(thisPetData);

    // Set the title
    document.querySelector(".petDisplayName").innerText = thisPetData.displayName;



    // Empty the specification data

    // Add the space required, size, weight
 
    // Add logic to add the trainability and lap size images


    // Add the foods (may require loop)
   

    // Update the images

  

        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)


    // Empty the ideal for

    // Insert the ideal for


    // Empty the Adoption Groups

    // Add the adoption groups


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





