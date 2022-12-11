import { createRepositriesPlugin } from './plugin';

describe('create-repositries', () => {
  it('should export plugin', () => {
    expect(createRepositriesPlugin).toBeDefined();
  });
});
