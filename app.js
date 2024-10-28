//Task 2: Add canvas setup and event handling logic
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;

//Add event listeners for mouse events to handle drawing
let drawing = false;
let startX, startY;

canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
});

canvas.addEventListener('mousemove', (e) => {
    if (drawing) {
        draw(e.offsetX, e.offsetY);
    }
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.closePath();
});

canvas.addEventListener('mouseout', () => {
    drawing = false;
});

//Task 3: Implement Shape Drawing Logic
let colorInput = document.getElementById('color');
// Drawing function for different shapes
function draw(x, y) {
    const tool = document.querySelector('input[name="tool"]:checked').value;
    ctx.strokeStyle = colorInput.value; // Use selected color
    ctx.lineWidth = 2;

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
}}

//Task 4: Add Color Selection and Canvas Clearing
//enable clear the canvas
document.querySelector("#clear").addEventListener("click",()=>{
    ctx.clearRect(0,0,width,height)
})
