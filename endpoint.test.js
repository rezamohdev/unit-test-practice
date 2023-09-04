// endpoint.test.js
const supertest = require('supertest');
const app = require('./app.js');


const request = supertest(app);


describe('Testing HTTP Requests', () => {
    it("Returns the string 'Hello, world!' and the correct status", () => {
        return request.get('/').then((response) => {
            expect(response.status).toBe(200);
            expect(response.text).toBe('Hello, world!');
        })
    });

    it("A POST request to the /users address returns a JSON object with user data and the correct status indicating that the user has been created.", () => {
        return request.post('/users').then((response) => {
            expect(response.text).toBe('success');
            expect(response.body.data.isDeveloper).toBe(true);
            expect(response.body.data.followersOnGithub).toBeGreaterThan(10);
        })
    });
});