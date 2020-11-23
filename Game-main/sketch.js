var blockR,blockL;
var box,ground,ground1;
var Ypos ;
var blockR1;
var blockG;
var bg1,bg2,M1,M2,M3;
var back, gameState;

function preload(){
	bg1 = loadImage("images/background.jpg");
	bg2 = loadImage("images/background2.jpg");
	M1 = loadImage("images/Monster1.png");
	M2 = loadImage("images/Monster2.png");
	M3 = loadImage("images/Monster3.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	back = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
	back.scale = 3;
	back.addImage("BG1",bg2);
	box = createSprite(windowWidth/2,windowHeight-20,50,50);
	box.addImage(M3);
	box.scale = 0.45;
	ground = createSprite(windowWidth/2,windowHeight-10,windowWidth,10);
	ground.shapeColor = color("red");
	ground1 = createSprite(windowWidth/2,windowHeight-10,windowWidth,10);
	ground1.visible = false;
	blockG = new Group();
Ypos = windowHeight;
gameState = "start";
}

function draw() {
	background("blue");
	// box.debug = true;
	back.velocityY = -3;
	if(back.y<40){
		back.y = 400;
	}

	box.setCollider("rectangle", 0, 0, 60, 80);
//	if(gameState =="play")
	spawnblocks();
	if(touches.length > 0 || keyDown("up") ){
		box.velocityY = - 5;
        gameState = "play";
        touches = [];
	}
	box.velocityY = box.velocityY + 0.8;
if(keyDown("left"))
{
	box.velocityX = -2;
}
if(keyDown("right"))
{
	box.velocityX = 2;
}
camera.position.x = box.y;
camera.position.x = windowWidth/2;
box.collide(ground);
drawSprites();
if(gameState === "end")
{
	textSize(40);
		fill("red");
		text ("GAME OVER",windowWidth/2,windowHeight/2);
}
}	
	

function spawnblocks (){
	//Right side 
	if(frameCount % 50 === 0){
	Ypos=Ypos-20;
	blockR = createSprite(windowWidth,Ypos,90,5);
	blockR.velocityX = -6;
	blockR.debug = true;
	blockG.add(blockR);
	//console.log(blockG);
	}
	for (i = 0; i < blockG.length; i++){
		if(blockG[i].isTouching(box)){
		
			blockG[i].velocityX = 0;
		
			box.y = blockG[i].y -30;
	console.log("touching");
		}
		else
		{if(box.y >=545)
		gameState = "end";
		console.log(box.y);
	}
	
	}
	

}

