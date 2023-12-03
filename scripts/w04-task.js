/* LESSON 4 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Paul Arungwa",
    photo: 'images/profilepicture.jpg',
    favoriteFoods: [
        'Moimoi', 'Fufu', 'Abacha', 'RICE', 'BEANS', 'PLAINTAIN','Tuwo', 'OKRA'
    ],
    hobbies: [
        'I love Football', 'Reading great novels', 'Watching family programs', 'Playing with my kids', 'Chatting with friends'
    ],

    placesLived: [
        {
            place: "Aba, Abia State , Nigeria",
            length: "5 Years"
        },
        {
            place: "Asaba, Delta State, Nigeria",
            length: "4 Years"
        },
        {
            place: "Yenagoa, Bayelsa State, Nigeria",
            length: "6 Months"
        },
        {
            place: "Alagbon, Lagos State, Nigeria",
            length: "3 Years"
        }, 
        {
            place: "WORLD BANK, IMO State, Nigeria",
            length: "6 Years"
        },
        
    ]/* DOM Manipulation - Output */
};

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement("ul");
    ul.textContent = hobby;
    document.querySelector("#hobbies").appendChild(ul);
});
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement("ul");
    ul.textContent = hobby;
    document.querySelector("#hobbies").appendChild(ul);
});
/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
})


