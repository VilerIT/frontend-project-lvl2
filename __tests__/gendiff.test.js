import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getDiff = (format) => {
  const pathToFixtures = path.join(__dirname, '..', '__fixtures__');
  return genDiff(
    path.join(pathToFixtures, `before.${format}`),
    path.join(pathToFixtures, `after.${format}`),
  );
};

describe('genDiff', () => {
  test('JSON', () => {
    const expected = '{\n'
      + '  - edited: 1\n'
      + '  + edited: 11\n'
      + '  - deleted: 0\n'
      + '  same: 2\n'
      + '  + new: 5\n'
      + '}';

    const actual = getDiff('json');
    expect(actual).toEqual(expected);
  });
});
