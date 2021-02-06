import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe('genDiff', () => {
  test('JSON', () => {
    const expected = fs.readFileSync(getFixturePath('expected-json.txt')).toString();

    const actual = genDiff(getFixturePath('before.json'), getFixturePath('after.json'));
    expect(actual).toEqual(expected);
  });
});
