const axios = require("axios");
const chai = require("chai");

const expect = chai.expect;
const baseURI = "http://localhost:4000/api";
describe("API TESTs", function() {

    let createdObjectId: string;

    it("Should get all records (GET /api/users)", async() => {
        const response = await axios.get(`${baseURI}/users`);
        expect(response.status).to.be.equal(200);
        expect(response.data).to.have.property("users").to.be.an("array").that.is.empty;
    });

    it("Should create a new object (POST /api/users)", async() => {
        const newObject = {
            username: "guest",
            age: 24,
            hobbies: [
                "reading",
                "writing"
            ]
        };

        const response = await axios.post(`${baseURI}/users`, newObject);
        expect(response.status).to.be.equal(201);
        expect(response.data.user).to.have.property("userId");
        createdObjectId = response.data.user.userId
    });

    describe("Retrieve, Update and Delete object", () => {

        it("Should get single record (GET /api/users/{userId})", async() => {
            const response = await axios.get(`${baseURI}/users/${createdObjectId}`);
            expect(response.status).to.be.equal(200);
            expect(response.data.user.userId).to.equal(createdObjectId);
        });

        it("Should update the created object and return the updated record (PUT /api/users/{userId})", async() => {
            const updatedObject = {
                username: "guest_edited",
                age: 34,
                hobbies: [
                    "coding"
                ]
            };

            const response = await axios.put(`${baseURI}/users/${createdObjectId}`, updatedObject);
            expect(response.status).to.equal(200);
            expect(response.data.user.userId).to.equal(createdObjectId);
        });

        it("Should delete the created object and confirm successful deletion (DELETE /api/users/{userId})", async() => {
            const response = await axios.delete(`${baseURI}/users/${createdObjectId}`);
            expect(response.status).to.equal(204);
        });

        it("Should verify that the deleted object cannot be retrieved (GET /api/users/{userId})", async() => {
            try {
                await axios.get(`${baseURI}/users/${createdObjectId}`);
                expect.fail("Resource should not exist after deletion.");
            } catch (error: any) {
                expect(error.response.status).to.equal(404);
            }
        })
    });
});
