let value = null;
let btnSubmit = document.querySelector('.btn-submit');
let acknowledgments = document.querySelector('.acknowledgments');
let cardContainer = document.querySelector('.card__container');
let selectedScore = document.querySelector('.selected__score');

// Identify the currently selected DOM element
document.addEventListener('click', () => {
    const focusedElement = document.activeElement;
    if (focusedElement.classList.contains('btn')) {
        // Retrieve the value of the button
        value = focusedElement.textContent;
    } else {
        value = null;
    }
});

// Add an event listener to the submit button
btnSubmit.addEventListener('click', () => {
    // Check if value is falsy, and if so, stop the execution of the code. Otherwise, display the acknowledgments
    if (!value) {
        return;
    }
    acknowledgments.style.display = 'block'; // show the acknowledgments
    cardContainer.style.display = 'none'; // hide the main card
    selectedScore.textContent = value; // display the selected score

    // After 2 secodns, hide the acknowledgments and show the main card again
    setTimeout(() => {
        acknowledgments.style.display = 'none'; // hide the acknowledgments
        cardContainer.style.display = 'block'; // show the main card
        // reset the value to null
        value = null;
    }, 2000);
});