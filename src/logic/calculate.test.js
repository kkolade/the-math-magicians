import calculate from './calculate';

describe('Test button fonctionalities', () => {
  test('AC button clears the calculator data object', () => {
    const obj = {
      total: '42',
      next: '17',
      operation: '+',
    };
    const buttonName = 'AC';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('Pressing a number button updates the next value', () => {
    const obj = {
      total: '42',
      next: '17',
      operation: '+',
    };
    const buttonName = '9';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({
      total: '42',
      next: '179',
      operation: '+',
    });
  });

  test('Pressing 0 when next is already 0 returns an empty object', () => {
    const obj = {
      total: '42',
      next: '0',
      operation: '+',
    };
    const buttonName = '0';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({});
  });

  test('Pressing a decimal point updates the next value', () => {
    const obj = {
      total: '42',
      next: '17',
      operation: '+',
    };
    const buttonName = '.';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({
      total: '42',
      next: '17.',
      operation: '+',
    });
  });

  test('Pressing a decimal point when next already includes one returns the original object', () => {
    const obj = {
      total: '42',
      next: '17.3',
      operation: '+',
    };
    const buttonName = '.';
    const result = calculate(obj, buttonName);
    expect(result).toEqual(obj);
  });

  test('Pressing the +/- button negates the next value', () => {
    const obj = {
      total: '42',
      next: '17',
      operation: '+',
    };
    const buttonName = '+/-';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({
      total: '42',
      next: '-17',
      operation: '+',
    });
  });

  test('Pressing the +/- button negates the total value', () => {
    const obj = {
      total: '42',
      next: null,
      operation: null,
    };
    const buttonName = '+/-';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({
      total: '-42',
      next: null,
      operation: null,
    });
  });
});
