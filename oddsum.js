function oddsum(numbers) {
var total = 0
for (i=0; i<numbers.length; i++) {
    if (numbers[i]%2 === 1) {
        total+=numbers[i];
    }

}

return total
}

var myNumbers = [2, 3, 1, 7, 9, 11, 12, 13, 1, 60, 17]
var sum = oddsum(myNumbers)
console.log(sum)