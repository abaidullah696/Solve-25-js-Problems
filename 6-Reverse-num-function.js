//Reverse a number
// The keyword Number is used to convert string into number
var a = 12;

function reverseKaro(num) {
 return   Number(num.toString().split("").reverse().join(""))

}

console.log(reverseKaro(a));
console.log(reverseKaro(1234567))


//another way


function reverse2(num) {
    var rev = 0;
    while (num>0) {
        var rem = num%10;
        rev = rev*10+rem;
        num = Math.floor(num/10);
    }
    return rev;
}


console.log(reverse2(a));
console.log(reverse2(12345))
