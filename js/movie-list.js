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
        for (let i = 0; this.movieList.length; i++) {
            let move = this.movieList[i];
            // Call the movieRow method
            this.movieRow(movie.title, movie.year);
        }
    }

    /**
     * @function genMovieListSearchList
     **/

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
     /**
      * @function add
      */

     /** 
      * @function update
      */

     /**
      * @function delete
      */

     /**
      * @function sortA2Z
      */

     /**
      * @function sortZ2A
      */

     /**
      * @function search
      */
}