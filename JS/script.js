"homepage"; "https://citrusdivided.github.io/"

anime({
    targets: ['.curtainRight', '.curtainLeft'],
    scaleY: 1.6,
    easing: 'spring(1, 80, 10, 0)'
})

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

canvas.width = 600;
canvas.height = 960;

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
});

// const divAnimation = anime({
//     targets: '.curtainBottomLeft, .curtainLeft, .curtainCenterMass, .curtainRight, .curtainBottomRight, .curtainSlate',
//     scale: 1,
//     translateX: [0,0,0,0],
//     translateY: [0,0,300,0],
//     elasticity: 110,
//     easing: 'linear',
//     autoplay: false,
//     opacity: 1
// });

// const scrollPercent = () => {
//     const bodyST = document.body.scrollTop;
//     const docST =
// document.documentElement.scrollTop;
//     const docSH =
// document.documentElement.scrollHeight;
//     const docCH =
// document.documentElement.clientHeight;

//     return (docST + bodyST) / (docSH - docCH) * 100
// }

// window.onscroll = () => {
//     divAnimation.seek((scrollPercent() / 100) * 
// divAnimation.duration);
// };
// Interaction Set -- END //
