const isDivisibleByThree = require('./isDivisibleByThree');

// Write your code here
test('Return true devisble by 3', () => {
    expect(isDivisibleByThree(18)).toEqual(true);
    expect(isDivisibleByThree(18)).toEqual(true);
    expect(isDivisibleByThree(999)).toEqual(true);
    expect(isDivisibleByThree(30)).toEqual(true);
    expect(isDivisibleByThree(33)).toEqual(true);
    expect(isDivisibleByThree(333)).toEqual(true);
    expect(isDivisibleByThree(-33)).toEqual(true);
});
test('Return false devisble by 3', () => {
    expect(isDivisibleByThree(8)).toEqual(false);
    expect(isDivisibleByThree(5)).toEqual(false);
    expect(isDivisibleByThree(2)).toEqual(false);
    expect(isDivisibleByThree(250)).toEqual(false);
    expect(isDivisibleByThree(25)).toEqual(false);
    expect(isDivisibleByThree(205)).toEqual(false);
    expect(isDivisibleByThree(88)).toEqual(false);
    expect(isDivisibleByThree(28)).toEqual(false);
});