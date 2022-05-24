const cat = document.getElementById("cat");
const dog = document.getElementById("dog");
const cat_btn = document.getElementById("cat_btn");
const dog_btn = document.getElementById("dog_btn");



cat_btn.addEventListener("click", getCat);
dog_btn.addEventListener("click", getDog);



function getCat() {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
        .then((data) => {
            cat.innerHTML = `<img src = ${data[0].url} alt="cat"/>`;
        });
}


function getDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            dog.innerHTML = `<img src = ${data.message} alt="dog"/>`;
        });
}


window.onload = function() {
    getCat();
    getDog();
}