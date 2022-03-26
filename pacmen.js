var pos = 0;
const pacArray = [
    ['./PacMan1.png', './PacMan2.png'],
    ['./PacMan3.png', './PacMan4.png'],
];
var direction = 0;
const pacMen = [];

function setToRandom(scale) {
    return {
        x: Math.random() * scale,
        y: Math.random() * scale,
    };
}
// PacMan factory to make a lot PacMen
function makePac() {
    // returns an object with values scaled {x: 33, y: 21}
    let velocity = setToRandom(10);
    let position = setToRandom(200);
    // Add PacMan image to div id = game
    let game = document.getElementById('game');
    let newimg = document.createElement('img');
    newimg.style.position = 'absolute';
    newimg.src = './PacMan1.png';
    newimg.width = 100;
    newimg.style.left = position.x;
    newimg.style.top = position.y;
    game.appendChild(newimg);
    // Style creating an object
    return {
        position,
        velocity,
        newimg,
    };
}

function update() {
    //Loop over PacMen array and move each one and move image in DOM
    pacMen.forEach((item) => {
        checkCollisions(item);
        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;

        item.newimg.style.left = item.position.x;
        item.newimg.style.top = item.position.y;
    });
    setTimeout(update, 20);
}

function checkCollisions(item) {
    if (
        item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
        item.position.x + item.velocity.x < 0
    )
        item.velocity.x = -item.velocity.x;
    if (
        item.position.y + item.velocity.y + item.newimg.height > window.innerHeight ||
        item.position.y + item.velocity.y < 0
    )
        item.velocity.y = -item.velocity.y;
}

// Adds a new PacMan
function makeOne() {
    pacMen.push(makePac());
}