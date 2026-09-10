/**
 * @file app.js
 * @description This file contains the JavaScript for our movie app
 * It contains the movieList instance, the event functions and UI code.
 * 
 * @author M Alzubi
 * @version 3.1.0
 * @since v3
 * getData()
 * onUpIndexChange()
 * confirm code in the deleteClick()
 * Bound checking for getData() and deleteclick()
 */

/**
 * @global
 * @description The initial list of movies for our app
 */

let initialMovies = [
    {title: "The Shawshank Redemption", year: 1994 },
    {title: "The Godfather", year: 1972 },
    {title: "The Godfather: Part II", year: 1974 },
    {title: "The Dark Knight", year: 2008 },
    {title: "Krull", year: 1983 },
    {title: "The Last Starfigher", year: 1981 }
];


/**
 * @memberof MovieList
 * @instance movieList
 * @param {string} - The id of the element we want to have our movieList appear in
 * @param {Array} initialMovies - The array of movies in our movieList
 * @global
 * @description The movieList instance to keep track of our list of movies in the app
 */

let movieList = new MovieList(`list`, initialMovies);

const searchBtn = document.getElementById('searchBtn');
const sortA2ZBtn = document.getElementById('sortA2ZBtn');
const sortZ2ABtn = document.getElementById('sortZ2ABtn');
const addSubmit = document.getElementById('addSubmit');
const updateSubmit = document.getElementById('updateSubmit');
const deleteSubmit = document.getElementById('deleteSubmit');

// Add event handlers
searchBtn.addEventListener('click', searchClick);
sortA2ZBtn.addEventListener('click', a2zClick);
sortZ2ABtn.addEventListener('click', z2aClick);
addSubmit.addEventListener('click', addClick);
updateSubmit.addEventListener('click', updateClick);
deleteSubmit.addEventListener('click', deleteClick);


/**
 * search for a movie by partial title
 * @event Click#searchBtn
 * @function searchClick
 */
function searchClick() {
    let formElements = document.getElementsById('form-list-control').elements;
    let text = formElements["search-string"].value;
    movieList.search(text);
}

function a2zClick() {
    movieList.sortA2Z();
}

function z2aClick() {
    movieList.sortZ2A();
}

/**
 * @event click#addSubmit
 * @function addClick
 * @description add a new movie to the list
 */
function addClick(){
    //Get form from the DOM
    let formElements = document.getElementsById("form-add").elements;
    let title = formElements["title"].value;
    let year = Number(formElements["year"].value);

    movieList.add(title, Number(year));
}
function updateClick(){
    let formElements = document.getElementById("form-update").elements;
    let index = Number(formElements["index"].value -1);
    let title = formElements["title"].value;
    let year = Number(formElements["year"]).value);
    movieList.update(Number(index), title, Number(year));
}

function deleteClick() {
    let indexElement = document.getElementById("delIndex");
    let index = Number(indexElement.value);
    
}

// UI Javascript
/**
 * JavaScript function for opening the forms
 * @function openForm
 * @param {object} evt - the event object
 * @param {string} action - the name of the action being used
 */

function openForm(evt, action) {
    //declare variables
    let i, tabContent, tabLinks;
    // Get All elements that have the classname for tabcontent
    tabContent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabContent.length; i++) {
        //Set the display to none for all elements with this classname
        tabContent[i].style.display = 'none';
    }
    // get all elements that have the classname of tablinks
    tabLinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tabLinks.length; i++) {
        // Change the classlist to remove the active class
        tabLinks[i].className = tabLinks[i].className.replace("active", "");
    }
    // Show the current tab and add the active class to the button
    // that opened the tab
    document.getElementById(action).style.display = "block";
    evt.currentTarget.className += " active";
}

// End of our open form

// Open a tab by default
document.getElementById('defaultOpen').click();

/**
 * @function showMessage
 * @param {string} message - the message to display
 * @param {string} colour - the colour of the message box background
 * @param {string} text - the colour of the text in the message box
 */
function showMessage(message, colour, text) {
    const msg = document.getElementById('msg');
    msg.style.display = "block";
    msg.textContent = message;
    msg.style.backgroundColor = colour;
    msg.style.color = text;
}