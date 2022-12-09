const getCoords = (evt, canvas) => {
    const x = (evt.x - canvas.width / 2) / (canvas.width / 2);
    const y = (evt.y - canvas.height / 2) / (canvas.height / 2);

    const coords = `x: ${x.toFixed(2)}, y: ${y.toFixed(2)}`
 
    return coords;
}