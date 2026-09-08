
//initialize container
const container = document.querySelector('.container');

    //creates grid  
    for (let i = 0; i < 256; i++) { 
        //creates a new div element 
        const newDiv = document.createElement("div");
        newDiv.style.width = (6.25) + "%";
        //adds new div element to container 
        container.append(newDiv); 
        }

//hovering event listener
const divs = document.querySelectorAll('.container div');

divs.forEach((div) => {
    //mouseover event listener to change background color of div to blue
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'blue';

        //reset button after x amount of time
        setTimeout(() => {
            div.style.backgroundColor  = '';
        }, 900); //resets background color after 0.9 seconds

    });

});


//new grid button
const newGridButton = document.querySelector('#new-grid');

newGridButton.addEventListener('click', () => {
    //prompt user for new grid size
    const newSize = prompt('Enter new grid size (1-100):');
    const size = parseInt(newSize);

    //validate input
    if (isNaN(size) || size < 1 || size > 100) {
        alert('Invalid input. Please enter a number between 1 and 100.');
        return;
    }

    //clear existing grid
    container.innerHTML = '';

    //create new grid based on user input
    for (let i = 0; i < size * size; i++) {
        const newDiv = document.createElement("div");
        newDiv.style.width = (100 / size) + "%";
        container.append(newDiv);
    }

    //update divs NodeList after creating new grid
    const divs = document.querySelectorAll('.container div');

    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {  
            div.style.backgroundColor = 'blue';

            setTimeout(() => {
                div.style.backgroundColor  = '';
            }, 900);
        });
    });
});
