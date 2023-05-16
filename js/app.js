'use strict';

// GLOBALS  //

let votingRounds = 25;
let duckArray = [];

// ***** DOM WINDOWS ****
let imageContainer = document.getElementById('img-container');
let imageOne = document.getElementById('img-one');
let imageTwo = document.getElementById('img-two');
let imageThree = document.getElementById('img-three');
let resultButton = document.getElementById('show-results-btn');
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

// Three unique products
function renderImages(){
  let imageOneIndex = randomIndexGenerator();
  let imageTwoIndex = randomIndexGenerator();
  let imageThreeIndex = randomIndexGenerator();
}

// fix
while(imageOneIndex === imageTwoIndex || imageOneIndex === imageThreeIndex || imageTwoIndex === imageThreeIndex){
  imageTwoIndex = randomIndexGenerator();
  imageThreeIndex = randomIndexGenerator();
}

//end fix

imageOne.src = duckArray[imageOneIndex].image;
imageOne.title = duckArray[imageOneIndex].name;

imageTwo.src = duckArray[imageTwoIndex].image;
imageTwo.title = duckArray[imageTwoIndex].name;

imageThree.src = duckArray[imageThreeIndex].image;
imageThree.title = duckArray[imageThreeIndex].name;

// DONE: Increase the goats views
duckArray[imageOneIndex].views++;
duckArray[imageTwoIndex].views++;
duckArray[imageThreeIndex].views++;
}


// **** EVENT HANDLERS ****
function handleImgClick(event){

let imageClicked = event.target.title;

for(let i = 0; i < duckArray.length; i++){
  if(imageClicked === duckArray[i].name){
    duckArray[i].votes++;
    votingRounds--;
    renderImages();
  }
}
if(votingRounds === 0){
  imageContainer.removeEventListener('click', handleImgClick);
}

}

function handleShowResults(){
if(votingRounds === 0){
  for(let i = 0; i < goatArray.length; i++){
    let duckListItem = document.createElement('li');

    duckListItem.textContent = `${duckArray[i].name} - Votes: ${duckArray[i].votes} & Views: ${duckArray[i].views}`;

    resultList.appendChild(duckListItem);
  }
  resultButton.removeEventListener('click', handleShowResults);
}
}

//



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

renderImages();

imageContainer.addEventListener('click', handleImgClick);
resultButton.addEventListener('click', handleShowResults);






