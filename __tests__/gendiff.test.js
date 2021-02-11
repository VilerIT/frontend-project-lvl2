import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import readFile from '../src/readfile.js';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe.each(['json', 'yml'])('%s', (extension) => {
  test.each(['stylish', 'plain'])('%s', (format) => {
    const expected = readFile(getFixturePath(`expected-${format}.txt`));
    const actual = genDiff(getFixturePath(`before.${extension}`), getFixturePath(`after.${extension}`), format);
    expect(actual).toBe(expected);
  });
});
