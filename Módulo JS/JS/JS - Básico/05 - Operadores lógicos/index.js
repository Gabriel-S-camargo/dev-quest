/*
    == ---- igual ---- a==b ---- verdadeiro se a for igual a b

    === ---- idêntico ---- a=== ---- verdadeiro se a for igual a b
    
    != ---- diferente  ---- a != b ---- verdadeiro se o a não for idêntico a b
    
    !== ---- não idêntico ---- a !== b ---- verdadeiro se o a não for idêntico a b 

    < ---- menor que ---- a < b ---- verdadeiro quando a for menor que b 

    <= ---- menor ou igual ---- a <= b ---- verdadeiro quando a for menor ou igual a b

    > ---- maior que ---- a > b ---- verdeiro quando a for maior que b 

    >= ---- maior ou igual ---- a >= ---- verdadeiro quando a for mairo ou igual a b

*/

//const a = 1
//const b = 3

//console.log (a < b)

const a = 2
const b = 2

// T and T = T

console.log(a=== b && a <= b) 

// T and F = F

console.log (a=== b && a < b) 

// F and T = F 
console.log(a > b && a === b)

// F and F = F

console.log (a > b && a < b)

/* OR  */

console.log (a === b || a <= b ) 

// V ou V = V

console.log (a === b || a < b)

//V ou F = V

console.log (a > b || a < b )
// F ou F = F 

/* NOT */ 

console.log (!(a === b)) //false

console.log (!(a < b)) // true


