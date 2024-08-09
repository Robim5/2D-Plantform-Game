// canvas setup
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// gravity
const gravity = 0.5;



let getGoal = false;

let totalScore = 0; // Total score accumulated
let currentChestScore = 0; // Score from chests collected in the current level
let lastscore = 0; // Displayed score

let player; 
let platforms = []; //just one
let walls = [];
let starGoal; //just one
let backs; //just one
let waters = [];
let chests = [];
let things = [];
let sands = [];
let currentLevel = 1;
// Player class
class Player {
    constructor() {
        this.position = { x: 120, y: 400 };
        this.velocity = { x: 0, y: 1 };
        this.width = 50;
        this.height = 50;
        this.speed = 4;
        this.gravity = gravity;
    }

    draw() {
        ctx.fillStyle = 'pink';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
        } else {
            //nothing
        }
    }
}

// Wall class
class Wall {
    constructor(x, y, width, height, image) {
        this.position = { x, y };
        this.width = width;
        this.height = height;
        this.image = image;
    }

    draw() {
        if (this.image.complete) {
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }
}
// Platform class
class Platform {
    constructor(x, y, width, height, image) {
        this.position = { x, y };
        this.width = width;
        this.height = height;
        this.image = image;
    }

    draw() {
        if (this.image.complete) {
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }
}
//water class
class Water {
    constructor(x, y, width, height, image) {
        this.position = { x, y };
        this.width = width;
        this.height = height;
        this.image = image;
    }

    draw() {
        if (this.image.complete) {
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }
}
// Background class
class Background {
    constructor(x, y, width, height, image) {
        this.position = { x, y };
        this.width = width;
        this.height = height;
        this.image = image;
    }

    draw() {
        if (this.image.complete) {
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }
}
// Goal class
class Goal {
    constructor(x, y, width, height, image) {
        this.position = { x, y };
        this.width = width;
        this.height = height;
        this.image = image;
    }

    draw() {
        if (this.image.complete) {
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }
}
class Chest {
    constructor(x, y, width, height, image) {
        this.position = { x, y };
        this.width = width;
        this.height = height;
        this.image = image;
    }

    draw() {
        if (this.image.complete) {
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }
}
class Thing {
    constructor(x, y, width, height, image) {
        this.position = { x, y };
        this.width = width;
        this.height = height;
        this.image = image;
    }

    draw() {
        if (this.image.complete) {
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }
}


class Sand {
    constructor(x, y, width, height, image) {
        this.position = { x, y };
        this.width = width;
        this.height = height;
        this.image = image;
    }

