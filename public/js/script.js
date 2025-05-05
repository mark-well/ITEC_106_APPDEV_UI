
let changeImageDelaySec = 8 * 1000;
let slidesPath = "/assets/images/slides/";
let slides = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
let currentImage = 0;

window.onload = function() {
    setInterval(changeBackgroundImage, changeImageDelaySec);
}

// Changes the background image of the login page
function changeBackgroundImage() {
    document.body.style.backgroundImage = `url('${slidesPath + slides[currentImage]}')`;
    console.log("Current image: " + currentImage);

    if(currentImage < slides.length-1) {
        currentImage += 1;
    } else {
        currentImage = 0;
    }
}