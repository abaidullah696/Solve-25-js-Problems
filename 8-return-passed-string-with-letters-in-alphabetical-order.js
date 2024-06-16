//write a js function that return a passed string with letters in alphabetical orders



var a = "Brother"
function stringAlphabeticalOrder(str) {
    return str.split("").sort().join("");
    
}



console.log(stringAlphabeticalOrder(a))
