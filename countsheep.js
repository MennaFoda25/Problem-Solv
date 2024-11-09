//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// intial value of zero 
//loop through the array 
//check for true -> increase value 1 

function sheep(sheep){
let counter = 0 ;

sheep.map((m)=>{
    if (m==="true") counter++;
})
return counter;

}