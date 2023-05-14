const canvas = document.getElementById("home")
const ctx = canvas.getContext('2d')

ctx.fillStyle = '#fff100';
ctx.fillRect(50, 200, 300, 200);

ctx.beginPath();
ctx.moveTo(50, 200);
ctx.lineTo(200, 50);
ctx.lineTo(350, 200);
ctx.closePath();
ctx.fillStyle = '#002bff';
ctx.fill();

ctx.fillStyle = '#ff0000';
ctx.fillRect(175, 300, 50, 100);