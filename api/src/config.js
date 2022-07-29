const request = require("supertest")("http://localhost:3001");
const expect = require("chai").expect;

module.exports = {
  request,
  expect,
};
