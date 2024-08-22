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

//expansion of certification

function toggleExpansionCert() {
    var elements = document.querySelectorAll('#certExpand');
    elements.forEach(function(element) {
        element.classList.toggle('menu-expand');
    });    
}

function toggleCollapseCert() {
    var elements = document.querySelectorAll('#menu-collapse-1');
    elements.forEach(function(element) {
        element.classList.toggle('.menu-collapse-1');
    });
}

//expansion of toolset

function toggleExpansionTool() {
    var elements = document.querySelectorAll('#toolExpand');
    elements.forEach(function(element) {
        element.classList.toggle('menu-expand');
    });    
}

function toggleCollapseTool() {
    var elements = document.querySelectorAll('#menu-collapse-2');
    elements.forEach(function(element) {
        element.classList.toggle('.menu-collapse-2');
    });
}

//expansion of consult

function toggleExpansionConsult() {
    var elements = document.querySelectorAll('#consultExpand');
    elements.forEach(function(element) {
        element.classList.toggle('menu-expand');
    });    
}

function toggleCollapseConsult() {
    var elements = document.querySelectorAll('#menu-collapse-3');
    elements.forEach(function(element) {
        element.classList.toggle('.menu-collapse-3');
    });
}