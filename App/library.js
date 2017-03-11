function findMinMax(myArray){
    myArray.sort(function(a,b){return a-b});
    if(typeof(myArray[0])!="number" | typeof(myArray[myArray.length-1])!="number") //To ensure elements in the array are numbers 
    return 0;
    else if (myArray[0]==myArray[myArray.length-1])
    return [myArray[0]];
    else return [myArray[0], myArray[myArray.length-1]];    
}

module.exports = {
    findMinMax : findMinMax
}


