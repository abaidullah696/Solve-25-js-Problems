// write a js program to shuffle an array

function shuffle(arr) {

     var currentIndex = arr.length; 

     //while there remain elements to shuffle

     while (currentIndex != 0) {
        
        //pick a remaining element

        var randomIndex = Math.floor(Math.random() * currentIndex)

        currentIndex--;

        //and swap it with the current element

        [arr[currentIndex], [randomIndex]] = [arr[randomIndex], [currentIndex]];

     }
    return arr;
}

let arr1 = [1,2,3 , 4, 5,6,7];
  shuffle(arr1);
  console.log(arr1);








  // with the help of stack overflow


function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }
  
  // Used like so
  let arr = [2, 11, 37, 42];
  shuffle(arr);
  console.log(arr);