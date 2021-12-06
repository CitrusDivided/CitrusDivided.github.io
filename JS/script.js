"homepage"; "https://modernpancakes.github.io/"
var canvas = document.querySelector('canvas')
;

canvas.width = 800;
canvas.height = 480

var c = canvas.getContext('2d');
c.fillStyle = "#2AFF94";
c.fillRect(100, 115, 100, 100);
c.fillRect(750, 210, 155, 195);
c.fillRect(245, 255, 100, 100);

console.log(canvas);

// Line
c.beginPath();
c.strokeStyle = '#2AFF94'
c.moveTo(150,165);
c.lineTo(300,165);
c.lineTo(300,300);
c.lineTo(750, 300);
c.stroke();

// Text
c.fillStyle = "#2AFF94";
c.font = '28px serif';
c.textAlign = 'center';
c.fillText('Testing',820,155);