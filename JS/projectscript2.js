"homepage"; "https://modernpancakes.github.io/"
var canvas = document.querySelector('canvas')

;

canvas.width = 800;
canvas.height = 480;

var c = canvas.getContext('2d');

// Text
c.fillStyle = "rgb(255,55,55,0.2)";
c.font = '18px serif';
c.textAlign = 'left';
c.fillText('Hematological models snippet',25,35);

// Heme (Hb)
c.arc(200,300, 55,0, Math.PI * 2, false)
c.strokeStyle = "rgb(255,1,148,1";
c.fillStyle = "rgb(255,100,100,0.9";
c.stroke();
c.fill();

// Beta (β) polypeptide chains
// Alpha (α) polypeptide chains