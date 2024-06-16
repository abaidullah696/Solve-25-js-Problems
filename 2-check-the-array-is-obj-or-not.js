//How to check that an array is object or not
//Array.isArray is used to check the thing is array or not
function checkArray (elem) {
    return Array.isArray(elem);
    
}

console.log(checkArray([1,2,3,4,5]));
console.log(checkArray({}))