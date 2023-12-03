/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Paul Arungwa";
const currentYear = 2023;
const profilePicture = 'images/profilepicture.jpg';

/* Step 3 - Element Variables */
let nameElement = document.getElementById('name');
let foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');
let imageElement = document.querySelector('picture img');

/* Step 4 - Adding Content  */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
const bestFoods = ['Moimoi', 'Fufu', 'Abacha', 'Crayfish', 'Ede', 'Periwinkle','Tuwo', 'Icefish'];
foodElement.innerHTML = bestFoods;
const addFoodItem = "Amala";
bestFoods.push(addFoodItem);
foodElement.innerHTML += `<br>${bestFoods}`;
bestFoods.shift();
foodElement.innerHTML += `<br>${bestFoods}`;
bestFoods.pop();
foodElement.innerHTML += `<br>${bestFoods}`;










