import genDiff from '../src/gendiff.js';

const getDiff = (format) => genDiff(
  `__tests__/examples/before.${format}`,
  `__tests__/examples/after.${format}`,
);

describe('genDiff', () => {
  test('JSON', () => {
    const expected = '{\n'
      + '\t- edited: 1\n'
      + '\t+ edited: 11\n'
      + '\t- deleted: 0\n'
      + '\tsame: 2\n'
      + '\t+ new: 5\n'
      + '}';

    const actual = getDiff('json');
    expect(actual).toEqual(expected);
  });
});
