'use strict';

// ***** GLOBALS ******
let userVotes = 25;
let productArray = [];




// ***** DOM WINDOWS ****
let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let resultBtn = document.getElementById('show-results-btn');
let resultsList = document.getElementById('results-container');




// **** CONSTRUCTOR FUNCTION ****
function Product(name, imageExtension = 'jpg'){
  this.name = name;
  this.image = `img/${name}.${imageExtension}`;
  this.votes = 0;
  this.views = 0;
}



// **** HELPER FUNCTIONS / UTILITIES ****
function indexGenerator(){
  return Math.floor(Math.random() * productArray.length);
}

function renderImgs(){
  let imageOneIndex = indexGenerator();
  let imageTwoIndex = indexGenerator();
  let imageThreeIndex = indexGenerator();

  while(imageOneIndex === imageTwoIndex || imageOneIndex === imageThreeIndex || imageTwoIndex === imageThreeIndex){
    imageTwoIndex = indexGenerator();
    imageThreeIndex = indexGenerator();
  }

  imgOne.src = productArray[imageOneIndex].image;
  imgOne.title = productArray[imageOneIndex].name;

  imgTwo.src = productArray[imageTwoIndex].image;
  imgTwo.title = productArray[imageTwoIndex].name;

  imgThree.src = productArray[imageThreeIndex].image;
  imgThree.title = productArray[imageThreeIndex].name;


  productArray[imageOneIndex].views++;
  productArray[imageTwoIndex].views++;
  productArray[imageThreeIndex].views++;
}




// **** EVENT HANDLERS ****
function handleImgClick(event){
  let imageClicked = event.target.title;

  for(let i = 0; i < productArray.length; i++){
    if(imageClicked === productArray[i].name){
      productArray[i].votes++;
      userVotes--;

      renderImgs();
    }
  }


  if(userVotes === 0){
    imgContainer.removeEventListener('click', handleImgClick);
  }

}

function handleShowResults(){
  if(userVotes === 0){
    for(let i = 0; i < productArray.length; i++){
      let goatListItem = document.createElement('li');

      goatListItem.textContent = `${productArray[i].name} - Votes: ${productArray[i].votes} & Views: ${productArray[i].views}`;

      resultsList.appendChild(goatListItem);
    }
    resultBtn.removeEventListener('click', handleShowResults);
  }
}

// **** EXECUTABLE CODE *****
let bag = new Product('bag');
let banana = new Product('banana');
let bathroom = new Product('bathroom');
let boots = new Product('boots');
let breakfast = new Product('breakfast');
let bubblegum = new Product('bubblegum');
let chair = new Product('chair');
let cthulhu = new Product('cthulhu');
let dogduck = new Product('dog-duck');
let dragon = new Product('dragon');
let pen = new Product('pen');
let petsweep = new Product('pet-sweep');
let scissors = new Product('scissors');
let shark = new Product('shark');
let sweep = new Product('sweep', 'png');
let tauntaun = new Product('tauntaun');
let unicorn = new Product('unicorn');
let watercan = new Product('water-can');
let wineglass = new Product('wine-glass');


productArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, watercan, wineglass);


renderImgs();

imgContainer.addEventListener('click', handleImgClick);
resultBtn.addEventListener('click', handleShowResults);
