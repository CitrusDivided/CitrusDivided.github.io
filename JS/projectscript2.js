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
    c.fillText('Second (α) Polypeptide chain',canvas.width/2,canvas.height/1.2);
    c.fillText('First (α) Polypeptide chain',canvas.width/6.5,canvas.height/1.2);
        // α Shadow
        c.shadowBlur = 15;
        c.shadowColor = 'red';
        c.shadowOffsetY = 2
        c.strokeStyle = "rgb(255,0,0,1";
    // Base (α) polypeptide representation
    c.beginPath();
    c.fillStyle = 'red';
    c.arc(canvas.width/4,canvas.height/1.6, 55,0, Math.PI * 2, false)
    c.arc(canvas.width/2.5,canvas.height/1.6, 55,0, Math.PI * 2, false)
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
    c.fillText('Second (β) Polypeptide chain',canvas.width/2,canvas.height/7.4);
    c.fillText('First (β) Polypeptide chain',canvas.width/6.5,canvas.height/7.4);
    
    // Base (β) polypeptide representations
    c.beginPath();
    c.fillStyle = 'purple';
    c.arc(canvas.width/2.5,canvas.height/2.65, 55,0, Math.PI * 2, false)
    c.arc(canvas.width/4,canvas.height/2.65, 55,0, Math.PI * 2, false)
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
