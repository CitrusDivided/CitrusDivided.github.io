"homepage"; "https://citrusdivided.github.io/"
anime({
    targets: ['.curtainRight', '.curtainLeft'],
    scaleY: 1.6,
    easing: 'spring(1, 80, 10, 0)'
});

anime({
    targets: ['.curtainCenterMass', '.curtainCenterMassHighlight'],
    width: '11%',
    height: '50%',
    easing: 'spring(1, 80, 15, 0)'
    
})

anime({
    targets: ['#pageHeadlineHoloSheen',],
    duration: 5200,
    top: '300px',
    loop: true,
    scaleY: .3,
    direction: 'alternate',
    easing: 'easeInOutExpo'
})

var scannerColoring = anime.timeline({
    endDelay: 1000,
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true,
})
.add({ targets: ['#pageHeadlineHoloSheen', 'hr', '#imageDec',], background: 'rgb(150,0,0, 1' }, 0)

var canvas = document.querySelector('canvas');

canvas.width = 800;
canvas.height = 480;

var c = canvas.getContext('2d');
// Interaction //

var mouse={
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove',
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
})
// Interaction Set -- END //
// //Snow Skies Imp.
// function Snow (ssi_x, ssi_y, ssi_dx, ssi_dy, ssi_radius){
//     this.ssi_x = ssi_x;         //Draw-x-Position//
//     this.ssi_y = ssi_y;         //Draw-y-Position//
//     this.ssi_dx = ssi_dx;       //Draw-x-velecocity-position//
//     this.ssi_dy = ssi_dy;       //Draw-y-velecocity-position//
//     this.ssi_radius = ssi_radius; //Draw-radius//

//     this.draw = function(){
//         c.beginPath();
//         c.arc(this.ssi_x,this.ssi_y, this.ssi_radius, 0, Math.PI * 2, false);
//         c.strokeStyle = "rgba(0,0,0,1";
//         c.fillStyle = "rgb(255,255,255,0.2";
//         c.fill()
//         c.stroke();
//     }
//     this.update = function(){
//         if (this.ssi_x + this.ssi_radius > 900 ||
//             this.ssi_x - this.ssi_radius <-100){
//                 this.ssi_dx = -this.ssi_dx;
//             }
//             this.ssi_x += this.ssi_dx;
//             this.ssi_y += this.ssi_dy;

//             // Interactivity --- Imp. //
//             if (mouse.x - this.ssi_x < 50 && mouse.x - this.ssi_x > -50 && mouse.y - this.ssi_y <500 && mouse.y - this.ssi_y > -500 )
//             {
//                 if (this.ssi_radius <20){
//                this.ssi_radius +=1;
//                 }
//             } else if (this.ssi_radius >5){
//                 this.ssi_radius -= 1;
//             }

//             this.draw();
//     }

// }
// var snow = new Snow (200, 200, 3, 3, 30); //These are coordinates for first orbcation
// //Array creation//
// var snowArray = [];
// for (var i = 0; i < 350; i++){
//     var x = Math.random() - 10;
//     var y = Math.random() - 40;

//     //Animation related variables
//     var t = 200;
//     var tx = 1
//     //Array
//     var ssi_x = Math.random() * 8;
//     var ssi_y = Math.random() * 600;
//     var ssi_dx = (Math.random() -0.5) *5;   //Adjusts the speed vert. entry speed//
//     var ssi_dy = (Math.random() -0.5)  *5;  //Adjusts the speed hori. entry speed//
//     var ssi_radius = Math.random()* 2;      //Obviously adjusts the radius//
//     //Array Variables -- Snow, end ------//
//     var radius = 30
//     //Falling Skies Variables
//     var fs = 200;
//     var fsx = 1;
//     //Gradient Box Creation - Staging
//     var box = c.createLinearGradient(0,180,0,480,);
//     //var falling = c.arc(falling,falling,50,0, Math.PI * 2, false);//
//     var gradient = c.createRadialGradient(x,y,3, x,y,1);
//     snowArray.push(new Snow(ssi_y,ssi_x,ssi_dx, ssi_dy,ssi_radius));
//     var snow = new Snow(ssi_y,ssi_x,ssi_dx,ssi_dy);
// }
// //Snow SKies Imp. End ---------------------------------------------->//
//     //Animation start
//     function animate() {
//         requestAnimationFrame(animate);
//         c.clearRect(0,0,800,480);
//         //Snow Skies Imp.//
//         for (var i=0; i < snowArray.length; i++){
//             snowArray[i].update();
//             snow.draw();        
//         }

//         //-----------------------//
//         //Falling Skies Movements//
//         for (var falling = 0; falling <1; falling++) {

//         fs += fsx;
//         falling += 1;
        
//         //------------------------//
//         //Original Track Movements//
//         if (t + radius > 800 || t - radius <0){
//             tx = -tx;
        
//         }
//         t += tx;
// //Snow Skies Imp. End ------------------------------------>//
//         c.beginPath();        
//         // Gradient learning
//         gradient.addColorStop(.3, "rgb(255,255,255,0.9");
//         gradient.addColorStop(.3, "rgba(255,55,255,0.9");
//         gradient.addColorStop(.3, 'white');
        
//         c.fillStyle = gradient;
        
//         // The Sun
//         c.arc(t,tx,95,0, Math.PI * 2, false);
    
//         // Shadow
//         c.shadowBlur = 15;
//         c.shadowColor = 'yellow';
//         c.shadowOffsetY = 2
    
//         c.strokeStyle = "rgb(242,255,148,0.5)";
//         c.stroke();
//         c.fill();
//         c.closePath();
        
//         //Rectangle Gradients//
        
//         // Gradient "Box" -- which is the linear gradients for the rectangles//
//         box.addColorStop(.5, "rgb(215,15,0,0.1");
//         box.addColorStop(.5, 'white');
//         box.addColorStop(.3, "rgb(255,255,255,0.9");
        
//         //Rectangles
//         c.beginPath();
//         c.fillStyle = box;

// c.fillRect(t, 115, 5, 100);
// c.fillRect(450, 210, 155, 195);
// c.fillRect(245, 255, 100, 100);

// //Exit Door
// c.beginPath();
// //Styling additions to happen here
// c.fillRect(0, 147, 15, 35);

// //Stage Flooring
// c.beginPath();
// c.fillStyle = "rgb(255,255,255,1";
// c.fillRect(0, 380, 800, 100);

// //Stage Falling Skies

// // Line
// c.beginPath();
// c.strokeStyle = 'white'
// c.moveTo(0,165);
// c.lineTo(t,165);
// c.lineTo(300,300);
// c.lineTo(750, 300);
// c.stroke();

// // Text
// c.fillStyle = "rgb(0,0,0,0.1)";
// c.font = '12px serif';
// c.textAlign = 'left';
// c.fillText('Testing - 1.0a',25,35);


// // Arc around text "Bubble"//
// c.beginPath();

// c.arc(765,297, 15,0, Math.PI * 2, false)
// c.strokeStyle = "rgb(255,255,255,1)"
// c.fillStyle = "rgb(255,200,255,0.9";
// c.stroke();
// c.fill();


// }
//     }
//     animate();