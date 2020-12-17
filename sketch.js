var dog, happyDog, database, foodS, foodStock
var dogImg
function preload(){
dogImg = loadImage('images/dogImg.png')
happyDog = loadImage('images/dogImg1.png')
}

function setup() {
createCanvas(500, 500);
dog = createSprite(250,250,1,1)
dog.addImage(dogImg)
database = firebase.database()
foodStock = database.ref('food')
foodStock.on("value", readStock)
dog.scale = 0.2
}


function draw() {
background(46,139,87)
if(keyCode == 87){
writeStock(foodS)
dog.addImage(happyDog)
}
drawSprites();
textSize(20)
fill(28,215,164)
text('press w to feed gading milk ngl',80,100)
text("You have: " + foodS + " Milk left",100,70);
}

function readStock(data){
foodS = data.val()
}

function writeStock(x){
if(x<=0){
x=0
}
else{
x = x-1;
}
database.ref('/').update({
food : x
})
}



