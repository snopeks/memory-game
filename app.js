console.log('js is running')
var cardArray = [];

$(document).ready(function(){
  generateBoard()

  $('img').on('click', function(){
      console.log($(this), " is this from click event listener")
      //make this image = the frontImage
      //get the src from the flip image somehow!
      var currentId = this.id;
      //pass in the clicked id to the flip function and find
      //the right front-image
      flip(currentId)
  })
});

var cardData = [
  {
    frontImage: "images/8-hearts.png",
    value: 8,
    id: "one"
  },
  {
    frontImage: "images/8-spades.png",
    value: 8,
    id: "two"

  },
  {
    frontImage: "images/10-spades.png",
    value: 10,
    id: "three"
  },
  {
    frontImage: "images/10-hearts.png",
    value: 10,
    id: "four"

  }
]

function Card(cardData) {
  this.frontImage = cardData.frontImage;
  this.backImage = "images/back.jpeg";
  this.value = cardData.value;
  this.id = cardData.id;
}

function flip(clickedId){
  console.log('in the flip')
  //loop through the array, find the card that has the id that we clicked.
  for (var i = 0; i < cardArray.length; i++){
    if(clickedId === cardArray[i].id){
      console.log("ids match!")
      $("#"+clickedId).attr("src", `${cardArray[i].frontImage}`)
    }
  }
}
//Create the board
function generateBoard(){
  console.log('generate the board')
  //create an array that will hold our cards
  for(var i = 0; i < cardData.length; i ++) {
    //create a new card with my constructor
    var card = new Card(cardData[i])
    cardArray.push(card)
    //once the card is created, append it to the div
    //including the id and value
    //and show the back image by default.
    $('div').append(`<img src=${card.backImage} value=${card.value} id=${card.id}></>`);
    console.log(card.frontImage)
  }
}
console.log("this is card Array",cardArray)