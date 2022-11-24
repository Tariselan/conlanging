function elId(a) {
    let x = document.getElementById(a);
    return x;
}

var tree1 = elId('syntaxtree-adv');

var adv = elId('tadverbs');
var advP = elId('tadverbs-p');
function trees() {
    let x = parseInt(adv.offsetTop - 50);
    tree1.style.top = (x + 'px');
    advP.style.width = (parseInt(advP.offsetWidth) - parseInt(tree1.offsetWidth) + 'px');
}
trees();
window.addEventListener('resize', trees);