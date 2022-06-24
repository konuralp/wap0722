function sum(arr) {
    return arr.filter(i => i>20)
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

console.log(sum([1,20,3,30,40,50,6]));

const getNewArray = function (strArr){
    return strArr.filter(str => str.length >=5 && str.includes('a'));
}

console.log(getNewArray(['arr','foo','bar','barracuda','domestic','wordle','Maharishi']));