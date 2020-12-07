let click = 0;

document.querySelector('.navbar-toggler-icon').addEventListener('click', function () { //Der laves en eventlistener på DOM-elementet "burgermenu"
    document.querySelector('.wrapper-menu').classList.toggle('change'); //Vi bruger classlist.toggle for at afspille åben/lukke animation
    click++; //Click-variablen forøges med 1 for hvert click
    //checkWindowSize(); //Vi starter funktionen "checkWindowSize"

    if (click == 1) {
        document.querySelector(".mobil-shadow").style.display = "flex";
    } else if (click == 2) {
        document.querySelector(".mobil-shadow").style.display = "none";
        click = 0;
    }

});
