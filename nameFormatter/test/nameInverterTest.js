const chai = require('chai');
const assert = chai.assert;

const NameFormatter = require('../name-formatter');

describe('invert name', function() {
    it('should return an empty string when passed an empty string', function() {
        const nameFormatter = new NameFormatter();
        const inputName = "";
        const expectedOutput = "";
        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
      });
    it('should return name when passed an a single name', function() {
        const nameFormatter = new NameFormatter();
        const inputName = "johnny";
        const expectedOutput = "johnny";
        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
      });
    it('should return name when passed an a single name with trailing and leading whitespace', function() {
        const nameFormatter = new NameFormatter();
        const inputName = "  johnny    ";
        const expectedOutput = "johnny";
        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
      });
    it('should return lastname, firstname when passed an a first name  and last name', function() {
        const nameFormatter = new NameFormatter();
        const inputName = "johnny trinh";
        const expectedOutput = "trinh, johnny";
        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
      });
    it('should return lastname, firstname when passed an a first name  and last name with trailing and leading whitespace', function() {
        const nameFormatter = new NameFormatter();
        const inputName = "  John Doe   ";
        const expectedOutput = "Doe, John";
        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
      });
    it('should return an empty string when passed a single honorific', function() {
        const nameFormatter = new NameFormatter();
        const inputName = "Dr. ";
        const expectedOutput = "";
        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
      });
    it('should return an honorific. firstname when passed an honorific. firstname', function() {
        const nameFormatter = new NameFormatter();
        const inputName = "Dr. John";
        const expectedOutput = "Dr. John";
        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
      });
    it('should return an honorific. latname, firstname when passed an honorific. firstname, lastname', function() {
        const nameFormatter = new NameFormatter();
        const inputName = "Dr. Sarah White";
        const expectedOutput = "Dr. White, Sarah";
        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
      });
    it('should return an honorific. latname, firstname when passed an honorific. firstname, lastname with leading/trailing whitespace', function() {
        const nameFormatter = new NameFormatter();
        const inputName = "  Dr. Sarah White ";
        const expectedOutput = "Dr. White, Sarah";
        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
      });
    it('should return undefined when passed an undefined name', function() {
        const nameFormatter = new NameFormatter();
        const inputName = undefined;
        const expectedOutput = undefined;
        assert.equal(nameFormatter.invertName(inputName), expectedOutput);
      });
    
});