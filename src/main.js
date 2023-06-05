// Iniciar el joc
const game = new Game(); // Crea una nova instància del joc 

function updatePoints(playerPoints, dealerPoints) {
        const playerPointsElement = document.querySelector(".contcards2 p:last-child");
        const dealerPointsElement = document.querySelector(".contcards p:last-child");

    playerPointsElement.innerHTML = playerPoints;
    dealerPointsElement.innerHTML = dealerPoints;
}

// Demanar carta
document.querySelector("#hit").addEventListener("click", () => {
    game.hit();
});

// Plantar-se
document.querySelector("#stay").addEventListener("click", () => {
    game.stay();
});

// Nova partida
document.querySelector(".newGame").addEventListener("click", () => {
    game.dealOneCard();
});

const hitButton = document.getElementById("hit");
const stayButton = document.getElementById("stay");
hitButton.disabled = true;
stayButton.disabled = true;


function myfunction() {
    var btn = document.getElementById('repetir');
    btn.remove();
    hitButton.disabled = false;
    stayButton.disabled = false;
}

function funtiondisable() {
    hitButton.disabled = true;
    stayButton.disabled = true;
}


setTimeout(function () {
    // Completar la operació de càrrega aquí
    preloader.style.display = "none";
}, 2000);


setTimeout(function () {
    // Completar la operació de càrrega aquí
    preloader.style.display = "none";
}, 2000);


setTimeout(function () {
    document.body.style.overflow = "hidden";
}, 0);

setTimeout(function () {
    document.body.style.overflow = "auto";
}, 6000);