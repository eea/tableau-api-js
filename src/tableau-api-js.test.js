import { getLatestTableauVersion } from './tableau-api-js';

test('Get latest version', () => {
  expect(getLatestTableauVersion()).toBe('2.8.0');
});
