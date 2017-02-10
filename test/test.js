/* global describe, it */
const expect = require('chai').expect;

describe('dummy test', () => {
  it('should run and not crash and not fail', () => {
    const a = 1;

    expect(a + a).to.equal(2);
  });
});