function ly(year){
    let b = [];
    for(let i=0; i<year.length; i++){
        if(year[i]%4==0)
        b.push(year[i]);
    }
    return b;
}


var a = [2022, 2023, 2028, 2030, 2032, 2033,2036,2050];
var c = ly(a);
console.log("Leap Years", c);