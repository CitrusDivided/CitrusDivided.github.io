"homepage"; "https://modernpancakes.github.io/"
var canvas = document.querySelector('canvas')

;

canvas.width = 800;
canvas.height = 480

var c = canvas.getContext('2d');




//Animation related variables
var t = 200;
var tx = 1
var radius = 30
var box = c.createLinearGradient(200,200,3,200,200,7);
    //Animation start
    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0,0,800,480);
        //Previous Stage Start (Unanimated)//

        // Briging Rectangle Gradients//

        

        
        //c.fillStyle = "rgb(42,255,148)"; -- Older color method//
        
        // Gradient learning
        box.addColorStop(.3, "rgb(255,255,255,0.5");
        box.addColorStop(.25, 'yellow');
        box.addColorStop(.1, 'white');
        
        

        // Rectangle
        c.beginPath();
        c.fillStyle = box;
c.fillRect(100, 115, 100, 100);
c.fillRect(450, 210, 155, 195);
c.fillRect(245, 255, 100, 100);


// Line
c.beginPath();
c.strokeStyle = '#2AFF94'
c.moveTo(200,165);
c.lineTo(300,165);
c.lineTo(300,300);
c.lineTo(750, 300);
c.stroke();

// Text
c.fillStyle = "rgb(255,255,255,0.3)";
c.font = '12px serif';
c.textAlign = 'left';
c.fillText('Testing - 0.3',25,35);

// Text
c.fillStyle = "red";
c.font = 'bold 10px arial';
c.fillText('X',755,303);
//Stage End (Unanimated)//
        
    //Animation arc//
        c.beginPath();
        c.arc(t,300,radius,0, Math.PI * 2, false);
        c.strokeStyle = "rgb(242,255,148,0.3)";
        c.stroke();
        if (t + radius > 800 || t - radius <0){
            tx = -tx;
        
        }
        t += tx;
        //imput previous, space//
        // Circle Creation Test //

for (var i = 0; i <2; i++) {
    var x = Math.random() * 800;
    var y = Math.random() * 480;
    var z = Math.random() * 60;
    var k = Math.random() * 255;
    var gradient = c.createRadialGradient(x,y,3, x,y,7);

    c.beginPath();
    //c.fillStyle = "rgb(42,255,148)"; -- Older color method//
    
    // Gradient learning
    gradient.addColorStop(.3, "rgb(255,255,255,0.5");
    gradient.addColorStop(.25, 'yellow');
    gradient.addColorStop(.1, 'white');
    
    c.fillStyle = gradient;
    

    c.arc(t,tx,95,0, Math.PI * 2, false);

    // Shadow
    c.shadowBlur = 15;
    c.shadowColor = 'yellow';
    c.shadowOffsetY = 2

    c.strokeStyle = "rgb(242,255,148,0.5)";
    c.stroke();
    c.fill();
}
    }
    animate();
    //End of animation test