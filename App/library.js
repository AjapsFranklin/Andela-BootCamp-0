//FINDMINMAX FUNCTION
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


//AritGeo FUNCTION
function aritGeo(myArray){
    var Arithmetic = true;
    var Geometric = true
    if(myArray.length < 1)
    return 0
    else{
        var arith = Number(myArray[1]) - Number(myArray[0]);
        var geom= Number(myArray[1]) / Number(myArray[0]);
        
    for(i=2; i<myArray.length; i++){
    if((Number(myArray[i]) - Number(myArray[i-1])) == arith)
        Arithmetic =true;
        else Arithmetic = false;
        
    if((Number(myArray[i]) / Number(myArray[i-1])) == geom)
        Geometric = true;    
        else Geometric = false;
    }
    

    if (Arithmetic) return "Arithmetic";
    else if (Geometric) return "Geometric";
    else return -1;
}
}

module.exports = {
    findMinMax : findMinMax,
    fizzBuzz : fizzBuzz,
    aritGeo : aritGeo
}