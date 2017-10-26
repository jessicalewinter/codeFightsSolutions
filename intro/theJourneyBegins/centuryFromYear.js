function centuryFromYear(year) {
    if (year%100 !== 0){
        return (year - year%100)/100+1;
    }
    return year/100;
}
