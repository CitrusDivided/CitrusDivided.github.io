"homepage"; "https://modernpancakes.github.io/"
var canvas = document.querySelector('canvas');
    canvas.width = 800;
    canvas.height = 480,
    c = canvas.getContext('2d');

// Hb Gradient Set
 var gradient = c.createRadialGradient(300,300,55, 400,15,500);
        // Gradient Subset Close Up
        gradient.addColorStop(.3, "rgb(255,0,0,0.9");
        gradient.addColorStop(.3, "rgba(10,0,0,0.1");

// Text
c.fillStyle = "rgb(255,55,55,0.1)";
c.font = '18px Arial';
c.textAlign = 'center';
c.fillText('Hematological models snippet',400,35);

// Heme (Hb)


// Alpha (α) polypeptide chains
    // Headline Description
    c.fillStyle = "rgb(255,55,55,1)";
    c.font = '14px Arial';
    c.fillText('Second (α) Polypeptide chain',380,400);
    c.fillText('First (α) Polypeptide chain',145,400);
        // α Shadow
        c.shadowBlur = 15;
        c.shadowColor = 'red';
        c.shadowOffsetY = 2
        c.strokeStyle = "rgb(255,0,0,1";
    // Base (α) polypeptide representation
    c.beginPath();
    c.fillStyle = 'red';
    c.arc(200,300, 55,0, Math.PI * 2, false)
    c.arc(320,300, 55,0, Math.PI * 2, false)
    c.stroke();
    c.fill();


// Beta (β) polypeptide chains
        // β Shadow
        c.shadowBlur = 15;
        c.shadowColor = 'purple';
        c.shadowOffsetY = 2
        c.strokeStyle = "rgb(255,0,255,1";
    
        // Headline Description
    c.fillStyle = "purple";
    c.fillText('Second (β) Polypeptide chain',380,85);
    c.fillText('First (β) Polypeptide chain',120,65);
    
    // Base (β) polypeptide representations
    c.beginPath();
    c.fillStyle = 'purple';
    c.arc(320,180, 55,0, Math.PI * 2, false)
    c.arc(200,180, 55,0, Math.PI * 2, false)
    c.stroke();
    c.fill();

// HEME Descriptor
c.beginPath();
c.strokeStyle = "rgb(255,255,255,0.5";
c.moveTo(470,135);
c.lineTo(353,135);
c.stroke();

    // Fe + 
    c.fillStyle = 'white';
    c.fillText('At the center of every Hemoglobin lies four Polypeptide chains of protein. Each alpha and beta chain contain a single iron deposit...', canvas.width/2, canvas.height/4.3, canvas.width/1.1,);
