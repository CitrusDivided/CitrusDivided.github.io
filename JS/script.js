"homepage"; "https://modernpancakes.github.io/"
var canvas = document.querySelector('canvas')
;

canvas.width = 800;
canvas.height = 480

var c = canvas.getContext('2d');
c.fillStyle = "#2AFF94";
c.fillRect(100, 115, 100, 100);
c.fillRect(450, 210, 155, 195);
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
c.fillText('Testing.',675,285);

// Text
c.fillStyle = "red";
c.font = 'bold 10px arial';
//c.textAlign = 'center';//
c.fillText('X',755,303);

// Circle Creation Test //

for (var i = 0; i <6; i++) {
    var x = Math.random() * 800;
    var y = Math.random() * 480;
    var z = Math.random() * 98;
    c.beginPath();
    c.fillStyle = "rgb(42,255,148)";
    c.arc(x,y,z,0, Math.PI * 2, false);
    c.strokeStyle = "rgb(242,255,148)";
    c.stroke();
    c.fill();
}