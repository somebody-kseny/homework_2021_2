'use strict';

const findNOD = (a, b) => {
    while ( (a != 0) && (b != 0) ) {
        if (a > b){
            a = a % b
        } else {
            b = b % a
        }
    }
    return (a + b)
}

const euclid = (...numbers) => {
    let prev_nod = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        prev_nod = findNOD(prev_nod, numbers[i]);
    }
    return prev_nod;
}