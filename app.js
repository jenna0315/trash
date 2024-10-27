//Task 2: Add canvas setup and event handling logic
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;

//Add event listeners for mouse events to handle drawing
let drawing = false;
let startX, startY;

canvas.addEventListener("mousedown", e => {
    drawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
});

canvas.addEventListener("mousemove", e => {
    if (drawing) {
        draw(e.offsetX, e.offsetY);
    }
});

canvas.addEventListener("mouseup", () => {
    drawing = false;
    ctx.closePath();
});

canvas.addEventListener("mouseout", () => {
    drawing = false;
});

//Task 3: Implement Shape Drawing Logic
//enable shape picker
const tool = document.querySelector('input[name="tool"]:checked').value;

if (tool === 'line') {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(x, y);
    ctx.stroke();
} 
else if (tool === 'rectangle') {
    ctx.beginPath();
    ctx.rect(startX, startY, x - startX, y - startY);
    ctx.stroke();
} 
else if (tool === 'circle') {
    ctx.beginPath();
    ctx.arc(startX, startY, 10, 0, Math.PI*2,false);
    ctx.stroke();
}


