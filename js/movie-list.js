/**
 * @file movie-list.js
 * @description This file holds the class definition of our MovieList class
 * cSpell: ignore anytext
 * @author M Alzubi
 * @version 2.0.0
 * @since vs
 * getRow()
 */


/**
 * MovieList Class
 * This class has two properties and numerous methods
 * Look at the Readme.md file for a fill list of methods
 * @class MovieList
 * @property {string} rootId - This is the ID of the HTML element where the list is to be displayed
 * @property {Array} movieList - The array of movies to be displayed (and stored)
 * @property {function} refresh - This method to remove all current movies from the HTML document 
 * and display the current movie list
 * 
 */

class MovieList {
    constructor(rootId, movies) {
        this.rootId = rootId; // The HTML ID where the list is going
        this.movieList = movies; // This is the array of movies to be displayed
        this.refresh();
    }
    // Methods

    /**
     * @function movieRow
     * @param {string} title - The title of the movie
     * @param {number} year - The year the movie was released
     */

    movieRow(title, year){const rootElement = document.getElementById(this.rootId);
    const row = document.createElement('li');
    row.classList.add('row');
    row.textContent = `${title} (${year})`;
    rootElement.appendChild(row);
}
    // Get the parent element

    
    /**
     * Generate all rows in our movieList (Read)
     * This method will call movieRow for each element in our movieList
     * This will create all movies for our UI to display
     * @function genMovieList
     * 
     */
    genMovieList() {
        //loop through the movielist
        for (let i = 0; i < this.movieList.length; i++) {
            let movie = this.movieList[i];
            // Call the movieRow method
            console.log(movie);
            this.movieRow(movie.title, movie.year);
        }
    }

    /**
     * @function genMovieListSearchList
     * @description Generate a movie based on our search term
     * @param {Array} list - The list of movies to display based on the search term
     **/
    genMovieListSearchList(list) {
        //Remove all elements
        this.removeElements();
        // Generate a new list
        for (let i = 0; i < list.length; i++) {
            let movie = list[i];
            this.movieRow(movie.title, movie.year);
        }
    }
    /** 
     * @function removeElements
     *  */
    removeElements() {
        //Getting root ID
        const rootElement = document.getElementById(this.rootId);
        // Get all the elements with the class name of now
        const childNodes = document.getElementsByClassName('row');
        // How mnay children we have?
        const len = childNodes.length - 1;
        for (let i = len; i >= 0; i--) {
            //pull out the list child
            const child = childNodes[i];
            // Remove this child from the DOM
            rootElement.removeChild(child);
        }
    }
    /** 
     * @function getRow
      */

     /**
      * Call removeElements() method and 
      * call genMovieList() to add in the new list
      * @function refresh
      */
    refresh() {
        this.removeElements();
        this.genMovieList();
    }
    //CRUD - CREATE READ UPDATE DELETE
     /**
      * Adding a new movie to the movieList - CREATE
      * @function add
      * @param {string} title - The movie title
      * @param {number} year = The year the movie was released
      */
     add(title, year) {
        //Add a new movie to the end of the list
        this.movieList.push({ title: title, year: year});
        //Write use ES^ syntax .push({title, year})
     }
    
     /** 
      * @function update
      * @param {number} index - The index of hte movie to update
      * @param {string} title - The new movie title
      * @param {number} year 
      */
     update(index, title, year) {
        this.movieList[index].title = title;
        this.movieList[index].year = year;
        this.refresh();

     }

     /**
      * Delete a movie from the movieList - DELETE from CRUD
      * @function delete
      * @param {number} index - This is the index of hte movie from movieList
      */
     delete(index) {
        this.movieList.splice(index, 1);
        //Refresh
        this.refresh();
     }
     /**
      * @function sortA2Z
      */
     sotA2Z() {
        this.movieList.sort(function(a, b){
            return a.title.localCompare(b.title);
        });
        this.refresh();
     }
     /**
      * @function sortZ2A
      */
    sotZ2A() {
        this.movieList.sort(function(a, b){
            return a.title.localCompare(a.title);
        });
        this.refresh();
     }
     /**
      * @function search
      * @description Search the movielist titles for a partial match
      */
     search(nameString){ 
        let shortList = [];
        // Loop through the titles to see if the nameString is in a movieTitle
        for (movie of this.movieList) {
            //Check to see if namestring is in movie.title
            if(movie.title.includes(nameString)) {
                shortList.push(movie);
            }
        }
        // Call the genMovieSearchList
        this.genMovieSearchList(shortList);
     }
}