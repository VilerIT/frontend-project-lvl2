import path from 'path';
import genDiff from '../src/index.js';

describe('genDiff', () => {
  const expected = '{\n'
  + '\t- edited: 1\n'
  + '\t+ edited: 11\n'
  + '\t- deleted: 0\n'
  + '\tsame: 2\n'
  + '\t+ new: 5\n'
  + '}';

  test('JSON, relative path', () => {
    const actual = genDiff('__tests__/examples/before.json', '__tests__/examples/after.json');
    expect(actual).toEqual(expected);
  });

  test('JSON, absolute path', () => {
    const absolutePath = path.resolve(process.cwd(), '__tests__/examples');
    const actual = genDiff(`${absolutePath}/before.json`, `${absolutePath}/after.json`);

    expect(actual).toEqual(expected);
  });
});
