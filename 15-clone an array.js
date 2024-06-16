

//Write a js function to clone an array
var a = [1,2,3,4,5,6]
function cloneArr(arr) {
    return arr.map(function (e) {
        return e
    })
}
var newArr = cloneArr(a)
console.log(newArr)
console.log(a)




// Another way

function cloneArr1(arr) {
    return [...arr]          // ... is a spread operatoe which can copy all the string
}
var newArr = cloneArr(a)
console.log(cloneArr1(a))
console.log(a)




//another way

function cloneArr2(arr) {
    var newArr = []
    arr.forEach(function (element) {
        newArr.push(element)
    });
    return newArr
}

newArr = cloneArr2(a)
console.log(cloneArr2(a))




// remove 1 element from array to check that clone array work or not
newArr.pop()

console.log(newArr)



