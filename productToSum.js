//A function to multiply two arrays and then return the sum of the elements of the new array.

let total = 0;

function productToSum (arrayA, arrayB) {

    //The for loop iterates and selects each element of the two arrays,
    for ( let i = 0; i < arrayA.length && i < arrayB.length; i++ ) {

        /*The addition assignment operator adds the value of 
        the RHS operands to total and assigns the result to total.*/
        total += arrayA[i] * arrayB[i];
    }

    return total;
}

productToSum([3, 7, 8, 5], [1, 2, 4, 8]);
