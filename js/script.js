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
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);

        ctx.beginPath();
        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.arc(xCenter, yCenter, rayon, 0, 2 * Math.PI);

        ctx.fill();


        ctx.font = 'bold 50px Roboto , Arial, serif';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        ctx.fillText('NSI', xCenter, yCenter + 25);

        ctx.beginPath();
        ctx.moveTo(xCenter + rayon, yCenter);
        ctx.lineTo(xCenter + rayon + 200, yCenter);
        //ctx.lineTo(200, 300);
        ctx.stroke();
    }
}