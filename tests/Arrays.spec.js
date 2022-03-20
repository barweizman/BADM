const { expect } = require("chai");

describe("Array", () => {
  describe("#sort", () => {
    it("should sort the array by name", () => {
      const names = ["Bar", "Alice", "Maayan", "David"];
      expect(names.sort()).to.be.eql(["Alice", "Bar", "David", "Maayan"]);
    });
  });
});
