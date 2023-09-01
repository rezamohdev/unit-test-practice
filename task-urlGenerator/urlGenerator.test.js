const urlGenerator = require('./urlGenerator.js');
const urlRegEx = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

// Write your code here
test('Test Result returns a string', () => {
    expect(urlGenerator('hello')).toMatch(urlRegEx);
    expect(urlGenerator('Man')).toMatch(urlRegEx);
    expect(urlGenerator('Goof')).toMatch(urlRegEx);
    expect(urlGenerator('google.com')).toMatch(urlRegEx);
    expect(urlGenerator('mail')).toMatch(urlRegEx);
    expect(urlGenerator('kjadsgsj')).toMatch(urlRegEx);
    expect(urlGenerator('jwehfe')).toMatch(urlRegEx);
    expect(urlGenerator('jhfis')).toMatch(urlRegEx);
});