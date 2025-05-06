
let loginPage = document.getElementById("login-body");
let changeImageDelaySec = 8 * 1000;
let slidesPath = "/assets/images/slides/";
let slides = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
let currentImage = 0;

window.onload = function() {
    if(loginPage != null) {
        setInterval(changeBackgroundImage, changeImageDelaySec);
    } 
}

// Changes the background image of the login page
function changeBackgroundImage() {
    loginPage.style.backgroundImage = `url('${slidesPath + slides[currentImage]}')`;

    if(currentImage < slides.length-1) {
        currentImage += 1;
    } else {
        currentImage = 0;
    }
}

function login() {
    location.href = "/dashboard.html";
}