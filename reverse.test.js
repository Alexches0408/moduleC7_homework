const reverse = require('./reverse')

describe("test for reverse of string", () => {
  it("should reverse string", () => {
    expect(reverse("lime")).toBe("emil")
  });
});