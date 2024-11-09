//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//change nummbr to string
//split the string to array
 
function digitize (n) {

    return n.toString().split("").map( (m)=> Number(m)).reverse()

}
console.log(digitize(12345))