    draw() {
        if (this.image.complete) {
            ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        }
    }
}


// Image loader function
function CreateImages(src) {
    const image = new Image();
    image.src = src;
    return image;
}


// Initialize level 1 
function initLevel1() {
    player = new Player();
    walls = [
        new Wall(0, canvas.height - 90, 400, 90, CreateImages('img/wall.jpg')),
        new Wall(0, canvas.height - 100, 400, 10, CreateImages('img/earth.jpg')),
        new Wall(0, canvas.height - 150, 200, 70, CreateImages('img/wall.jpg')),
        new Wall(0, canvas.height - 150, 200, 10, CreateImages('img/earth.jpg')),
        new Wall(canvas.width / 2 - 100, canvas.height - 80, 600, 80, CreateImages('img/wall.jpg')),
        new Wall(canvas.width / 2 - 100, canvas.height - 90, 600, 10, CreateImages('img/earth.jpg')),
        new Wall(canvas.width / 2 - 30, canvas.height - 190, 400, 100, CreateImages('img/wall.jpg')),
        new Wall(canvas.width / 2 - 30, canvas.height - 200, 400, 10, CreateImages('img/earth.jpg')),
        new Wall(canvas.width / 3 - 490, canvas.height - 500, 360, 150, CreateImages('img/wall.jpg')),
        new Wall(canvas.width / 3 - 490, canvas.height - 510, 360, 10, CreateImages('img/earth.jpg')),
    ];
    platforms = [
        new Platform(canvas.width - 150, canvas.height - 550, 150, 50, CreateImages('img/earth.jpg')),
        new Platform(canvas.width - 150, canvas.height - 555, 150, 5, CreateImages('img/grass.jpg')),
        new Platform(canvas.width /3 - 80, canvas.height - 330, 100, 45, CreateImages('img/earth.jpg')),
        new Platform(canvas.width /3 + 10, canvas.height - 330, 100, 45, CreateImages('img/earth.jpg')),
        new Platform(canvas.width /3 - 80, canvas.height - 340, 190, 10, CreateImages('img/grass.jpg')),
        new Platform(canvas.width /3 - 90, canvas.height - 520, 100, 45, CreateImages('img/earth.jpg')),
        new Platform(canvas.width /3, canvas.height - 520, 100, 45, CreateImages('img/earth.jpg')),
        new Platform(canvas.width /3 - 90, canvas.height - 530, 190, 10, CreateImages('img/grass.jpg')),
        new Platform(canvas.width /1.8 - 130, canvas.height - 430, 150, 45, CreateImages('img/earth.jpg')),
        new Platform(canvas.width /1.8 - 130, canvas.height - 440, 150, 10, CreateImages('img/grass.jpg')),
        new Platform(canvas.width  - 480, canvas.height - 500, 150, 45, CreateImages('img/earth.jpg')),
        new Platform(canvas.width  - 480, canvas.height - 510, 150, 10, CreateImages('img/grass.jpg')),
        new Platform(canvas.width  - 180, canvas.height - 300, 150, 45, CreateImages('img/earth.jpg')),
        new Platform(canvas.width  - 180, canvas.height - 310, 150, 10, CreateImages('img/grass.jpg')),
    ];
    waters = [
        new Water(canvas.width / 3 - 65, canvas.height - 90, 198, 150, CreateImages('img/Mar.jpg')),
        new Water(canvas.width  - 250, canvas.height - 80, 250, 150, CreateImages('img/Mar.jpg')),
    ]
    chests = [
        new Chest(canvas.width / 3 - 410, canvas.height - 580, 100, 100, CreateImages('img/chest.png')),
        new Chest(canvas.width  - 160, canvas.height - 380, 100, 100, CreateImages('img/chest.png')),
    ]
    things = [
        new Thing(canvas.width / 3 - 500, canvas.height - 650, 110, 150, CreateImages('things/lantern1.png')),
        new Thing(canvas.width  / 3 - 500, canvas.height - 262, 150, 150, CreateImages('things/right.png')),
        new Thing(canvas.width  / 3 - 200, canvas.height - 620, 150, 150, CreateImages('things/left.png')),
        new Thing(canvas.width  - 75, canvas.height - 445, 110, 150, CreateImages('things/lantern2.png')),
        new Thing(canvas.width  /2 -100, canvas.height - 315, 350, 265, CreateImages('things/blacktrunk.png')),
        new Thing(canvas.width  - 330, canvas.height - 165, 100, 100, CreateImages('things/stone4.png')),
        new Thing(canvas.width  /2 - 30, canvas.height - 525, 100, 100, CreateImages('things/trash2.png')),
        new Thing(canvas.width  /2 - 320, canvas.height - 655, 170, 130, CreateImages('things/trunkgrass.png')),
        new Thing(canvas.width  /2 - 310, canvas.height - 445, 170, 130, CreateImages('things/fire.png')),
    ]
    starGoal = new Goal(canvas.width  - 100, 0, 100, 100, CreateImages('goal/star.png'));
    backs = new Background(0, 0, canvas.width, canvas.height, CreateImages('back/level1now4.jpg'));
}

//level 2
function initLevel2() {
    player = new Player();
    walls = [
        new Wall(0, canvas.height - 90, 230, 90, CreateImages('img/earth2.jpg')),
        new Wall(0, canvas.height - 100, 230, 10, CreateImages('img/grass2.jpg')),
        new Wall(canvas.width / 2 - 268, canvas.height - 90, 550, 90, CreateImages('img/earth2.jpg')),
        new Wall(canvas.width / 2 - 268, canvas.height - 90, 550, 10, CreateImages('img/grass2.jpg')),
        new Wall(canvas.width / 2 - 208, canvas.height - 190, 100, 100, CreateImages('img/earth2.jpg')),
        new Wall(canvas.width / 2 - 208, canvas.height - 190, 100, 10, CreateImages('img/grass2.jpg')),
        new Wall(canvas.width / 2 - 110, canvas.height - 310, 350, 220, CreateImages('img/earth2.jpg')),
        new Wall(canvas.width / 2 - 110, canvas.height - 315, 350, 10, CreateImages('img/grass2.jpg')),
        new Wall(canvas.width / 3 - 490, canvas.height - 420, 260, 120, CreateImages('img/earth2.jpg')),
        new Wall(canvas.width / 3 - 490, canvas.height - 430, 260, 10, CreateImages('img/grass2.jpg')),
        new Wall(canvas.width  - 360, canvas.height - 420, 360, 150, CreateImages('img/earth2.jpg')),
        new Wall(canvas.width  - 360, canvas.height - 430, 360, 10, CreateImages('img/grass2.jpg')),
    ];
    platforms = [
        new Platform(canvas.width /2 - 150, canvas.height - 550, 100, 50, CreateImages('img/grass3.jpg')),
        new Platform(canvas.width /2 - 50, canvas.height - 550, 100, 50, CreateImages('img/grass3.jpg')),
        new Platform(canvas.width /2 + 50, canvas.height - 550, 100, 50, CreateImages('img/grass3.jpg')),
        new Platform(canvas.width /2 + 150, canvas.height - 550, 100, 50, CreateImages('img/grass3.jpg')),
        new Platform(canvas.width /2 - 150, canvas.height - 555, 400, 5, CreateImages('img/grass.jpg')),
        new Platform(canvas.width /2 - 350, canvas.height - 500, 100, 50, CreateImages('img/grass3.jpg')),
        new Platform(canvas.width /2 - 350, canvas.height - 505, 100, 5, CreateImages('img/grass.jpg')),
        new Platform(canvas.width - 270, canvas.height - 150, 100, 50, CreateImages('img/grass3.jpg')),
        new Platform(canvas.width - 270, canvas.height - 155, 100, 5, CreateImages('img/grass.jpg')),
    ];
    waters = [
        new Water(canvas.width / 3 - 235, canvas.height - 80, 198, 150, CreateImages('img/Mar.jpg')),
        new Water(canvas.width  - 455, canvas.height - 300, 540, 550, CreateImages('img/water2.jpg')),
        new Water(canvas.width  - 220, canvas.height - 80, 230, 150, CreateImages('img/Mar.jpg')),
        new Water(canvas.width  - 415, canvas.height - 80, 200, 130, CreateImages('img/Mar.jpg')),
    ]
    chests = [
        new Chest(canvas.width / 3 - 460, canvas.height - 500, 100, 100, CreateImages('img/chest.png')),
        new Chest(canvas.width  - 240, canvas.height - 500, 100, 100, CreateImages('img/chest.png')),
    ]
    things = [
        new Thing(canvas.width / 3 - 460, canvas.height - 580, 200, 170, CreateImages('things/three4.png')),
        new Thing(canvas.width / 2 - 390, canvas.height - 660, 200, 170, CreateImages('things/three3.png')),
        new Thing(canvas.width  - 650, canvas.height - 192, 200, 100, CreateImages('things/warning.png')),
        new Thing(canvas.width  /2 - 90, canvas.height - 535, 270, 230, CreateImages('things/trunkgrass.png')),
        new Thing(canvas.width  /2 - 230, canvas.height - 295, 150, 130, CreateImages('things/fire.png')),
        new Thing(canvas.width  /3 - 530, canvas.height - 250, 170, 200, CreateImages('things/right.png')),
        new Thing(canvas.width  /2 + 500, canvas.height - 580, 200, 170, CreateImages('things/bigtree.png')),
        new Thing(canvas.width  /2 + 300, canvas.height - 580, 200, 170, CreateImages('things/bigtree.png')),
        new Thing(canvas.width  - 620, canvas.height - 460, 170, 200, CreateImages('things/right.png')),
        new Thing(canvas.width / 2 + 180, canvas.height - 605, 70, 70, CreateImages('things/grass2.png')),
        new Thing(canvas.width / 2 + 130, canvas.height - 605, 70, 70, CreateImages('things/grass.png')),
        new Thing(canvas.width / 2 + 80, canvas.height - 605, 70, 70, CreateImages('things/grass2.png')),
        new Thing(canvas.width / 2 + 30, canvas.height - 605, 70, 70, CreateImages('things/grass.png')),
        new Thing(canvas.width / 2 - 10, canvas.height - 605, 70, 70, CreateImages('things/grass2.png')),
        new Thing(canvas.width / 2 - 55, canvas.height - 605, 70, 70, CreateImages('things/grass.png')),
        new Thing(canvas.width / 2 - 95, canvas.height - 605, 70, 70, CreateImages('things/grass2.png')),
        new Thing(canvas.width / 2 - 145, canvas.height - 605, 70, 70, CreateImages('things/grass.png')),
    ]
    starGoal = new Goal(canvas.width  - 265, canvas.height - 245, 100, 100, CreateImages('goal/star.png'));
    backs = new Background(0, 0, canvas.width, canvas.height, CreateImages('back/level2back.jpg'));
}

//level 3
function initLevel3() {
    player = new Player();
    walls = [
        new Wall(0, canvas.height - 140, 290, 180, CreateImages('img/earthsand.jpg')),
        new Wall(0, canvas.height - 150, 290, 10, CreateImages('img/sand2.jpg')),
        new Wall(canvas.width / 2 - 230, canvas.height - 70, 450, 300, CreateImages('img/earthsand.jpg')),
        new Wall(canvas.width / 2 - 230, canvas.height - 70, 450, 10, CreateImages('img/sand2.jpg')),
        new Wall(canvas.width / 2 - 30, canvas.height - 210, 250, 140, CreateImages('img/earthsand.jpg')),
        new Wall(canvas.width / 2 - 30, canvas.height - 215, 250, 10, CreateImages('img/sand2.jpg')),
        new Wall(canvas.width  - 150, canvas.height - 250, 240, 260, CreateImages('img/earthsand.jpg')),
        new Wall(canvas.width - 150, canvas.height - 255, 250, 10, CreateImages('img/sand2.jpg')),
        new Wall(canvas.width  - 230, canvas.height - 150, 110, 170, CreateImages('img/earthsand.jpg')),
        new Wall(canvas.width - 230, canvas.height - 160, 85, 10, CreateImages('img/sand2.jpg')),
        new Wall(canvas.width  - 310, canvas.height - 100, 110, 120, CreateImages('img/earthsand.jpg')),
        new Wall(canvas.width - 310, canvas.height - 110, 85, 10, CreateImages('img/sand2.jpg')),
        new Wall(canvas.width / 3 - 490, canvas.height - 390, 180, 100, CreateImages('img/earthsand.jpg')),
        new Wall(canvas.width / 3 - 490, canvas.height - 400, 180, 10, CreateImages('img/sand2.jpg')),
        new Wall(canvas.width / 3 - 315, canvas.height - 390, 180, 100, CreateImages('img/earthsand.jpg')),
        new Wall(canvas.width / 3 - 315, canvas.height - 400, 180, 10, CreateImages('img/sand2.jpg')),
        new Wall(canvas.width / 3 - 490, canvas.height - 540, 180, 200, CreateImages('img/earthsand.jpg')),
        new Wall(canvas.width / 3 - 490, canvas.height - 550, 180, 10, CreateImages('img/sand2.jpg')),
        new Wall(canvas.width  - 220, canvas.height - 530, 110, 50, CreateImages('img/earthsand.jpg')),
        new Wall(canvas.width  - 110, canvas.height - 530, 110, 50, CreateImages('img/earthsand.jpg')),
        new Wall(canvas.width  - 330, canvas.height - 530, 110, 50, CreateImages('img/earthsand.jpg')),
        new Wall(canvas.width  - 330, canvas.height - 540, 330, 10, CreateImages('img/sand2.jpg')),
    ];
    platforms = [
        new Platform(canvas.width - 350, canvas.height - 390, 100, 30, CreateImages('img/sand2.jpg')),
        new Platform(canvas.width - 450, canvas.height - 390, 100, 30, CreateImages('img/sand2.jpg')),
        new Platform(canvas.width - 260, canvas.height - 390, 100, 30, CreateImages('img/sand2.jpg')),
        new Platform(canvas.width /2 - 180, canvas.height - 450, 100, 30, CreateImages('img/sand2.jpg')),
        new Platform(canvas.width /2 - 280, canvas.height - 450, 100, 30, CreateImages('img/sand2.jpg')),
        new Platform(canvas.width /2 + 10, canvas.height - 590, 100, 30, CreateImages('img/sand2.jpg')),
        new Platform(canvas.width /2 + 110, canvas.height - 590, 100, 30, CreateImages('img/sand2.jpg')),
        new Platform(canvas.width /2 + 10, canvas.height - 410, 100, 30, CreateImages('img/sand2.jpg')),
    ];
    sands = [
        new Platform(canvas.width - 450, canvas.height - 395, 290, 5, CreateImages('img/sand.jpg')),
        new Platform(canvas.width /2 - 280, canvas.height - 455, 200, 5, CreateImages('img/sand.jpg')),
        new Platform(canvas.width /2 + 10, canvas.height - 595, 200, 5, CreateImages('img/sand.jpg')),
        new Platform(canvas.width /2 + 10, canvas.height - 415, 100, 5, CreateImages('img/sand.jpg')),
    ]

    waters = [
        new Water(canvas.width / 3 - 175, canvas.height - 60, 180, 150, CreateImages('img/sand.jpg')),
        new Water(canvas.width  - 488, canvas.height - 100, 180, 150, CreateImages('img/sand.jpg')),
    ]
    chests = [
        new Chest(canvas.width / 3 - 440, canvas.height - 600, 80, 80, CreateImages('img/chest.png')),
        new Chest(canvas.width  - 240, canvas.height - 230, 100, 100, CreateImages('img/chest.png')),
        new Chest(canvas.width  /2 + 80, canvas.height - 665, 100, 100, CreateImages('img/chest.png')),
    ]
    things = [
        new Thing(canvas.width / 3 - 485, canvas.height - 840, 400, 300, CreateImages('things/desert1.png')),
        new Thing(canvas.width  -280, canvas.height - 640, 110, 110, CreateImages('things/bossthing.png')),
        new Thing(canvas.width / 3 - 300, canvas.height - 490, 100, 100, CreateImages('things/spacehelp.png')),
        new Thing(canvas.width /3 - 490, canvas.height - 260, 150, 150, CreateImages('things/right.png')),
        new Thing(canvas.width /3 - 70, canvas.height - 185, 200, 200, CreateImages('things/stone10.png')),
        new Thing(canvas.width /3 - 30, canvas.height - 185, 200, 200, CreateImages('things/stone10.png')),
        new Thing(canvas.width /3 + 100, canvas.height - 150, 100, 100, CreateImages('things/fire.png')),
        new Thing(canvas.width /3 + 160, canvas.height - 320, 300, 300, CreateImages('things/three10.png')),
        new Thing(canvas.width /3 + 100, canvas.height - 325, 300, 300, CreateImages('things/three11.png')),
        new Thing(canvas.width /3 + 90, canvas.height - 385, 300, 300, CreateImages('things/three12.png')),
        new Thing(canvas.width /3 + 330, canvas.height - 310, 100, 100, CreateImages('things/desert2.png')),
        new Thing(canvas.width /3 - 290, canvas.height - 380, 130, 80, CreateImages('things/warning3.png')),
        new Thing(canvas.width /2  + 15, canvas.height - 470, 80, 80, CreateImages('things/stones2.png')),
        new Thing(canvas.width /2  - 195, canvas.height - 520, 100, 100, CreateImages('things/fox1.png')),
        new Thing(canvas.width /2  - 265, canvas.height - 520, 100, 100, CreateImages('things/fox2.png')),
        new Thing(canvas.width  - 335, canvas.height - 200, 140, 140, CreateImages('things/fox1.png')),
        new Thing(canvas.width  /2 + 30, canvas.height - 683, 100, 100, CreateImages('things/lantern2.png')),
        new Thing(canvas.width  - 135, canvas.height - 294, 60, 60, CreateImages('things/apple.png')),
        new Thing(canvas.width  - 105, canvas.height - 294, 60, 60, CreateImages('things/apple.png')),
        new Thing(canvas.width  - 75, canvas.height - 294, 60, 60, CreateImages('things/apple.png')),
        new Thing(canvas.width  - 505, canvas.height - 514, 200, 200, CreateImages('things/stone10.png')),
        new Thing(canvas.width  - 465, canvas.height - 514, 200, 200, CreateImages('things/stone10.png')),
        new Thing(canvas.width  - 425, canvas.height - 514, 200, 200, CreateImages('things/stone10.png')),
        new Thing(canvas.width  - 385, canvas.height - 514, 200, 200, CreateImages('things/stone10.png')),
        new Thing(canvas.width  - 335, canvas.height - 514, 200, 200, CreateImages('things/stone10.png')),
    ]
    starGoal = new Goal(canvas.width  - 60, canvas.height - 610, 70, 70, CreateImages('goal/star.png'));
    backs = new Background(0, 0, canvas.width, canvas.height, CreateImages('back/level3.jpg'));
    space = true; // Enable space jump when Level 3 starts
    canJump = true; // Reset canJump flag if needed
}


// Animation function
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    backs.draw();
    waters.forEach(water => water.draw());
    platforms.forEach(platform => platform.draw());
    if (sands) sands.forEach(sand => sand.draw());
    walls.forEach(wall => wall.draw());
    things.forEach(thing => thing.draw());

