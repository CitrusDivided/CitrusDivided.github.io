"homepage"; "https://modernpancakes.github.io/"
var canvas = document.querySelector('canvas')

;

canvas.width = 800;
canvas.height = 480

var c = canvas.getContext('2d');

//Snow Skies Imp.

function Snow (ssi_x, ssi_y, ssi_dx, ssi_dy, ssi_radius){
    this.ssi_x = ssi_x;         //Draw-x-Position//
    this.ssi_y = ssi_y;         //Draw-y-Position//
    this.ssi_dx = ssi_dx;       //Draw-x-velecocity-position//
    this.ssi_dy = ssi_dy;       //Draw-y-velecocity-position//
    this.ssi_radius = ssi_radius; //Draw-radius//

    this.draw = function(){
        c.arc(200,200, 30, 0, Math.PI * 2, false);
        c.strokeStyle = 'red';
        c.stroke();
    }
    this.update = function(){
        if (this.ssi_x + this.ssi_radius > 800 ||
            this.ssi_x - this.ssi_radius <0){
                this.ssi_dx = -this.ssi_dx;
            }
        if (this.ssi_y + this.ssi_radius > 480 ||
            this.ssi_y - this.ssi_radius < 0) {
                this.ssi_dy = -this.ssi_dy;
            }

            this.ssi_x += this.ssi_dx;
            this.ssi_y += this.ssi_dy;
    }
}

var snow = new Snow (200, 200);

//Array creation//
var snowArray = [];

for (var i = 0; i < 100; i++){

    snowArray.push(new Snow())
    var snow = new Snow(200,200,3,3,30);

}

//Snow SKies Imp. End ---------------------------------------------->//


//Animation related variables
var t = 200;
var tx = 1
var radius = 30
//Falling Skies Variables
var fs = 200;
var fsx = 1;
//Gradient Box Creation - Staging
var box = c.createLinearGradient(5,180,0,480,);
var falling = c.arc(10,10,50,0, Math.PI * 2, false);
    //Animation start
    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0,0,800,480);
        //Snow Skies Imp.//
        
        snow.draw();
        

        //Snow Skies Imp. End ------------------------------------>//

        //Rectangle Gradients//
        
        // Gradient "Box" -- which is the linear gradients for the rectangles//
        box.addColorStop(.5, "rgb(255,255,255,0.1");
        box.addColorStop(.5, 'white');
        box.addColorStop(.3, "rgb(255,255,255,0.9");
        
        

        //Rectangles
        c.beginPath();
        c.fillStyle = box;
c.fillRect(t, 115, 100, 100);
c.fillRect(450, 210, 155, 195);
c.fillRect(245, 255, 100, 100);

//Exit Door
c.beginPath();
//Styling additions to happen here
c.fillRect(0, 147, 15, 35);

//Stage Flooring
c.beginPath();
c.fillStyle = "rgb(255,255,255,";
c.fillRect(0, 380, 800, 100);

//Stage Falling Skies


// Line
c.beginPath();
c.strokeStyle = 'white'
c.moveTo(0,165);
c.lineTo(t,165);
c.lineTo(300,300);
c.lineTo(750, 300);
c.stroke();

// Text
c.fillStyle = "rgb(255,255,255,0.3)";
c.font = '12px serif';
c.textAlign = 'left';
c.fillText('Testing - 0.5',25,35);

// -- Text "Character stand in" Keyboard imp -- //
c.fillStyle = "white";
c.font = 'bold 10px arial';
c.textAlign = 'center'
c.fillText('X',755,300);

// Arc around text "Bubble"//
c.beginPath();
c.arc(754,297, 15,0, Math.PI * 2, false)
c.strokeStyle = "rgb(242,255,148,0.3"
c.fillStyle = "rgb(255,200,255,0.9";
c.stroke();
c.fill();


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


    //Falling Skies Movements
    for (var falling = 0; falling <200; falling++) {
    if (fs + radius > 800 || fs - radius <0){
        fsx = -fsx;
    
    }
    fs += fsx;
    falling += t;

    //The Falling Skies
    c.beginPath();
    c.falling = c.arc(falling,falling,radius,0,Math.PI *2,false);
    c.falling = c.arc(t,tx,40,0,Math.PI *2,false);

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