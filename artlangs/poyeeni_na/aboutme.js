let language = 1;

function switchLang() {
    if (language == 0) {
        document.getElementById("englishC").style.display = "none";
        document.getElementById("frenchC").style.display = "block";
        document.getElementById("switchLang").innerHTML = "Passer au Anglais";
        document.getElementById("main").innerHTML = "La Page D'accueil";
        document.getElementById("grammar").innerHTML = "La Grammaire";
        document.getElementById("examples").innerHTML = "Les Exemples";
        document.getElementById("dictionary").innerHTML = "Le Dictionnaire";
        document.getElementById("about").innerHTML = "\xC0 Propos de Moi";
        document.title = "\xC0 Propos de Moi";
        language += 1;
    }
    else {
        document.getElementById("englishC").style.display = "block";
        document.getElementById("frenchC").style.display = "none";
        document.getElementById("switchLang").innerHTML = "Switch to French";
        document.getElementById("main").innerHTML = "Main Page";
        document.getElementById("grammar").innerHTML = "Grammar";
        document.getElementById("examples").innerHTML = "Examples";
        document.getElementById("dictionary").innerHTML = "Dictionary";
        document.getElementById("about").innerHTML = "About Me";
        document.title = "About Me";
        language -= 1;
    }
}

function onload() {
    switchLang();
}