var SENTINEL = 0;

// Prints whether the entered number is even or odd
function start(){
    //Create a while loop for while true
    while (true){
        /*Create a new variable num and have it read an integer*/
        var num = readInt("Enter a number: ");
		
		/*Create an if statement where if num is equal to
		the global variable SENTINEL*/
        if (num == SENTINEL){
            //If it is, break
            break;
        }
        
        /*Create an if statement that calls isEven with num
        as an argument*/
        if (isEven(num)){
            //If it is print "Even"
            println("Even");
        }else{ 
            //Else print "Odd"
            println("Odd");
        }
    }
    //Print "Done!" outside your while loop
    println("Done!");
}

/*Create a new function called isEven with x
as a parameter*/
function isEven(x){
    //INSIDE the function
    
    /*return comparison of x modulas 2 
    and 0 (use ==)*/
    return x % 2 == 0;
}
