import * as Helpers from './helpers';

describe('Helpers', () => {
  it('should exist', () => {
    expect(Helpers).toBeTruthy();
    expect(Helpers.add).toBeTruthy();
  });

  it('should add positive numbers correctely', () => {
    expect(Helpers.add(40, 2)).toBe(42);
  });

});
