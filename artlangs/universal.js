function projectLink() {
    window.location.replace("../projects.html");
}
var bell = new Audio("../bell.mp3");
var conlang = location.href.split("/").slice(-2)[0];

function secret() {
    bell.play();
    var conlang = location.href.split("/").slice(-2)[0];
    setTimeout(function move() {
        if (conlang == 'poyeeni_na') {
            window.location.replace('../ablom/main.html');
        }
        else if (conlang == 'ablom') {
            window.location.replace('../nicesounds/main.html');
        }
        else if (conlang == 'nicesounds') {
            window.location.replace('../poyeeni_na/mainpage.html');
        }
    }, 650);
}