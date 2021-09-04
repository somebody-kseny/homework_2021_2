// Это директива, которая заставляет использовать новый (5-й),
// несовместимый с предыдущими стандарт JavaScript
'use strict';

/**
 * Функция находит наибольший общий делитель (НОД) произвольного набора натуральных чисел
 * 
 * @param {...number} numbers - числа, для которых нужно найти НОД
 * @returns {number|undefined} - число, НОД, если на вход поданы натуральные числа. Иначе - undefined
 */

const euclid = (...numbers) => {
  if (numbers.length < 1) {
    return undefined;
  }

  return numbers.reduce(findNOD);
};

/**
 * Функция находит наибольший общий делитель (НОД) двух чисел, используя алгоритм Евклида
 *
 * @param {number} left - первое число
 * @param {number} right - второе число
 * @returns {number|undefined} - число, НОД, если на вход поданы два натуральных числа. 
 * Иначе - undefined
 */

const findNOD = (left, right) => {
  if (typeof left !== 'number' || typeof right !== 'number') {
    return undefined;
  }

  if (left <= 0 || right <= 0) {
    return undefined;
  }

  while (left != 0 && right != 0) {
    if (left > right) {
      left = left % right;
    } else {
      right = right % left;
    }
  };

  return (left + right);
};
