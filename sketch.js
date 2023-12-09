var down,up,left,right;
var shurikein;
var obstaclesGroup;
var obstaclesGroup2;
function preload() {
  shurikeinAnimation=loadAnimation("assets/s1.png","assets/s2.png");
  downImage=  loadImage("assets/down.png");
  upImage=loadImage("assets/up.png");
  rightImage=loadImage("assets/right.png");
  leftImage=loadImage("assets/left.png");
  downImage1=  loadImage("assets/down1.png");
  upImage1=loadImage("assets/up1.png");
  rightImage1=loadImage("assets/right1.png");
  leftImage1=loadImage("assets/left1.png");

}

function setup() {
  obstaclesGroup=createGroup();
  obstaclesGroup2=createGroup();
  canvas = createCanvas(windowWidth,windowHeight);
  shurikein=createSprite(width/2-120,height/4,100,100);
  shurikein.addAnimation("shurikein",shurikeinAnimation);
  shurikein2=createSprite(width/2-120,height-200,100,100);
  shurikein2.addAnimation("shurikein",shurikeinAnimation);
  shurikein.scale=0.3;
  shurikein2.scale=0.3;
  up1=createSprite(width-400,height-570,100,100);
  up1.addImage("up1",upImage1);
  up1.scale=0.2;
  down1=createSprite(width-400,height-620,100,100);
  down1.addImage("down1",downImage1);
  down1.scale=0.2;
  right1=createSprite(width-450,height-595,100,100);
  right1.addImage("right1",rightImage1);
  right1.scale=0.2;
  left1=createSprite(width-350,height-595,100,100);
  left1.addImage("left1",leftImage1);
  left1.scale=0.2;
  up=createSprite(width-400,height-220,100,100);
  up.addImage("up",upImage);
  up.scale=0.2;
  down=createSprite(width-400,height-170,100,100);
  down.addImage("down",downImage);
  down.scale=0.2;
  right=createSprite(width-350,height-195,100,100);
  right.addImage("right",rightImage);
  right.scale=0.2;
  left=createSprite(width-450,height-195,100,100);
  left.addImage("left",leftImage);
  left.scale=0.2;
  var wi=width;
  var n =wi/15;
  var x=0;
  var y = 0;
  for(var i = 0;i<n;i++){
    rectangle(x,height-710,15,50);
    x+=30;
  }
  for(var i = 0;i<n;i++){
    rectangle2(y,height-30,15,50);
    y+=30;
  }
}

function draw() {
  background("white");
 
  if (mousePressedOver(up)) {
  shurikein2.y-=2;    
  }
  if (mousePressedOver(down)) {
    shurikein2.y+=2;    
    }
  if (mousePressedOver(right)) {
      shurikein2.x+=2;    
      }
  if (mousePressedOver(left)) {
        shurikein2.x-=2;    
        }
  if (mousePressedOver(up1)) {
          shurikein.y+=2;    
          }
  if (mousePressedOver(down1)) {
            shurikein.y-=2;    
            }
  if (mousePressedOver(right1)) {
              shurikein.x-=2;    
              }
  if (mousePressedOver(left1)) {
                shurikein.x+=2;    
                }
  if (shurikein.collide(shurikein2)) {
    shurikein.destroy();
    shurikein2.destroy();
    shurikein=createSprite(width/2-120,height/4,100,100);
    shurikein.addAnimation("shurikein",shurikeinAnimation);
    shurikein2=createSprite(width/2-120,height-200,100,100);
    shurikein2.addAnimation("shurikein",shurikeinAnimation);
    shurikein.scale=0.3;
    shurikein2.scale=0.3;
  }
  if (shurikein.overlap(obstaclesGroup2,function(collector,collected){
    collected.remove();
    shurikein.destroy();
    shurikein=createSprite(width/2-120,height/4,100,100);
    shurikein.addAnimation("shurikein",shurikeinAnimation);
    shurikein.scale=0.3;
  })) {}
  if (shurikein2.overlap(obstaclesGroup,function(collector,collected){
    collected.remove();
    shurikein2.destroy();
    shurikein2=createSprite(width/2-120,height-200,100,100);
    shurikein2.addAnimation("shurikein",shurikeinAnimation);
    shurikein2.scale=0.3;
  })) {}
    if (obstaclesGroup.length==0) {
      won();
    }
    if (obstaclesGroup2.length==0) {
      won();
    }
  
  drawSprites();
}

function rectangle(x,y,w,h) {
var obs;
obs=createSprite(x,y,w,h);
obs.shapeColor="red"
obstaclesGroup.add(obs)
}
function rectangle2(x,y,w,h) {
  var obs2;
  obs2=createSprite(x,y,w,h);
  obs2.shapeColor="red"
  obstaclesGroup2.add(obs2)
  }
  function won() {
    swal({
      title: `Awesome!${"\n"}You Won.You${"\n"}defeated${"\n"}your${"\n"}partner`,
      text: "Better luck next time.",
      imageUrl:
        "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
      imageSize: "100x100",
      confirmButtonText: "Ok"
    });}
    