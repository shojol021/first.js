// The following function [mindGame] will take a user input as an integer. It will then multiply the input by 3, add 10, divide the result by 2, substract the result by 5 and return the final result.
function mindGame(userInput){
    if(typeof userInput !== 'number'){
        return 'Please input an integer value!';
    }
    if(userInput<0){
        return 'Please input a positive number';
    }
    return (userInput*3 + 10)/2 - 5;
}
// console.log(mindGame(16));



// The following function [evenOdd] will take an user input as a string. It will then calculate the length of that string. And it will return 'even' or 'odd' depending on the length of the string even or odd.
function evenOdd(userInput){
    if(typeof userInput !== 'string'){
        return 'Please input an string value!';
    }
    if(userInput.length%2===0){
        return 'even';
    }
    else{
        return 'odd';
    }
}
// console.log(evenOdd('Adnan'));



//  The following function [isLGSeven] will take user input as an integer value. Then it will subtract the input by seven. If the result is less than 7, it will return the result, else it will return double the input value. 
function isLGSeven(userInput){
    if(typeof userInput !== 'number'){
        return 'Please input an integer value!';
    }

    let temp = userInput-7; 
    if(temp<7){
    return temp;
    }
    else{
    return userInput*2;
   }
}

// console.log(isLGSeven(14));



// The following function [findingBadData] will take an integers array input. And it will count the negative numbers within that given array and return that number. 
function findingBadData(userArray){
    if(typeof userArray !== 'object'){
        return 'Please input an array!';
    }
    let badCount = 0;
    for(let i=0; i<userArray.length; i++){
        if(userArray[i]<0){
            badCount++;
        }
    }
    return badCount;
}
// console.log(findingBadData([0,-3,1,-2]));



// The following function [gemsToDiamond] will take 3 integer parameters. first input will be multiplied by 21, 2nd by 32 and 3rd by 43. Then it will add the multiplied values. If the total is less than 2000, it will return the total value. Otherwise, the total will be subtracted by 2000 and then the result will be returned.
function gemsToDiamond(input1, input2, input3){
    if(typeof input2 === 'undefined' || typeof input3 === 'undefined'){
        return 'Please input at least 3 parameters!!!';
    }
    if(typeof input1 !== 'number' || typeof input2 !== 'number'|| typeof input3 !== 'number'){
        return 'All parameter values should be in integer!';
    }
    if(input1 <0 || input2 <0 || input3 <0){
        return 'Gems value can not be negative!!!';
    }
    const total = input1*21 + input2*32 + input3*43;
    if(total<1000*2){
        return total;
    }
    else{
        return total-2000;
    }
}
// console.log(gemsToDiamond(100, 10, -2));