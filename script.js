
//initialize container
const container = document.querySelector('.container');

    //creates grid  
    for (let i = 0; i < 256; i++) { 
        //creates a new div element 
        const newDiv = document.createElement("div");
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