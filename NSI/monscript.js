
console.log("Ici c'est la console rpz")

const element = document.querySelector("#premier");
const button = document.querySelector("button");
const valide = document.querySelector("#valide");
const combat = document.querySelector("#combat");
const hajime = document.querySelector("#hajime");

hajime.addEventListener('click', function (ev) {
    const nomPlayer1 = document.querySelector("#player1").value;
    const nomPlayer2 = document.querySelector("#player2").value;
    combat.style.display = "block";
    alert(nomPlayer1 + " VS " + nomPlayer2);
});


