'use strict'; // Это директива, которая заставляет использовать новый (5-й), несовместимый с предыдущими стандарт JavaScript

/**
  * Функция находит наибольший общий делитель двух чисел, используя алгоритм Евклида
  * 
  * @param {number} left - первое число
  * @param {number} right - второе число
  * @returns {number} - НОД
  */

const findNOD = (left, right) => {
    if ( (isNaN(left)) || (isNaN(right)) || (left == null) || (right == null)) {
        return undefined
    }

    while ( (left != 0) && (right != 0) ) {
        if (left > right){
            left = left % right
        } else {
            right = right % left
        }
    }
    return (left + right)
}

/**
  * Функция находит наибольший общий делитель произвольного набора натуральных чисел
  * 
  * @param {...number} numbers - числа, для которых нужно найти НОД
  * @returns {number} - НОД
  */

const euclid = (...numbers) => {
    if (numbers.length < 1){
        return undefined
    }
    let current_nod = numbers.shift();
    while(numbers.length > 0){
        current_nod = findNOD(current_nod, numbers.shift());
    }
    return current_nod;
}
