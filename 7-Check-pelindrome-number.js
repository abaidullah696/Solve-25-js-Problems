//write a javascript function that checks wether a passed string is palindrom or not
// Palindrome is the words which are same if we write it in reverse way
//POP      MADAM           LOL 


var a = "madam";

function check(str) {
    var reversed = str.split("").reverse().join("");
if (reversed === str) {
    return true
} else {
    return false    
}
    



}



console.log(check(a));


console.log("Helo there")


//another way with ternory operators


function check2(str) {
    var reversed = str.split("").reverse().join("");
    return    reversed === str ? true : false;
    



}

console.log(check2("LOL0"))