    // Draw and check collision with chests
    chests.forEach((chest, index) => {
        chest.draw();
        if (player.position.x < chest.position.x + chest.width &&
            player.position.x + player.width > chest.position.x &&
            player.position.y < chest.position.y + chest.height &&
            player.position.y + player.height > chest.position.y) {
            console.log("Chest collected"); // Debugging
            chests.splice(index, 1); // Remove chest from array
            updateScore(300); // Add chest score to total and display
        }
    });

    starGoal.draw();
    player.update();

    // Player movement
    if (keys.ArrowRight) {
        player.velocity.x = player.speed;
    } else if (keys.ArrowLeft) {
        player.velocity.x = -player.speed;
    } else {
        player.velocity.x = 0;
    }

    let isOnGround = true;
    platforms.forEach(platform => {
        checkCollisionWithPlatformOrWall(platform, 'platform');
    });
    walls.forEach(wall => {
        checkCollisionWithPlatformOrWall(wall, 'wall');
    });
    sands.forEach(sand => {
        checkCollisionWithPlatformOrWall(sand, 'sand');
    });

    // Collision with water
    let inWater = false;
    waters.forEach(water => {
        if (player.position.x < water.position.x + water.width &&
            player.position.x + player.width > water.position.x &&
            player.position.y + player.height > water.position.y &&
            player.position.y < water.position.y + water.height) {
            inWater = true;
            player.gravity = 0.05; // Low gravity for floating effect
            player.velocity.y *= 0.65; // Slow down the fall speed
            player.speed = 1.5; // Reduced horizontal speed
            isOnGround = false;
        }
    });

