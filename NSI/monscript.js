
alert("Coucou");

console.log("Coucou secret")
/*
for (let pas = 0; pas < 12; pas++) {
    document.write("Hello world !", pas);
    console.log(pas)
}
*/
const element = document.querySelector("#premier");

element.addEventListener('click', function() {
    element.style.color = "#F00";
})

console.log(element.textContent);