function start(){
    /*Create a new variable a and set it
    equal to max with arguments 10,14*/
    var a = max(10, 14);
    /*Create a new variable b and set it
    equal to max with arguments 82,28*/
    var b = max(82, 28);

    //Print The max is: a
    println("The max is: " + a);
    //Print the max is: b
    println("The max is: " + b);
}


/*Create a new function called max with
parameters x and y*/
function max(x, y) {
    //INSIDE that function
    /*Create an if statement for if x is 
    greater than y*/
    if (x > y){
        //If it is return x
        return x;
    }else{
        //Else return y
        return y;
    }
}
