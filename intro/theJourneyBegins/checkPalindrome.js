function checkPalindrome(inputString) {
    var length = inputString.length;
    
    for(i=0;i<length;i++){
        if(inputString[i]!==inputString[length-i-1]){
            return false;
        }
    }return true;
}
