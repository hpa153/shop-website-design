/*
    Function to open search container
*/
function search() {
    // Retrieve element
    document.querySelector(".search").classList.toggle("show");
    
    if (document.querySelector(".search").classList.contains("show")) {
        document.querySelector(".search").style.position = "relative";
    } else {
        document.querySelector(".search").style.position = "absolute";
    }
}

/*
    Function to display arrow for moving to top when scrolled down a certain space
*/
    // Retrieve html element
    var arrowToTop = document.getElementById("to-top");

    // Create function
    var appearByScroll = function() {
        // Assign the vertical scroll line to a variable
        var scrollHeight = window.scrollY;

        // If the IDBCursorWithValue, in pixels, exceed a certain value, the retrieved html element will show up
        if (scrollHeight >= 750) {
            arrowToTop.style.opacity = "1";
            arrowToTop.style.transition = "0.6s ease-out";
        } else { // If value is less, the html element is hidden
            arrowToTop.style.opacity = "0";
            arrowToTop.style.transition = "0.6s ease-out";
        }
    }

    window.addEventListener("scroll", appearByScroll);

/*
    Function to display hidden menu
*/
function showMenu() {
    // Retrieve html element and toggle extra class
    var hiddenMenu = document.getElementById("hiddenMenu");
    var iconToSwitch = document.getElementById("switch-icon");

    // Add show class to display menu or remove it to hide menu
    hiddenMenu.classList.toggle("show");

    // Change menu button
    iconToSwitch.classList.toggle("fa-times");
}

/*
    Function to shift photos in slide and change the color of the dots, based on a counter
*/
// Initialize a counter
let slideIndex = 1;
// Retrieve html elements
let slide = document.querySelector('.cover-container');
let allSlides = document.querySelectorAll('.cover-container article');

let dot1 = document.getElementById("dot1");
let dot2 = document.getElementById("dot2");
let dot3 = document.getElementById("dot3");

// Retrieve width of an image in the slide
let size = allSlides[0].clientWidth;

// Create event listeners for each "dot" element
dot1.addEventListener("click", function() {
    if (slideIndex === 2) {
        // Change counter according to the dot
        slideIndex = 1;

        // Call function to shift the slide
        shift(slideIndex);

        // Call function to change color of dots, corresponding to current slide
        activateDot(dot1, dot2);
    } else if (slideIndex === 3) {
        slideIndex = 1;
        shift(slideIndex);
        activateDot(dot1, dot3);
    } 
})

dot2.addEventListener("click", function() {
    if (slideIndex === 1) {
        slideIndex = 2;
        shift(slideIndex);
        activateDot(dot2, dot1);
    } else if (slideIndex === 3) {
        slideIndex = 2;
        shift(slideIndex);
        activateDot(dot2, dot3);
    }
})

dot3.addEventListener("click", function() {
    if (slideIndex === 1) {
        slideIndex = 3;
        shift(slideIndex);
        activateDot(dot3, dot1);
    } else if (slideIndex === 2) {
        slideIndex = 3;
        shift(slideIndex);
        activateDot(dot3, dot2);
    }
})

/*
    Function to shift slide
    Takes in a counter to translate the position accordingly
*/
function shift(counter) {
    // If counter is 1, no shift is done
    if (counter === 1) {
        slide.style.transform = 'translateX(0px)';
    } else if (counter === 2) { // If counter is 2, slide is shift an amount equal to the size of 1 photo
        slide.style.transform = 'translateX(' + (-size) + 'px)';
    } else { // Otherwise, slide is shift an amount twice to the size of 1 photo
        slide.style.transform = 'translateX(' + (-size * 2) + 'px)';
    }
    slide.style.transition = "transform 0.4s ease-in-out";
}

/*
    Function to switch color of dots by adding and removing the "current" class
*/
function activateDot(firstDot, secondDot) {
    firstDot.classList.add("current"); // Add "current" class to new dot
    secondDot.classList.remove("current"); // Remove "current" class from previous dot
}

/*
    Function to shift products slide
*/
// Retrieve html elements
const slideContainer = document.querySelector(".item-slide");
const slides = document.querySelectorAll(".item-slide section");

let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

// Initialize a counter
let counter = 0;

// Retrieve width of an item in the slide
let itemSize = slides[0].clientWidth;

function nextSlide() {
    // If counter reaches 7, return and disable function to avoid sliding out of range
    if (counter > 6 ){
        return;
    }
    counter++;

    // Move slide based on counter
    slideContainer.style.transform = 'translateX(' + (-itemSize * counter) + 'px)';
    slideContainer.style.transition = "transform 0.4s ease-in-out";

    // Call function to show and hide buttons
    showButtons();
}

function previousSlide() {
    // If counter reaches 0, return and disable function to avoid sliding out of range
    if(counter < 1 ){
        return;
    }
    counter--;

    // Move slide based on counter
    slideContainer.style.transform = 'translateX(' + (-itemSize * counter) + 'px)';
    slideContainer.style.transition = "transform 0.4s ease-in-out";

    // Call function to show and hide buttons
    showButtons();
}

/*
    Function to show and hide buttons by reachng first and last slide
*/
function showButtons() {
    // If counter has reached the last item, next button will be hidden
    if (counter === 7) {
        nextBtn.style.visibility = "hidden";
        nextBtn.style.transition = "0s";
    } else if (counter === 0) { // If counter has reached the first item, previous button will be hidden
        prevBtn.style.visibility = "hidden";
        prevBtn.style.transition = "0s";
    }
    
    // If counter moves back from last item, next button will be visible again
    if (counter === 6) {
        nextBtn.style.visibility = "visible";
        nextBtn.style.transition = "0s";
    } else if (counter === 1) { // If counter moves forward from first item, previous button will be visible again
        prevBtn.style.visibility = "visible";
        prevBtn.style.transition = "0s";
    }
}

// Event on screen size change to get new slide sizes and set position of slides
window.onresize = function() {
    // Get new slide sizes
    size = allSlides[0].clientWidth;
    itemSize = slides[0].clientWidth;

    // Set slides to current position with new sizes
    shift(slideIndex);
    slideContainer.style.transform = 'translateX(' + (-itemSize * counter) + 'px)';
}