function projectLink() {
    window.location.replace("../projects.html");
}
var bell = new Audio("../bell.mp3");
function secret() {
    bell.play();
    setTimeout(function move() {
        window.location.replace("../ablom/main.html");
    }, 650);
}