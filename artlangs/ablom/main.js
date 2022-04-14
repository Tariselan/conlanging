function projectLink() {
    window.location.replace("../projects.html");
}
var bell = new Audio("../bell.mp3");
function secret() {
    bell.play();
    setTimeout(function move() {
        window.location.replace("../poyeeni_na/mainpage.html");
    }, 650);
}