    // Collision with sands
    let inSand = false;
    if (sands) sands.forEach(sand => {
        if (player.position.y >= sand.position.y + sand.height &&
            player.position.y + player.velocity.y <= sand.position.y + sand.height &&
            player.position.x + player.width > sand.position.x &&
            player.position.x < sand.position.x + sand.width) {
                inSand = true;
                player.velocity.y *= 0.5;
                inWater = false;
        }
    });

    if (!inSand && !inWater) {
        player.gravity = 0.5; // Normal gravity outside of water
        player.speed = 4; // Normal speed outside of water
    }

    // Apply gravity if the player is not on the ground
    if (!isOnGround) {
        player.velocity.y += player.gravity;
    }

    // Lost condition: Restart level if player falls off the screen
    if (player.position.y > canvas.height) {
        console.log("Player fell off the screen"); // Debugging
        resetLevel();
    }

    // Win condition
    if (player.position.x < starGoal.position.x + starGoal.width &&
        player.position.x + player.width > starGoal.position.x &&
        player.position.y + player.height >= starGoal.position.y &&
        player.position.y < starGoal.position.y + starGoal.height) {
        console.log("Goal reached"); // Debugging
        getGoal = true;
        SeeLevel(); // Transition to the next level
    }
}

//function to put the score
const scoreDiplay = document.getElementById("score");
function updateScore(bonus) {
    totalScore += bonus;
    currentChestScore += bonus;
    lastscore = totalScore; // Update displayed score
    scoreDiplay.innerText = lastscore; // Display the current score
}

// Check current level and move to the next
function SeeLevel() {
    console.log("getGoal:", getGoal, "currentLevel:", currentLevel);
    
    if (getGoal) {
        if (currentLevel === 1) {
            console.log("Moving to Level 2");
            currentLevel++;
            initLevel2();
            totalScore += 500; // Bonus for completing the level
            currentChestScore = 0; // Reset chest score
            getGoal = false;
            updateScore(0); // Update the score display
        } else if (currentLevel === 2) {
            console.log("Moving to Level 3");
            currentLevel++;
            initLevel3();
            totalScore += 500; // Bonus for completing the level
            currentChestScore = 0; // Reset chest score
            getGoal = false;
            updateScore(0); // Update the score display
            space = true
        } else {
            alert('Congratulations! You have completed the game.');
        }
    }
}


function resetLevel() {
    // Deduct chest score from total score when player dies
    totalScore -= currentChestScore; 
    lastscore = totalScore; // Update displayed score

    // Reset level-specific variables
    currentChestScore = 0; // Reset chest score for the new level
    
    if (currentLevel === 1) {
        initLevel1();
    } else if (currentLevel === 2) {
        initLevel2();
    } else if (currentLevel === 3) {
        initLevel3();
    } else {
        console.log("No valid level to reset");
    }
    
    updateScore(0); // Update the score display after resetting
}

// Function to check platform collisions
function checkCollisionWithPlatformOrWall(rect, type) {
    let collided = false;

    // Check collision from the bottom (falling onto the platform/wall)
    if (player.position.y + player.height <= rect.position.y &&
        player.position.y + player.height + player.velocity.y >= rect.position.y &&
        player.position.x + player.width > rect.position.x &&
        player.position.x < rect.position.x + rect.width) {

        player.velocity.y = 0;
        player.position.y = rect.position.y - player.height;
        collided = true;
    }

    // Check collision from the top (moving upwards into the platform/wall)
    if (player.position.y >= rect.position.y + rect.height &&
        player.position.y + player.velocity.y <= rect.position.y + rect.height &&
        player.position.x + player.width > rect.position.x &&
        player.position.x < rect.position.x + rect.width) {

        player.velocity.y = 0;
        player.position.y = rect.position.y + rect.height;
        collided = true;
    }

    // Check collision from the right (moving right into the platform/wall)
    if (player.position.x + player.width <= rect.position.x &&
        player.position.x + player.width + player.velocity.x >= rect.position.x &&
        player.position.y + player.height > rect.position.y &&
        player.position.y < rect.position.y + rect.height) {

        player.velocity.x = 0;
        player.position.x = rect.position.x - player.width;
        collided = true;
    }

    // Check collision from the left (moving left into the platform/wall)
    if (player.position.x >= rect.position.x + rect.width &&
        player.position.x + player.velocity.x <= rect.position.x + rect.width &&
        player.position.y + player.height > rect.position.y &&
        player.position.y < rect.position.y + rect.height) {

        player.velocity.x = 0;
        player.position.x = rect.position.x + rect.width;
        collided = true;
    }

    return collided;
}

let keys = {
    ArrowUp: false,
    ArrowLeft: false,
    ArrowRight: false
};

let canJump = true; // Flag to check if the player can jump
let jumpCooldown = 1000; // Cooldown period in milliseconds (1 second)
let space = false; // Set space to false initially

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') {
        keys.ArrowRight = true;
    } else if (e.key === 'ArrowLeft') {
        keys.ArrowLeft = true;
    } else if (e.key === 'ArrowUp') {
        if (player.velocity.y === 0 && canJump) {
            player.velocity.y = -12;   
        }
        keys.ArrowUp = true;
    }

    // Press space to jump higher if allowed
    if (space) {  // Check if space jumping is enabled for this level
        if (e.key === ' ' && canJump) { // Allow jumping if cooldown permits
            player.velocity.y = -17; // Jump higher
            canJump = false; // Disable jumping until cooldown expires
            setTimeout(() => {
                canJump = true; // Re-enable jumping after cooldown period
            }, jumpCooldown);
        }
    }
});

document.addEventListener('keyup', e => {
    if (e.key === 'ArrowRight') {
        keys.ArrowRight = false;
    } else if (e.key === 'ArrowLeft') {
        keys.ArrowLeft = false;
    } else if (e.key === 'ArrowUp') {
        keys.ArrowUp = false;
    }
});

function showLevel() {
    switch (currentLevel) {
      case 1:
        initLevel1();
        animate();
        break;
      case 2:
        initLevel2();
        animate();
        break;
      case 3:
        initLevel3();
        animate();
        break;
      default:
        console.log('Invalid level');
    }
}
showLevel();
