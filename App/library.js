function findMinMax(myArray){
    myArray.sort(function(a,b){return a-b});
    if(typeof(myArray[0])!="number" | typeof(myArray[myArray.length-1])!="number") //To ensure elements in the array are numbers 
    return 0;
    else if (myArray[0]==myArray[myArray.length-1])
    return [myArray[0]];
    else return [myArray[0], myArray[myArray.length-1]];    
}


//fizzBuzz function
function fizzBuzz(myNumber){
    if(myNumber==0)
    return 0;
    else{
    var myOutput="";
    if(myNumber%3!=0 & myNumber%5!=0)
    return myNumber;
    else{
    if(myNumber%3==0)
    myOutput=myOutput + "Fizz";
    if(myNumber%5==0)
    myOutput=myOutput +"Buzz";
    }}
return myOutput;
}

module.exports = {
    findMinMax : findMinMax,
    fizzBuzz : fizzBuzz
}


