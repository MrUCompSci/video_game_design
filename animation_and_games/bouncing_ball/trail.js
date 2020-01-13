var MAX_BOUNCES = 20;

var ball;
var dx = 4;
var dy = 4;

//Add a counter variable

/* This program has a ball bounce around the screen. 
 * Its path is drawn by drawing different colored balls everywhere it goes.
 */
 
function start(){
	ball = new Circle(20);
	ball.setPosition(100, 100);
	add(ball);
	
	setTimer(draw, 20);
}

function draw(){
	checkWalls();
  //Call your drawCircle() function
  
  
	ball.move(dx, dy);
}

/*Create a drawCircle() function that
creates a new circle with radius half the width
set its position to ball x and ball y
set its color to cyan
add circle*/

function checkWalls(){
	// Bounce off right wall
	if(ball.getX() + ball.getRadius() > getWidth()){
		dx = -dx;
    //Increase counter
	}
	
	// Bounce off left wall
	if(ball.getX() - ball.getRadius() < 0){
		dx = -dx;
    //Increase counter
	}
	
	// Bounce off bottom wall
	if(ball.getY() + ball.getRadius() > getHeight()){
		dy = -dy;
    //Increase counter
	}
	
	// Bounce off top wall
	if(ball.getY() - ball.getRadius() < 0){
		dy = -dy;
    //Increase counter
	}
  
  //Add another if statement where if counter is max bounces, stop draw function
}
