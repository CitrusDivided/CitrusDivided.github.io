"homepage"; "https://modernpancakes.github.io/"
var canvas = document.querySelector('canvas')

;

canvas.width = 800;
canvas.height = 480;

var c = canvas.getContext('2d');

//Snow Skies Imp.

function Snow (ssi_x, ssi_y, ssi_dx, ssi_dy, ssi_radius){
    this.ssi_x = ssi_x;         //Draw-x-Position//
    this.ssi_y = ssi_y;         //Draw-y-Position//
    this.ssi_dx = ssi_dx;       //Draw-x-velecocity-position//
    this.ssi_dy = ssi_dy;       //Draw-y-velecocity-position//
    this.ssi_radius = ssi_radius; //Draw-radius//

    this.draw = function(){
        c.beginPath();
        c.arc(this.ssi_x,this.ssi_y, this.ssi_radius, 0, Math.PI * 2, false);
        c.strokeStyle = "rgba(255,255,255,0.2";
        c.fill()
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

            this.draw();
    }

}

var snow = new Snow (200, 200, 3, 3, 30); //These are coordinates for first orbcation

//Array creation//
var snowArray = [];


for (var i = 0; i < 300; i++){
    var x = Math.random() * 800;
    var y = Math.random() * 480;
    var z = Math.random() * 8;
    var k = Math.random() * 800;
    //Animation related variables
    var t = 200;
    var tx = 1
    //Array
    var ssi_x = Math.random() * 800;
    var ssi_y = Math.random() * 400;
    var ssi_dx = (Math.random() -0.5) *30;
    var ssi_dy = (Math.random() -0.5)  *3;
    var ssi_radius = Math.random()* 30;
    //Array Variables -- Snow, end ------//

    var radius = 30
    //Falling Skies Variables
    var fs = 200;
    var fsx = 1;
    //Gradient Box Creation - Staging
    var box = c.createLinearGradient(5,180,0,480,);
    //var falling = c.arc(falling,falling,50,0, Math.PI * 2, false);//
    var gradient = c.createRadialGradient(x,y,3, x,y,7);
    snowArray.push(new Snow(ssi_x,ssi_y,ssi_dx, ssi_dy,ssi_radius));
    var snow = new Snow(ssi_x,ssi_y,ssi_dx,ssi_dy);
    
    
}

//Snow SKies Imp. End ---------------------------------------------->//



    //Animation start
    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0,0,800,480);
        //Snow Skies Imp.//
        for (var i=0; i < snowArray.length; i++){
            snowArray[i].update();
            snow.draw();
            //c.arc(200,ssi_dy,ssi_radius,0,Math.PI * 2, false)
        
        }

        //-----------------------//
        //Falling Skies Movements//
        for (var falling = 0; falling <3; falling++) {

        fs += fsx;
        falling += 3;
        
        //------------------------//
        //Original Track Movements//
        if (t + radius > 800 || t - radius <0){
            tx = -tx;
        
        }
        t += tx;

        //------------------------//
        //Snow Fall Track//
        //if (ssi_dx + ssi_radius > 800 || ssi_dx - ssi_radius <0){
        //    ssi_dx = -ssi_dx;
        
        //}
        //ssi_dx += ssi_dx;

        //if (ssi_dy + ssi_radius > 480 || ssi_dy - ssi_radius <0){
        //    ssi_dy = -ssi_dy;
        
        //}
       //ssi_dy += ssi_dy;       
        

        //Snow Skies Imp. End ------------------------------------>//
        c.beginPath();
        //c.fillStyle = "rgb(42,255,148)"; -- Older color method//
        
        // Gradient learning
        gradient.addColorStop(.3, "rgb(255,255,255,0.5");
        gradient.addColorStop(.25, 'yellow');
        gradient.addColorStop(.1, 'white');
        
        c.fillStyle = gradient;
        
        // The Sun
        c.arc(t,tx,95,0, Math.PI * 2, false);
    
        // Shadow
        c.shadowBlur = 15;
        c.shadowColor = 'yellow';
        c.shadowOffsetY = 2
    
        c.strokeStyle = "rgb(242,255,148,0.5)";
        c.stroke();
        c.fill();
        c.closePath();
        
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
c.fillStyle = "rgb(0,0,0,0.3)";
c.font = '12px serif';
c.textAlign = 'left';
c.fillText('Testing - 0.8b',25,35);

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

        //imput previous, space//
        // Circle Creation Test //




    //The Falling Skies
    
    c.beginPath();

    //snow.draw();
    c.fillStyle = "rgb(255,0,0,0.2";
    
  // c.falling = c.arc(t,t,ssi_radius,0,Math.PI *2,false);
    
// c.arc(ssi_x,ssi_y,ssi_radius,0,Math.PI *2,false);
   
    
   // Shadow
    c.shadowBlur = 10;
    c.shadowColor = 'black';
    c.shadowOffsetY = 2

    c.strokeStyle = "rgba(1,1,1,0";
    //snow.draw();
    c.stroke();
    c.fillStyle = "rgba(55,55,55,0.3";
    c.fill();
    
}
    }
    animate();