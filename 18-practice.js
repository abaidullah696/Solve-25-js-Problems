//write a program to find the most frequent item in an array



function freq(arr) {
    obj = {};
    arr.forEach(element => {
        if (obj.hasOwnProperty(element)) {
            obj[element]++;
        } else {
            obj[element] = 1;
        }
    });
    var ans =    Object.keys(obj).reduce(function (firstNum, SecNum) {
        return obj[firstNum] > obj[SecNum] ? firstNum : SecNum;
    })
    console.log(ans)
    console.log(obj)
}




freq([1,3,2,4,2,4,3,54,53,5,533,35,3,5,4,5,3,5,1,1,1,1,1,1,1,1])





//Just one more time for practice

function freq1(arr) {
    var obj = {}
    arr.forEach(function (element) {
        if (obj.hasOwnProperty(element)) {
            obj[element]++
        } else {
            obj[element] = 1;
        }
    })
    var ans1 = Object.keys(obj).reduce(function (firstNum, secNum) {
        return obj[firstNum] > obj[secNum] ? firstNum : secNum;
    })
    console.log(ans1)
    console.log(obj)
}



freq1([1,2,34,2,4,2,4,2,4,2,4,5,3])