var canvas
var tom,jerry
function preload() {
bg=loadImage("images/garden.png")
tomimage1=loadAnimation("images/cat1.png");
tomimage2=loadAnimation("images/cat2.png");
tomimage3=loadAnimation("images/cat3.png");
tomimage4=loadAnimation("images/cat4.png");

jerryimage1=loadAnimation("images/mouse1.png");
jerryimage2=loadAnimation("images/mouse2.png");
jerryimage3=loadAnimation("images/mouse3.png");
jerryimage4=loadAnimation("images/mouse4.png");
    //load the images here

}

function setup(){
    
  canvas=  createCanvas(1000,800);
  tom=createSprite(870,600);
  tom.addAnimation("sleeping",tomimage1);
  tom.scale=0.2

  jerry=createSprite(200,600);
  jerry.addAnimation("running",jerryimage1);
  jerry.scale=0.15
    //create tom and jerry sprites here

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
     { tom.velocityX=0;
         tom.addAnimation("tomLastImage", tomimage4);
          tom.x =300; tom.scale=0.2;
           tom.changeAnimation("tomLastImage");
            jerry.addAnimation("jerryLastImage", jerryimage4);
             jerry.scale=0.15;
     jerry.changeAnimation("jerryLastImage"); }
    drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW);
    tom.velocityX=-5;
    tom.addAnimation("tomrunning",tomimage2);
    tom.changeAnimation("tomrunning")
    jerry.addAnimation("jerryteasing",jerryimage2);
    jerry.frameDelay=25
jerry.changeAnimation("jerryteasing")
  //For moving and changing animation write code here


}
