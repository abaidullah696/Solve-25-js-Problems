//write  a js function to get the first element of an array passing a parameter n  will return the first 'n' element of the array


function retrieve(arr, n=1) {          // by defoult it can gives first value if we can't give the value in function call

    if (n<=arr.length) {
        for (let i = 0; i < n; i++) {
            console.log(arr[i]);
            
        }
    } else {
        console.log(n + " to element hi ni ha array man")
    }




    
}


console.log(retrieve([1,2,3,4,5], 2))             // here 2 will be replace the value of n




//for retrieve the values from last of the array


console.log("Next result is for retreiving last digit in array")


function retrieve1(arr, n=1) {
    if (n <= arr.length) {
        for (let i = 0; i < n; i++) {

            console.log(arr[arr.length - 1 - i])
        }
    } else {
        console.log(n + " to element hi ni a array mn")
    }
}

console.log(retrieve1([1,2,3,4,5,6] , 3))

