"homepage"; "https://modernpancakes.github.io/"
var canvas = document.querySelector('canvas')

;

canvas.width = 800;
canvas.height = 480;

var c = canvas.getContext('2d');

// Hb Gradient Set
var gradient = c.createRadialGradient(300,300,55, 400,15,500);

// Text
c.fillStyle = "rgb(255,55,55,0.2)";
c.font = '18px serif';
c.textAlign = 'left';
c.fillText('Hematological models snippet',25,35);

// Heme (Hb)
        // Gradient Subset Close Up
        gradient.addColorStop(.3, "rgb(255,0,0,0.9");
        gradient.addColorStop(.3, "rgba(10,0,0,0.1");
;

// Alpha (α) polypeptide chains
    // Headline Description
    c.fillStyle = "rgb(255,55,55,1)";
    c.font = '14px serif';
    c.textAlign = 'center';
    c.fillText('Second (α) Polypeptide chain',380,400);
    c.fillText('First (α) Polypeptide chain',145,400);
        // α Shadow
        c.shadowBlur = 15;
        c.shadowColor = 'red';
        c.shadowOffsetY = 2
        c.strokeStyle = "rgb(255,0,0,1";
    c.beginPath();
    c.fillStyle = 'red';
    c.arc(200,300, 55,0, Math.PI * 2, false)
    c.arc(320,300, 55,0, Math.PI * 2, false)
    c.stroke();
    c.fill();


// Beta (β) polypeptide chains
    // Headline Description
    c.fillStyle = "rgb(255,55,55,1)";
    c.font = '14px serif';
    c.textAlign = 'center';
    c.fillText('Second (β) Polypeptide chain',380,85);
    c.fillText('First (β) Polypeptide chain',145,80);
        // β Shadow
        c.shadowBlur = 15;
        c.shadowColor = 'purple';
        c.shadowOffsetY = 2
        c.strokeStyle = "rgb(255,0,255,1";
    c.beginPath();
    c.fillStyle = 'purple';
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


