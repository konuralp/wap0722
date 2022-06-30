//Question 1
function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 2) {
        let j = i;
        let shooter = function () {
            console.log(j);
        };
        shooters.push(shooter);
        i++;
    }
    return shooters;
}
let army = makeArmy();
army.forEach(f => f());


//Question 2
function printNumbers(from, to) {
    let isSmaller = from <= to;
    let current = from;
    let timer = setInterval(() => {
        console.log(current);
        if (current === to) {
            clearInterval(timer);
        }
        current += isSmaller ? 1 : -1;
    }, 1000);
}

printNumbers(1, 5);
printNumbers(5, 1);