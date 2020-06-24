let scenarioBackground;
let characterImage;
let enemyImage;
let scenario;
let character;
let enemy;
let gameSound;
let jumpSound;

function preload() 
{
  scenarioBackground = loadImage('images/scenario/forest.png');
  characterImage = loadImage('images/character/running.png');
  enemyImage = loadImage('images/enemies/drop.png');
  gameSound = loadSound('sounds/trilha_jogo.mp3');
  jumpSound = loadSound('sounds/jumpSound.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(scenarioBackground, 3);
  character = new Character(characterImage, 880, 1080, 4, 4, 0);
  enemy = new Enemy(enemyImage, 420, 700, 4, 7, width - 52);
  frameRate(30);
  gameSound.loop();
}

function keyPressed() {
  if (key === 'ArrowUp') {

    character.jump();
    jumpSound.play();
    
  }
}

function touchEnded() {
    character.jump();
    jumpSound.play();
}

function draw() {
  scenario.show();
  scenario.move();
  character.show();
  character.applyGravity();
  enemy.show();
  enemy.move();

  if (character.isColliding(enemy)) {
    console.log('Colidiu');
    noLoop();
  }
  
}

