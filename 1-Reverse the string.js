//Give a string reverse each word in the sentence
// Split is used to break the string into smaller parts
//Map is used to check every value in string

var str = "Hello there hope you ding well";


    var savedStr = str.split(" ").map(function (word) {
    return   word.split("").reverse().join("")
    console.log(word)
    })

console.log(str); 
console.log("Reverse is = " + savedStr.join(" "));