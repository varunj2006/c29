function preload() {
  //load game assets
 wormimage=loadImage("images/worm.png")
 swampimage=loadImage("images/swampImg.png")
 frogimage=loadImage("images/frog.png")
}
var player;
function setup() {
  createCanvas(600,600);
player=createSprite(40,550,30,30);
varungroup=new Group();
  }

function draw() {
  background("black");  
   player.x=mouseX;
   player.y=mouseY;
   for(var i=0;i<(varungroup).length;i++){
  var temp=(varungroup).get(i);
  if(player.isTouching(temp))
  {
  temp.destroy();
  temp=null;

  }
}
console.log(frameCount);
   worms();
   drawSprites();
}
function worms(){
  if(frameCount%30===0){
    var worm=createSprite(random(40,380),random(200,380)
    ,40,5);
   worm.addImage(wormimage);
    worm.shapeColor="green";
    worm.velocityX=random(-4,+4);
   worm.velocityY=random(-4,+4);
   varungroup.add(worm);


  }


}


