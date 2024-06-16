//write program to shuffle the array



function shuffle(arr) {
    var currentIndex = arr.length;

    while (currentIndex != 0) {
        
        var randomIndex = Math.floor(Math.random()* currentIndex)
        currentIndex--;
        [arr[currentIndex],arr[randomIndex]] = [arr[randomIndex],arr[currentIndex]]

    }




}

var arr = [1,2,3,4,5,6,7]
shuffle(arr)
console.log(arr)


//Practice for one more time

function shuffle1(arr) {
    var currentIndex = arr.length;

    while (currentIndex != 0) {
        var randomIndex = Math.floor(Math.random()*currentIndex)
        currentIndex--;
        [arr[currentIndex],arr[randomIndex]]= [arr[randomIndex],arr[currentIndex]]
    }
}


var arr1 = [1,2,3,4,5,6,7,8,9]
shuffle1(arr1)
console.log(arr1)
