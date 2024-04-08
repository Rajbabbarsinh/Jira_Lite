let addCardBtn = document.querySelector("#addCard");
let todoContainer = document.querySelector("#todo");

addCardBtn.addEventListener("click", addTask);
let count = 1000000


function addTask(){
    let card = document.createElement("div");
    card.id =`card-${count++}`
    card.className = "card";
    card.innerText = "Test Card";
    card.setAttribute("contenteditable", "true");
    
    // Allow Drag
    card.setAttribute("draggable", "true")
    todoContainer.append(card)

    // Pointer will be in editable zone automatically
    card.focus();


// Step 1 : Start the Dragging

// Drag Start

card.addEventListener("dragstart", (eventDetails) =>{
    let draggedCard = eventDetails.target
    eventDetails.dataTransfer.setData("text/plain", draggedCard.id)
    draggedCard.style.opacity = 0.5;
})

// Drag End

card.addEventListener("dragend", (eventDetails) => {
    let draggedCard = eventDetails.target
    draggedCard.style.opacity = 1;
})

// 1. Drop
// 2. dragEnter
// 3. dragover


let todo = document.querySelector("#todo");
let progress = document.querySelector("#progress");
let done = document.querySelector("#done");

// Let's Store them in Array (we r performing same event)

let dragEvents = ["dragover","dragenter","drop"];


dragEvents.forEach((dropEvent) => { //dragover
     let columns = document.querySelectorAll(".column");
     for(let c of columns){ // todo, progress, done
        c.addEventListener(dropEvent, (eventDetails) =>{
            eventDetails.preventDefault()

if (dropEvent == "drop"){
    
    // Get that ID of a card that has been dragged here.

    let cardID =eventDetails.dataTransfer.getData("text/plain");
    let draggedCard = document.querySelector(`#${cardID}`);
    let currentColumn = eventDetails.target;
    currentColumn.append(draggedCard);

}            
})
 }
})
}
