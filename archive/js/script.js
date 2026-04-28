


let taille = document.body.clientWidth

// Ici je vais rediriger en dessous de 1000 px
if (taille < 1000) {
    console.log("redirection");
    window.location = "nsimobile.html";
} else {
    console.log("ok, assez grand");

}

function draw() {
    let canvas = document.getElementById("canvas");
    canvas.width = document.body.clientWidth; //document.width is obsolete
    canvas.height = document.body.clientHeight; //document.height is obsolete
    console.log(canvas.width, canvas.height )
    if (canvas.getContext) {
        let ctx = canvas.getContext("2d");
        let xCenter = canvas.width / 2
        let yCenter = canvas.height / 2
        let rayon = xCenter / 5
        let unite = xCenter / 15
        // Légende

        ctx.fillStyle = 'rgba(250, 0, 0, 0.9)';
        ctx.fillRect(10, 10, 50, 50);
        ctx.font = 'bold 50px Roboto , Arial, serif';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'left';
        ctx.fillText('NSI', 70, 60);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(10, 70, 50, 50);
        ctx.font = 'bold 50px Roboto , Arial, serif';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'left';
        ctx.fillText('Maths', 70, 120);

        ctx.fillStyle = '#cddc39';
        ctx.fillRect(10, 130, 50, 50);
        ctx.font = 'bold 50px Roboto , Arial, serif';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'left';
        ctx.fillText('Physique', 70, 180);

        ctx.fillStyle = 'rgba(173, 255, 47, 0.5)';
        ctx.fillRect(10, 190, 50, 50);

        ctx.fillStyle = 'rgba(100, 100, 100, 0.9)';
        ctx.fillRect(10, 250, 50, 50);
        ctx.font = 'bold 50px Roboto , Arial, serif';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'left';
        ctx.fillText('Choix libre', 70, 300);
        // NSI
        /*
        ctx.beginPath();
        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.arc(xCenter, yCenter, rayon, 0, 2 * Math.PI);
        ctx.fill();
        // Text NSI
        ctx.font = 'bold 50px Roboto , Arial, serif';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        ctx.fillText('NSI', xCenter, yCenter + 25);

        // Avec les maths


        // Les liaisons
        ctx.beginPath();
        ctx.moveTo(xCenter + rayon, yCenter);
        ctx.lineTo(xCenter + rayon + 200, yCenter);
        //ctx.lineTo(200, 300);
        ctx.stroke();
        */

    }
}