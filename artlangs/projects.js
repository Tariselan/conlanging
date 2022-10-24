const languages = [
    "poyeeni_na/main.html", // 0
    "identity_lang/main.html", // 1
    "kawa/main.html", // 2
    "ablom/main.html", // 3
    "nicesounds/main.html" // 4
];
const langDict = [
    "poyeeni_na",
    "identity_lang",
    "kawa",
    "ablom",
    "nicesounds"
]
var bell = new Audio("../bell.mp3");
var conlang = location.href.split("/").slice(-2)[0];

function language(x) {
    if (x == "a") {
        let location = window.location;
        alert(location)
        //window.location.replace("../projects.html");
    }
    else {
        window.location.replace(languages[x]);
    }
}
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
            window.location.replace('../kawa/main.html');
        }
        else if (conlang == 'kawa') {
            window.location.replace('../poyeeni_na/mainpage.html');
        }
    }, 650);
}