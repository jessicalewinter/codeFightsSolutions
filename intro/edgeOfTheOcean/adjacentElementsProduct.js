function adjacentElementsProduct(inputArray) {
    var greater=inputArray[0]*inputArray[1];
    var length = inputArray.length;
    for( i=0; i<length; i++){
        if((inputArray[i]*inputArray[i+1]) >= greater){
            greater = inputArray[i]*inputArray[i+1];
        }
    }
    return greater;
}
