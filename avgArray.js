function avg(numbers){
    let sum = 0;
    for (let i=0; i < numbers.length; i++){
        sum = sum + numbers[i];
    }
    let av = sum / numbers.length;
    return av;
}

var inp = [23, 12, 27, 11];

var result = avg(inp);
console.log(result);