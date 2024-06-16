//write a js function that return a passed string with letters in alphabetical orders

var str = "Hello there hope you ding well";

function alphabeticalOrder(str) {
    var arr = str.split(" ");
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i].split("").sort().join(""));
    }
    return newArr.join(" ");
}

console.log(alphabeticalOrder(str));