
/* W05: Programming Tasks */

/* Declare and initialize global variables */
// Declare a const variable named templesElement that references the HTML div element that eventually will be populated with temple data
let templesElement = document.querySelector("#temples");
// Declare a global empty array variable to store a list of temples named templeList.
let templeList = [];
/* async displayTemples Function */
// Declare a function expression using const named displayTemples that uses an arrow function to accept a list of temples as an array argument
let displayTemples = (temples) => {
     // Process each temple in the temple array using a forEach method and do the following for each temple item
    temples.forEach(temple => {
        let articleElement = document.createElement('article'); // creating <article> in html
        let h3Element = document.createElement('h3'); // create the tag <h3> in html
        h3Element.textContent = temple.templeName;  
        let imageElement = document.createElement('img');
        imageElement.src = temple.imageUrl;
        imageElement.alt = temple.location;

        articleElement.appendChild(h3Element);  // apending the children elements to <article>
        articleElement.appendChild(imageElement);

        templesElement.appendChild(articleElement); 
    });
}
/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    var myOK = response.ok; {
        templeList = await response.json();
        displayTemples(templeList);
      }
}
/* reset Function */
// Declare a function expression named reset that clears all of the <article> elements from the templesElement
const reset = () => {
    templesElement.innerHTML = "";
}
/* sortBy Function */
const sortBy = () => {
    reset();
    const filter = document.querySelector("#sortBy").value; // The sorting is done using the id sortby

    switch (filter) {
        case "utah":
            const utahTemples = templeList.filter(temple => temple.location.includes('Utah'));
            displayTemples(utahTemples);
            break;
        case "notutah":
            const notUtahTemples = templeList.filter(temple => !temple.location.includes('Utah'));
            displayTemples(notUtahTemples);
            break;
        case "older":
            const olderTemples = templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break;
        case "all":
            displayTemples(templeList);
            break;
    }
}
getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });

