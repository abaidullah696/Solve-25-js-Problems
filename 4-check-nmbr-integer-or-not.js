// How to check if number is integer or not
var num = 5;

if (num % 1 === 0) {
    console.log(num + " is an integer");
}

else {
    console.log(num + " is not an integer");
}

//Anotherway

if (Number.isInteger(num)) {
    console.log(num + " is an integer");
}

else {
    console.log(num + " is not an integer");
}