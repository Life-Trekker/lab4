/*
Author: Josh T
File Name: main.js for Lab 6
*/

//


function init(){
//create shortcut vars
const backBtn = document.querySelector(".backBtn");
const nextBtn = document.querySelector(".nextBtn");
const frame = document.getElementById("centeredImages");
const slides = frame.querySelectorAll("img");
const caption = document.getElementById("caption");



//with JS active, hide all images
for(let i = 0; i < slides.length; i++)
{
    slides[i].style.display = "none";
}

// show the first slide
slides[0].style.display = "block";

// make next link active
nextBtn.addEventListener("click", (e) => {
  
  // stop link from trying to reload page
  e.preventDefault();
  
  //shortcut vars
  let showing = document.querySelector(".current");
  let nextUp = showing.nextElementSibling;
  
  // deactivate current image
  showing.style.display = "none";
  showing.setAttribute("class", "slide");
  
  
  //make sure next image is there
    if(nextUp === null || nextUp.getAttribute("class") != "slide")
    {
        nextUp = frame.firstElementChild;
    }

      // activate next image
      nextUp.style.display = "block";
      nextUp.setAttribute("class", "current");




  
});

// make back link active
backBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  //create shortcut vars
  let showing = document.querySelector(".current");
  let nextUp = showing.previousElementSibling;
  
  // deactivate current image
  showing.setAttribute("class", "slide");
  showing.style.display = "none";

    //make sure next image is there
    if(nextUp === null || nextUp.getAttribute("class") != "slide")
    {
        nextUp = frame.lastElementChild.previousElementSibling;

    }

    // activate next image
    nextUp.style.display = "block";
    nextUp.setAttribute("class", "current");
  

});
}  // end init



document.addEventListener('DOMContentLoaded', init);