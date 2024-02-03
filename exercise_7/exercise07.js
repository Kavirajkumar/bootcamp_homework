//area and perimeter of a circle
function circleValues(radius){
    var perimeter=(2*3.14*radius).toFixed(2)
    var area=(3.14*radius*radius).toFixed(2)
    console.log(`The area is ${area}`)
    console.log(`The perimeter is ${perimeter}`)
}
circleValues(5)
//reverse a number
function reverseNum(num){
    var result= num.toString().split('').reverse().join('');
    console.log(`The reverse of ${num} is ${result}`)
}
reverseNum(123456)

//count number of vowels in string
function countVowel(str){
    const count = str.match(/[aeiou]/gi).length;
    console.log(`The count of vowels in ${str} is ${count}`)
}
countVowel('Kavitha')

//Flatten array of arrays
function flattenArr(arr1){
    //let flattenArr=arr1.flat(2)
    let flattenArr=arr1.reduce(function(total,currentItem){
        return arr1
    })
    console.log(`The flatten array is ${flattenArr}`);
}
flattenArr([[1,2,3],[4,5,[6]]])

//Check string is Palindrome
function checkPalindrome(word){ 
    word = word. toLowerCase();
    var str=word.split('').reverse().join('');
    if(str==word){
        console.log(`The input string ${word} is Palindrome`);
        return str;
    }
    else{
        console.log(`The input string ${word} is not Palindrome`);
    }
}
checkPalindrome('woh')
checkPalindrome('wow')

//Calculate simple interest
function simpleInt(principal,rate,time){
    var finalAmount=principal*(1+((rate/100)*time));
    console.log(`The final amount of simple interest is ${finalAmount}`);
    return finalAmount;
}
simpleInt(1000,5,2)

//Calculate compound interest
function compoundInt(principal,rate,time,n){
    var finalAmount=principal*(Math.pow(1 + (rate /100)*n), n*time);
    console.log(`The final amount of compound interest is ${finalAmount}`);
    return finalAmount;
}
compoundInt(1000,5,2,1)

//Generate random integer number
function genRandom(min, max) {
    let randomInt=Math.floor(Math.random() * (max - min + 1) ) + min;
    console.log(`The random number between ${min} and ${max} is ${randomInt}`);
    return randomInt;
}
genRandom(11, 1)

//Factorial of a number
function getFactorial(n){
    let num=1;
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        num = num * i; 
    console.log(`The factorial of a ${n} = ${num}`);
    return num;
}
getFactorial(5)

//To add unlimited numbers
function addNumber(){
  /*  const sum=(...argList) =>{
        return argList.reduce((acc,next) => {
            return acc+next;
        }
        );
    }
    console.log(sum);*/
    const argsArr = Array.from(arguments);
   return argsArr.reduce((total, current) => total + current);
}
console.log(addNumber(2,3,4,5));

//To combine unlimited arrays
function addArrays(){
   const argsArr = Array.from(arguments);
     return argsArr.reduce((total, current) => total + current);
  }
console.log(addArrays(['a','b','c'],['d','e','f']));

//To find count of a letter in string
function letterCount(str,letter){
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
           count=count+1;
        }
    }
    return count;
}
console.log(letterCount('helloworld','l'));

//To check number is prime
function checkPrime(num){
    let flag=true;
    for(var i=2; i<num; i++){
        if(num%i==0){
            flag=false;
            break;
        }
    }
    if (flag == true)
    console.log(`${num} is prime`);
    else
    console.log(`${num} is not prime`)       
}
checkPrime(24)
checkPrime(13)
