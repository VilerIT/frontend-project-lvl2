import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import readFile from '../src/readfile.js';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe('genDiff', () => {
  const expected = readFile(getFixturePath('expected.txt')).toString();

  test.each(['json', 'yml'])('%s', (extension) => {
    const actual = genDiff(getFixturePath(`before.${extension}`), getFixturePath(`after.${extension}`));
    expect(actual).toBe(expected);
  });
});
