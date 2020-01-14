var ball;
var dx = 4;
var dy = 4;

//Create a variable called paused (try and set it to true and false)

/* This program has a ball bounce around the screen. */
function start(){
	ball = new Circle(20);
	ball.setPosition(100, 100);
	add(ball);
	
	setTimer(draw, 20);
  /*Add a mouseClickMethod function with your pause function
  as an argument*/
}


/*Create a pause function with e as a parameter
set your paused variable to the opposite of what it was*/

function draw(){
  /*Modify this function to put the code already here
  inside an if statement - where it states if
  not paused*/
	checkWalls();
	ball.move(dx, dy);
}

function checkWalls(){
	// Bounce off right wall
	if(ball.getX() + ball.getRadius() > getWidth()){
		dx = -dx;
	}
	
	// Bounce off left wall
	if(ball.getX() - ball.getRadius() < 0){
		dx = -dx;
	}
	
	// Bounce off bottom wall
	if(ball.getY() + ball.getRadius() > getHeight()){
		dy = -dy;
	}
	
	// Bounce off top wall
	if(ball.getY() - ball.getRadius() < 0){
		dy = -dy;
	}
}
