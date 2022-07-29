const request = require("supertest")("http://localhost:3001");
const expect = require("chai").expect;

describe("Iecho", () => {
  it("should return the reverse text", async () => {
    const response = await request.get("/iecho?text=Hello World!!!");
    expect(response.status).to.equal(200);
    expect(response.body.text).to.equal("!!!dlroW olleH");
  }).timeout(5000);

  it("should return an error if there is no text", async () => {
    const response = await request.get("/iecho?text=");
    expect(response.status).to.equal(400);
    expect(response.body.error).to.equal("No text");
  }).timeout(5000);
});

describe("Palindrome", () => {
  it("should return true when text is palindrome", async () => {
    const response = await request.get("/iecho?text=Neuquen");
    expect(response.status).to.equal(200);
    expect(response.body.palindrome).to.equal(true);
  }).timeout(5000);

  it("should return true when text is not palindrome", async () => {
    const response = await request.get("/iecho?text=Hello World");
    expect(response.status).to.equal(200);

    expect(response.body.palindrome).to.equal(false);
  }).timeout(5000);
});
