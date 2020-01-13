var ball;
var dx = 4;
var dy = 4;

/* This program has a ball bounce around the screen. */
function start(){
	ball = new Circle(20);
	ball.setPosition(100, 100);
	add(ball);
	
	setTimer(draw, 20);
}

function draw(){
	checkWalls();
  //Call your checkColor() function
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

/*Create a function called checkColor()
make in if else statement for if its on the left side, turn the circle blue,
else, turn the circle green*/
