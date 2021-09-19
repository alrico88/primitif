import {createCombination} from '../src/index';

describe('Combinations tests', () => {
  it('Should not return the same number twice', () => {
    expect(new Set(createCombination(1, 400, 6)).size).toBe(6);
  })

  it('Should return as many items as the size set', () => {
    expect(createCombination(1, 10, 5).length).toBe(5);
  })

  it('Should not return numbers outside of bounds', () => {
    const comb = createCombination(1, 10, 10);
    const maxCheck = Math.max(...comb) <= 10;
    const minCheck = Math.min(...comb) >= 1;

    expect(maxCheck === minCheck === true).toBe(true);
  })
})