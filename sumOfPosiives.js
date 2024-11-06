//You get an array of numbers, return the sum of all of the positives ones.


function sumOfPositive(arr){

return arr.filter((x)=> x> 0).reduce((acc, current)=> acc+ current,0);

    // let initialValue =0;
    // for(let i = 0 ; i<arr.length ; i++){
    //     if(arr[i] >0){
    //         initialValue+= arr[i];
              
    //     }
    // }
    // return initialValue;
}

console.log(sumOfPositive([1,2,-3,3,2]))