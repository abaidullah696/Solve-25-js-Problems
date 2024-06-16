//write a js function that accepts astring as a parametersand convert the first letter of each word of the string in uppercase

var str = "this is a string";

function uprCase(str) {
    return str.split(" ").map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}



console.log(uprCase(str));









//another way
function upperCase(str) {
    return str.split(" ").map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}



console.log(upperCase(str));