const languages = [
    "poyeeni_na/main.html", // 0
    "identity_lang/main.html", // 1
    "kawa/main.html", // 2
    "ablom/main.html", // 3
    "nicesounds/main.html" // 4
];
const langDict = [
    "poyeeni_na", // 0 
    "identity_lang", // 1
    "kawa", // 2
    "ablom", // 3
    "nicesounds" // 4
]
var bell = new Audio("../bell.mp3");
var page = location.href.split("/").slice(-2)[1];
var main = "main.html";
var lang = langDict.indexOf();

function language(x) {
    if (x == -1) {
        page = location.href.split("/").slice(-2)[1];
        if (page == main) {
            window.location.replace("../projects.html");
        }
        else {
            window.location.replace(main);
        }
    }
    else {
        window.location.replace(languages[x]);
    }
}
function secret() {
    bell.play();
    let lang = langDict.indexOf(location.href.split("/").slice(-2)[0]);
    setTimeout(function move() {
        let folder = "../";
        if (lang == (langDict.length - 1)) {
            lang = 0;
            window.location.replace(folder.concat(languages[lang]));
        }
        else {
            lang += 1;
            window.location.replace(folder.concat(languages[lang]));
        }
    }, 500);
}