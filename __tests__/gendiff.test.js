import genDiff from '../src/gendiff.js';

const getDiff = (format) => genDiff(
  `__tests__/examples/before.${format}`,
  `__tests__/examples/after.${format}`,
);

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
