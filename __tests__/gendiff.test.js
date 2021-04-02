import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import readFile from '../src/read-file.js';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename, type) => path.join(__dirname, '..', '__fixtures__', type, filename);

describe.each(['json', 'yml', 'ini'])('%s', (extension) => {
  test.each(['stylish', 'plain', 'json'])('%s', (format) => {
    const expected = readFile(getFixturePath(`${format}.txt`, extension));
    const actual = genDiff(
      getFixturePath(`before.${extension}`, extension),
      getFixturePath(`after.${extension}`, extension),
      format,
    );
    expect(actual).toBe(expected);
  });
});
