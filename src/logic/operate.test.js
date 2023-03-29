import Big from 'big.js';
import operate from './operate';

describe('operate', () => {
  test('adds two numbers', () => {
    expect(operate(2, 3, '+')).toEqual(Big(5).toString());
  });

  test('subtracts two numbers', () => {
    expect(operate(5, 3, '-')).toEqual(Big(2).toString());
  });

  test('multiplies two numbers', () => {
    expect(operate(2, 3, 'x')).toEqual(Big(6).toString());
  });

  test('divides two numbers', () => {
    expect(operate(6, 2, '÷')).toEqual(Big(3).toString());
    expect(operate(6, 0, '÷')).toEqual("Can't divide by 0.");
  });

  test('calculates modulo of two numbers', () => {
    expect(operate(7, 4, '%')).toEqual(Big(3).toString());
    expect(operate(7, 0, '%')).toEqual(
      "Can't find modulo as can't divide by 0."
    );
  });

  test('throws an error for an unknown operation', () => {
    expect(() => operate(2, 3, '#')).toThrow("Unknown operation '#'");
  });
});
