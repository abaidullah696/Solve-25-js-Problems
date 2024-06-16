//Give a string reverse each word in the sentence


var str = "This is the string to reverse";

var reversedStr = str.split(" ").map(function (word) {
         return word.split("").reverse().join("");   
    })

    console.log(str); 
    console.log("Reverse is = " + reversedStr.join(" "));