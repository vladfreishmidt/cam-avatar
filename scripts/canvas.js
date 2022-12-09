const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

ctx.translate(canvas.width / 2, canvas.height / 2);
ctx.scale(canvas.width * 0.5, canvas.height * 0.5);

canvas.width = 300;
canvas.height = 300;

canvas.addEventListener('click', (evt) => {
    const coords = getCoords(evt, canvas);
    console.log(coords);
});


const drawAvatar = () => {
    ctx.beginPath();
    ctx.moveTo(0, -0.77);
    ctx.lineTo(0, 0.46);

    ctx.moveTo(-0.5, -0.13);
    ctx.lineTo(0.5, -0.13);

    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, -0.77);
   // ctx.quadraticCurveTo(80, 46, -0.5, -0.13);
    //ctx.quadraticCurveTo(94, 196, 0, 220);
    ctx.quadraticCurveTo(94, 196, 150, 220);

    ctx.stroke();


}

drawAvatar();