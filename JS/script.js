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
    targets: ['#imageDec'],
    duration: 10000,
    rotateY: 360,
    loop: false,
    scaleY: 1,
    direction: 'normal',
    easing: 'spring(1, 80, 10, 0)'

})



var scannerColoring = anime.timeline({
    endDelay: 1000,
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true,
})
.add({ targets: ['#pageHeadlineHoloSheen', 'hr', '#imageDec',], background: 'rgb(150,0,0, 1' }, 1)


// Interaction //

// function toggleVisibility() {
//     const content = document.getElementById('content1');
//     content.classList.toggle('menu-collapse');
// }

function toggleVisibility(id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.toggle('menu-collapse');
    } else {
        console.error(`Element with id '${id}' not found.`);
    }
}

function toggleMultipleElements() {
    toggleVisibility('content1');
    toggleVisibility('content2');
    toggleVisibility('content3');
    toggleVisibility('content4');
}
