"homepage"; "https://modernpancakes.github.io/"
var canvas = document.querySelector('canvas')

;

canvas.width = 800;
canvas.height = 480;

var c = canvas.getContext('2d');

// Hb Gradient Set
var gradient = c.createRadialGradient(400,400,55, 100,100,50);

// Text
c.fillStyle = "rgb(255,55,55,0.2)";
c.font = '18px serif';
c.textAlign = 'left';
c.fillText('Hematological models snippet',25,35);

// Heme (Hb)
        // Gradient Subset
        gradient.addColorStop(.3, "rgb(255,255,255,0.9");
        gradient.addColorStop(.3, "rgba(255,0,0,0.9");
;
c.beginPath();
c.strokeStyle = "rgb(255,0,0,1";
c.fillStyle = gradient;
c.arc(200,300, 55,0, Math.PI * 2, false)
c.fillStyle = gradient;
c.arc(320,300, 55,0, Math.PI * 2, false)

c.stroke();
c.fill();
c.beginPath();
c.arc(320,180, 55,0, Math.PI * 2, false)
c.arc(200,180, 55,0, Math.PI * 2, false)
c.stroke();
c.fill();

// Hb Descriptor
c.beginPath();
c.strokeStyle = "rgb(255,0,0,1";
c.moveTo(500,105);
c.lineTo(350,135);
c.stroke();

// Beta (β) polypeptide chains
// Alpha (α) polypeptide chains