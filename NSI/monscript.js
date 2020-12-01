
console.log("Ici c'est la console rpz")

const element = document.querySelector("#premier");
const button = document.querySelector("button");
const valide = document.querySelector("#valide");




valide.addEventListener('click', function(event){
    const nom = document.querySelector("input").value;
    alert("Salut " + nom);
    console.log(nom);
});



button.addEventListener('click', function(event){

    console.log("Click !");
    element.style.display = "none";
    event.preventDefault();
});


element.addEventListener('click', function() {
    element.style.color = "#F00";
});




console.log(element.textContent);