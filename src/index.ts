/**
 * Gets a random number between a min and a max
 * If a selected array is present, will prevent repeating choice
 *
 * @export
 * @param {[number, number]} range [min, max]
 * @param {number[]} [alreadySelected] Array of already picked numbers
 * @return {number}
 */
export function getRandomNumber(range: [number, number], alreadySelected?: number[]): number {
  const [min, max] = range;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  if (alreadySelected !== undefined && alreadySelected.includes(randomNum)) {
    return getRandomNumber(range, alreadySelected);
  }

  return randomNum;
}

/**
 * Creates a combination based on available numbers and a combination length
 *
 * @export
 * @param {number} minValue The minimum possible number
 * @param {number} maxValue The maximum possible number
 * @param {number} combinationLength The amount of numbers needed for the combination
 * @return {number[]} The random combination
 */
export function createCombination(
  minValue: number,
  maxValue: number,
  combinationLength: number,
): number[] {
  const combination: number[] = [];

  for (let i = 0; i < combinationLength; i += 1) {
    combination.push(getRandomNumber([minValue, maxValue], combination));
  }

  return combination.sort((a, b) => a - b);
}
