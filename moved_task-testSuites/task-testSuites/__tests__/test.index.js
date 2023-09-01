const { isValidEmail, isValidPassword, validateUserInput } = require('../index.js');

// We've already added some test data for your convenience, but you can use your own
const dataValid = { email: 'bob@yandex.com', password: '1amAp0k3m0n%' };
const dataInvalidPassword = { email: 'bob@yandex.com', password: '123456' };
const dataInvalidEmail = { email: 'bob', password: '1amAp0k3m0n%' };
const dataInvalidCredentials = { email: 'bob', password: '12345' };

// Write tests here
describe('Request handler tests', () => {
    // correct email
    it('#isValidEmail should check that the email is valid', () => {
        expect(isValidEmail(dataValid.email)).toBeTruthy();
        expect(isValidEmail(dataInvalidEmail.email)).toBeFalsy();
    });

    // correct password
    it('#isValidPassword should check that the password is valid', () => {
        expect(isValidPassword(dataValid.password)).toBeTruthy();
        expect(isValidPassword(dataInvalidPassword.password)).toBeFalsy();

    });
    // valid user data
    it('#validateUserInput should return the value of the message property if the data is correct, without returning an error', () => {
        expect(validateUserInput(dataValid).isValidated).toBeTruthy();
        expect(validateUserInput(dataValid).message).toBe('User created successfully');
        expect(validateUserInput(dataValid).error).toBeNull();
    });

    // wrong email
    it('#validateUserInput should return the email error message if the email is incorrect', () => {
        expect(validateUserInput(dataInvalidEmail).isValidated).toBeFalsy();
        expect(validateUserInput(dataInvalidEmail).message).toBeNull();
        expect(validateUserInput(dataInvalidEmail).error).toBe('Wrong email');
    });

    // wrong password
    it('#validateUserInput should return the password error message if the password is incorrect', () => {
        expect(validateUserInput(dataInvalidPassword).isValidated).toBeFalsy();
        expect(validateUserInput(dataInvalidPassword).message).toBeNull();
        expect(validateUserInput(dataInvalidPassword).error).toBe('Wrong password');

    });

    // incorrect data
    it('#validateUserInput should return an incorrect data error if all data is incorrect', () => {
        expect(validateUserInput(dataInvalidCredentials).isValidated).toBeFalsy();
        expect(validateUserInput(dataInvalidCredentials).message).toBeNull();
        expect(validateUserInput(dataInvalidCredentials).error).toBe('Incorrect data');
    })
})