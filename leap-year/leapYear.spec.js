import isLeapYear from "./leapYear";

describe('Leap Year', () => {
  it('should be divisible by 400', () => {
    expect(isLeapYear(400)).toBeTruthy();
  });

  it('should be divisible by 400 if divisible by 100', () => {
    expect(isLeapYear(100)).toBeFalsy();
    expect(isLeapYear(800)).toBeTruthy();
    expect(isLeapYear(1800)).toBeFalsy();
  });

  it('should be divisible by 4 but not 100', () => {
    expect(isLeapYear(2008)).toBeTruthy();
    expect(isLeapYear(1800)).toBeFalsy();
    expect(isLeapYear(2017)).toBeFalsy();
  });
})