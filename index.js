import path from 'path';
import readFile from './src/readFile.js';
import generateAst from './src/generateAST.js';
import parse from './src/parsers.js';
import format from './src/formatters/index.js';

/**
 * The function to calculate differences between two configuration files (json, yaml, and ini).
 * You can calculate differences between files with different extensions,
 * e.g. ``before.ini`` and ``after.yml``.
 *
 * @param {String} path1 The path to the first file. Can be relative or absolute.
 * @param {String} path2 The path to the second file. Can be relative or absolute.
 * @param {String} formatType
 *
 * Optional. There are three available format types:
 *
 * - **stylish** - pretty-printed JSON-like format with indents
 * and braces for nested objects. Used by default.
 * - **plain** - simplistic format, which represents the list of changed properties.
 * - **json** - the result of ``JSON.stringify`` of AST.
 * @returns {String} The calculated diff.
 */
const genDiff = (path1, path2, formatType = 'stylish') => {
  const ext1 = path.extname(path1).slice(1);
  const ext2 = path.extname(path2).slice(1);

  const content1 = readFile(path1);
  const content2 = readFile(path2);

  const obj1 = parse(content1, ext1);
  const obj2 = parse(content2, ext2);

  const ast = generateAst(obj1, obj2);

  return format(ast, formatType);
};

export default genDiff;
