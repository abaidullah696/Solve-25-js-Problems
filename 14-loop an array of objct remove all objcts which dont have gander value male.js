//loop an array ov object and remove all objects which dont have gender values male



var arr = [
    {name: "Abaid",gender: "male"},
{name: "something",gender: "female"},
{name: "Asad",gender: "male"},
{name: "else",gender: "female"}
]


var check = arr.filter(function(elem){
    return elem.gender === "male";
})


//for removing non male genders from object
var count = 0;
arr.forEach(function (elem) {
    

if (elem.gender !== "male") {
    count++
} 
})


//tmam non mala object ko hatana ka tariqa
for (var i = 0; i <= count; i++) {
//1 obj ko hatana ka triqa
for (var j = 0; j < arr.length; j++) { 
    if (arr[j].gender !== "male") {
        arr.splice(j,1);
    } 
}
}


console.log(arr);           //after remove the object
console.log(check)          // just check how much male