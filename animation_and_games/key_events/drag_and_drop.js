var NUM_CIRCLES = 3;
var RADIUS = 30;

/*Create a variable curElem (current element)
and set it equal to null*/

//What is null?

function start(){
	drawCircles();
  
	// Add your drag and drop code
  //Mouse down method with argument mouseDown
  
  //Mouse drag method with argument drag
  
  //Mouse up method with argument mouseUp
}

/*Create your mouseDown function with the input
parameter we've been using (a single letter)*/
  /*Create a var elem and set it equal to
  the element at x of e and y of e (use a function 
  to get that*/
  
  //Set curElem to elem
  

/*Create your drag function with the input
parameter we've been using (a single letter)*/
  /*Create an if statement where if curElem DOES NOT
    equal null then set the position of curElem to
    x and y of e*/
    

/*Create your mouseUp function with the input
parameter we've been using (a single letter)*/
  //Set curElem to null

function drawCircles() {
	for (var i = 0; i < NUM_CIRCLES; i++) {
		var circle = new Circle(RADIUS);
		var x = Randomizer.nextInt(RADIUS, getWidth() - RADIUS);
		var y = Randomizer.nextInt(RADIUS, getHeight() - RADIUS);
		circle.setPosition(x, y);
		circle.setColor(Randomizer.nextColor());
		add(circle);
	}
}
