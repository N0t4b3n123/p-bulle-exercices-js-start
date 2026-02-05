// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let sum1 = '';
  let sum2 = '';
  for (let i = 0; i < array1.length; i++) {
    sum1 += array1[i];
  }
  for (let i = 0; i < array2.length; i++) {
    sum2 += array2[i];
  }
  return parseInt(sum1) + parseInt(sum2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const strValue = value.toString();
  const reversedStrValue = strValue.split('').reverse().join('');
  return strValue === reversedStrValue;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === null || input === undefined || input === '') {
    return 'Required field';
  }
  if (isNaN(Number(input))) {
    return 'Must be a number besides 0';
  }
}
