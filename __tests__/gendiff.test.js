import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import readFile from '../src/readfile.js';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe('genDiff', () => {
  test('JSON', () => {
    const expected = readFile(getFixturePath('expected-json.txt')).toString();

    const actual = genDiff(getFixturePath('before.json'), getFixturePath('after.json'));
    expect(actual).toEqual(expected);
  });
});
