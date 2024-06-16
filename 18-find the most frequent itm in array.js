//write a program to find the most frequent item in an array




function frequent(arr) {
    var obj = {};
    arr.forEach(element => {
        
   
    if (obj.hasOwnProperty(element)) {
        obj[element]++;
    } else {
        obj[element] = 1;
    }
})
    var ans =    Object.keys(obj).reduce(function (firstNum, secNum) {
       return obj[firstNum] > obj[secNum] ? firstNum : secNum;
    
});

console.log(ans)
console.log(obj)
}



console.log(frequent([1,2,3,4,3,4,5,3,5,65,4,6,4,6,4,6,3,6,3,6]))