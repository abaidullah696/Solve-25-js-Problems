//loop an array ov object and remove all objects which dont have gender values male



var arr = [
    {
        name: "Abaid",
        gender: "male"  
    },
{
    name: "something",
    gender: "female"
},
{
    name: "Asad",
    gender: "male"

}
]



var check = arr.filter(function (element) {
    return element.gender === "male";
})

count = 0;
arr.forEach(function (element) {
    if (element.gender !== "male") {
        count++;
    }
})

for (let i = 0; i <= count; i++) {
for (let j = 0; j < arr.length; j++) { 

if (arr[j].gender !== "male") {
    arr.splice(j, 1)
}
}

}



console.log(arr)
console.log(check)