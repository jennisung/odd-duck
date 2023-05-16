'use strict';

// ***** GLOBALS ******

let votingRounds = 25;
let duckArray = [];

// ***** DOM WINDOWS ****
let imageContainer = document.getElementById('img-container');
let imageOne = document.getElementById('img-one');
let imageTwo = document.getElementById('img-two');
let imageThree = document.getElementById('img-two');
let resultButton = document.getElementById('results-button');
let resultList = document.getElementById('results-container');

// **** CONSTRUCTOR FUNCTION ****

function Duck(name, imageExtension = 'jpg') {
  this.name = name;
  this.image = `img/${name}.${imageExtension}`;
  this.votes = 0;
  this.views = 0;
}

// **** HELPER FUNCTIONS / UTILITIES ****

function randomIndexGenerator(){
  return Math.floor(Math.random() * duckArray.length);
}

function renderImgs(){
  let imageOneIndex = randomIndexGenerator();
  let imageTwoIndex = randomIndexGenerator();
  let imageThreeIndex = randomIndexGenerator();
}



// **** EXECUTABLE CODE ****

let bag = new Item('bag');
let banana = new Item('banana');
let bathroom = new Item('bathroom');
let boots = new Item('boots');
let breakfast = new Item('breakfast');
let bubblegum = new Item('bubblegum');
let chair = new Item('chair');
let cthulhu = new Item('cthulhu');
let dogDuck = new Item('dog-duck');
let dragon = new Item('dragon');
let pen = new Item('pen');
let petSweep = new Item('pet-sweep');
let scissors = new Item('scissors');
let shark = new Item('shark');
let sweep = new Item('sweep', 'png');
let tauntaun = new Item('tauntaun');
let unicorn = new Item('unicorn');
let watercan = new Item('water-can');
let wineglass = new Item('wine-glass');

duckArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, watercan, wineglass);

renderImgs();

imageContainer.addEventListener('click', handleImgClick);
resultButton.addEventListener('click', handleShowResults);
