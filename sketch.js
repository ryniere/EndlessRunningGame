let scenarioBackground;
let characterImage;
let scenario;
let character;
let gameSound;

function preload() 
{
  scenarioBackground = loadImage('images/scenario/forest.png');
  characterImage = loadImage('images/character/running.png');
  gameSound = loadSound('sounds/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(scenarioBackground, 3);
  character = new Character(characterImage);
  frameRate(40);
  gameSound.loop();
}

function draw() {
  scenario.show();
  scenario.move();
  character.show();
  
}

