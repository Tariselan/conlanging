function elId(a) {
    let x = document.getElementById(a);
    return x;
}

var tree1 = elId('syntaxtree-adv');

var adv = elId('tadverbs');
var advP = elId('tadverbs-p');

tree1.style.top = adv.offsetTop - 25;
advP.style.width = advP.offsetWidth - tree1.offsetWidth;