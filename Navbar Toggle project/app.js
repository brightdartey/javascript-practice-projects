// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
    // 1. Implement toggle with If..Else
    links.classList.contains("show-links") ? 
    links.classList.remove("show-links") : 
    links.classList.add("show-links");
    
    //2. One liner implementation using Toggle Function
    // links.classList.toggle("show-links");
})