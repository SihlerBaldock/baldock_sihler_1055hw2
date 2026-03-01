console.log("JavaScript File is linked");


// Variables
const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
let currentDraggedElement = null;
// add variable for reset button
//add variable for label box


//Added variables for reset button and label box because they will both be used when resetting the puzzle.
const reset = document.querySelector(".reset-btn");
const labelsBox = document.querySelector(".labels-box");


// Functions
function dragStart() {
    console.log("Started Dragging");
    // whatever the user is dragging, store it in currentDraggedElement
    currentDraggedElement = this;
}

function dragOver(e) {
    e.preventDefault();
    console.log("drag over called");
}

function dropped(e) {
    e.preventDefault();
    console.log("dropped");

    //prevent double drops here
    //if this dropzone has a child, don't let it drop
    //use a return statement

    //The first bug was already solved in class, but it involved adding this return statement so that only one draggable element can be placed into each drop zone, because previously multiple elements could be placed into the dropzones. The return statement below solved the bug:

    
    if(this.children.length>=1) {
        return;
    }


    //drop the piece
    this.appendChild(currentDraggedElement);

    //reset the reference
    currentDraggedElement = null;
}

//This function resets the puzzle, and the key is the appendChild, because it tells the browser to take the element inside of the drop zone and place it back into the labels box.
function resetPuzzle() {
    console.log("Reset Button Clicked");

    targetZones.forEach(zone => {
        if(zone.children.length > 0) {
            const label = zone.children[0];
            labelsBox.appendChild(label);
        }
    });

    currentDraggedElement = null;
}

// function reset() {
    //collect all the labels and put them back 
    //check all target zones / loop through them, see IF the dropzone has a label i it, if it does, add that label back to the pieces
    // labelBox.appendChild()



// Event Listeners
labels.forEach(label => {
    label.addEventListener("dragstart", dragStart)
});

targetZones.forEach(zone => {
    zone.addEventListener("dragover", dragOver);
    zone.addEventListener("drop", dropped);
});


//added an EventListener to tell the browser that when the reset button is clicked, call a function named resetPuzzle.
reset.addEventListener("click", resetPuzzle);


