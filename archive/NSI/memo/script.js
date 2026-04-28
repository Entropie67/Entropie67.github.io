
let main = document.querySelector("main");

for (let i=0; i < 12; i++){
    main.innerHTML += "<div class=\"carte\">Carte lapin</div>";
}

let para = document.querySelector("p");
console.log(para.innerText);


let button = document.querySelector(".carte");
button.addEventListener("click", ev => {
    button.style.backgroundColor = "black";
});


