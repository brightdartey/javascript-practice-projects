// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", ()=> {
    // add slide toggle to btn
    (!btn.classList.contains("slide")) ? btn.classList.add("slide") : btn.classList.remove("slide");
    // control video with btn
    (!btn.classList.contains("slide")) ? video.play() : video.pause();

});

//preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    preloader.classList.add("hide-preloader");
});