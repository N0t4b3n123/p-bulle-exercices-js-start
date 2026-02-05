// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} cardType
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, cardType) {
  // 🚨 Use .forEach
  let count = 0;
  stack.forEach(card => {
    if (card === cardType) {
      count++;
    }
  });
  return count;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // 🚨 Use a `for...of` loop
  let count = 0;
  for (const card of stack) {
    if (type) {
      // even
      if (card % 2 === 0) {
        count++;
      }
    } else {
      // odd
      if (card % 2 !== 0) {
        count++;
      }
    }
  }
  return count;
}