function sum(array){
    if(array ==null ) return 0;

    return array.sort((a,b)=> a-b) // sort mn elso8yar lelkber
    .slice(1,-1).reduce((acc,current)=>acc+ current,0);

    // let maxVal = Math.max(...arr);
    // let minVal = Math.min(...arr);

    // let filteredArray = arr.filter((x) => x!== maxVal && x !== minVal);
    // let newArray = filteredArray.reduce((acc, current)=> acc+ current,0);
    // return newArray;
}

console.log(sum([ 0, 1, 6, 10, 10 ]))