//write a js program to take union of 2 arrays


function union(arr1,arr2) {
    return   [...new Set(arr1.concat(arr2)) ]
}


console.log(union([1,2,3,4],[2,3,4,5,6]))

console.log(union([5,7,3,3,5],[2,3,4,5,6]))








//again for practice



function union1(arr1,arr2) {
    return [...new Set(arr1.concat(arr2))];
}




console.log(union1([1,2,3,4],[2,3,4,5,6]))





function name() {
    if (true) {
        let a = 10
        var b = 20
    }
    console.log(b)  
    console.log(a)
  
}
name()
