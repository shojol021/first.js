var fName = 'Adnan';
var mName = 'Hossain';
var lName = 'Shojol';
var fullName = fName + ' ' + mName + ' ' + lName;

console.log(fullName);

const a = 'ami banglay gaan Gai, ami banglar gaan Gai, ami amr ami K chirodin...';
const s = 'Gai';
// const aLo = a.toLowerCase();
// const sLo = s.toLowerCase();
console.log(a.toLowerCase().includes(s.toLowerCase()));

var b = a.split(" ");
var c = a.split("");
console.log(b, c);
var j = b.join('[joined]');
console.log(j);
// console.log(c);