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