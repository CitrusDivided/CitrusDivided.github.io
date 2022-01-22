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

// Heme
c.arc(754,297, 15,0, Math.PI * 2, false)
c.strokeStyle = "rgb(242,255,148,0.3"
c.fillStyle = "rgb(255,200,255,0.9";
c.stroke();
c.fill();

// Beta (β) polypeptide chains
// Alpha (α) polypeptide chains