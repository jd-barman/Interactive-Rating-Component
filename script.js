'use strict'

const container = document.querySelector("[data-card]");
const submit = document.querySelector(".submit");

const rating = document.getElementsByClassName("rating-icon");
const ratedVal = document.querySelector("[data-rating-value]");

let lastRated = NaN;
let len = rating.length;

let addSelectClass = function(){
    removeSelectClass();
    this.classList.add('selected');
    lastRated = Number(this.textContent);
}

let removeSelectClass = function(){
    for (let i=0; i<len; i++) {
        rating[i].classList.remove('selected');
    }
}

for (let i=0; i<len; i++) {
    rating[i].addEventListener("click",addSelectClass);
}

submit.addEventListener("click", function(){
    if(lastRated){
        document.querySelector(".rating-state").style.display = "none";
        document.querySelector(".thanks-state").classList.remove("hidden");

        ratedVal.textContent = lastRated;
    }
})