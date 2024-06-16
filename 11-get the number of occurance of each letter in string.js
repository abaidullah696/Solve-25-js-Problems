//write a js function to get the nuber of occurrance of each letter in specified string
// for this we can create an object and check if the value is there then give the value one if not then add that word for more see in code




function occur(str) {
    var obj = {}
     str.split("").forEach(function (element) {
        if (obj.hasOwnProperty(element) === false) {
            obj[element] = 1;
        } else {
            obj[element]++;
        }
    })
    return obj;
}

console.log(occur("hello world"))